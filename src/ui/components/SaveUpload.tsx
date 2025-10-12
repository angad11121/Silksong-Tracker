import { useEffect, type ChangeEvent, type ReactElement } from 'react';
import { decodeFile } from '@/parser/decoder/decoder';
import BlankSaveData from '@/info/blankSave';

import type { SaveData } from '@/parser/types';

function BlankSave({ onChange }: { onChange: (value: SaveData) => void }): ReactElement {
  return (
    <button data-secondary onClick={() => onChange(BlankSaveData)}>
      Use Demo Profile
    </button>
  );
}

export const SAVE_DATA_KEY = 'save';
export function SaveUpload({
  decoded,
  onUpload,
}: {
  decoded: SaveData | null;
  onUpload: (saveData: SaveData | null) => void;
}) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target!.files?.[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = event => {
        const bytes = new Uint8Array(event.target!.result as ArrayBuffer);
        const result = decodeFile(bytes); // pass bytes
        onUpload(result);
      };

      reader.onerror = err => {
        console.error('File read error', err);
      };

      reader.readAsArrayBuffer(selectedFile); // read raw bytes
    }
  };

  useEffect(() => {
    if (decoded) localStorage.setItem(SAVE_DATA_KEY, JSON.stringify(decoded));
    else localStorage.removeItem(SAVE_DATA_KEY);
  }, [decoded]);

  return (
    <>
      <input id="upload" type="file" accept=".dat,.dat.bak" value="" onChange={handleFileChange} />
      {decoded ? (
        <>
          <span className="text-md text-stone-400 bg-[#0006] px-4 py-2 rounded-md">
            {decoded.playerData.profileID === 0 ? (
              <>Using Demo Profile</>
            ) : (
              <>
                Profile {decoded.playerData.profileID} (
                {Math.floor(decoded.playerData.completionPercentage)}%)
              </>
            )}
          </span>
          <button data-secondary onClick={() => onUpload(null)}>
            Clear
          </button>
        </>
      ) : (
        <BlankSave onChange={value => onUpload(value)} />
      )}
    </>
  );
}
