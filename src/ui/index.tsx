import { type ChangeEvent, type ReactElement, useEffect, useState } from 'react';

import { decodeFile } from '@/parser/decoder/decoder';
import { TabRenderer } from '@/ui/tabs';
import { Footer } from '@/ui/components/Footer';
import { Preload } from '@/ui/preload';
import type { SaveData } from '@/parser/types';

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
      <Preload />
      <div className="flex flex-col gap-10 p-6 max-w-screen-lg mx-auto min-h-screen">
        <h1 className="">Silksong Progress Tracker</h1>
        <div className="flex gap-4 items-center">
          <input
            id="upload"
            type="file"
            accept=".dat,.dat.bak"
            value=""
            onChange={handleFileChange}
            className="rounded-xl p-2"
          />
          {decoded ? (
            <>
              <span className="text-md text-stone-400 bg-[#0006] px-4 py-2 rounded-md">
                Profile {decoded.playerData.profileID} (
                {Math.floor(decoded.playerData.completionPercentage)}%)
              </span>
              <button onClick={() => setDecoded(null)}>Clear</button>
            </>
          ) : null}
        </div>
        <TabRenderer data={decoded} />
        <Footer />
      </div>
    </>
  );
}
