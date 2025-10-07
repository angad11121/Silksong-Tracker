import { type ChangeEvent, type ReactElement, useEffect, useState } from 'react';

import { decodeFile } from '@/decoder/decoder.js';
import { TabRenderer } from '@/ui/tabs';
import { Footer } from '@/ui/components/Footer';
import type { SaveData } from '@/types';

const LOCAL_STORAGE_KEY = 'save';

export default function App(): ReactElement {
  const [file, setFile] = useState<File | null>(null);
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
    <>
      <div className="flex flex-col gap-10 p-6 max-w-screen-lg mx-auto min-h-screen">
        <h1 className="">Silksong Progress Tracker</h1>
        <input
          id="upload"
          type="file"
          accept=".dat,.dat.bak"
          onChange={handleFileChange}
          className="rounded-xl self-start p-2"
        />
        {decoded ? <TabRenderer data={decoded} /> : null}
        <Footer />
      </div>
    </>
  );
}
