import React, { type ChangeEvent, type ReactElement, useEffect, useState } from 'react';
import { decodeFile } from './decoder.js';
import { escapeHTML } from './utils.ts';
import { DisplayType } from './constants.ts';
import type { SaveData, PlayerData } from './types.ts';
import { displayPlayerData } from './dataDisplayer.ts';

const LOCAL_STORAGE_KEY = 'save';

function RawDataDisplay({ data }: { data: SaveData | PlayerData }): ReactElement | null {
  if (!data) return null;
  return (
    <div
      className="p-4 bg-[rgba(0,0,0,0.8)] rounded-xl"
      dangerouslySetInnerHTML={{
        __html: escapeHTML(JSON.stringify(data, null, 2))
          .replaceAll('\n', '<br/>')
          .replaceAll(' ', '&nbsp;'),
      }}
    />
  );
}

export default function App(): ReactElement {
  const [file, setFile] = useState<File | null>(null);
  const [displayType, setDisplayType] = useState<DisplayType>(DisplayType.Main);
  const [decoded, setDecoded] = useState<SaveData | null>(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) return JSON.parse(savedData);
    return null;
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target!.files?.[0];
    setFile(selectedFile ?? null);

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = event => {
        const bytes = new Uint8Array(event.target!.result as ArrayBuffer);
        const result = decodeFile(bytes); // pass bytes
        setDecoded(result);
      };

      reader.onerror = err => {
        console.error('File read error', err);
      };

      reader.readAsArrayBuffer(selectedFile); // read raw bytes
    }
  };

  useEffect(() => {
    if (decoded) localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(decoded));
    else localStorage.removeItem(LOCAL_STORAGE_KEY);
  }, [decoded]);

  return (
    <div className="flex flex-col gap-10 p-6">
      <h1 className="">Silksong Progress Tracker</h1>
      <input
        id="upload"
        type="file"
        onChange={handleFileChange}
        className="rounded-xl self-start p-2"
      />
      {file ? <p>Selected file: {file.name}</p> : null}
      {decoded ? <RawDataDisplay data={displayPlayerData(decoded, displayType)} /> : null}
    </div>
  );
}
