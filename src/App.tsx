import React from "react";
import { decodeFile } from "./decoder.js";
import type { SaveData } from "./types.ts";

export default function App() {
  const [file, setFile] = React.useState<File | null>(null);
  const [decoded, setDecoded] = React.useState<SaveData | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target!.files?.[0];
    setFile(selectedFile ?? null);

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const bytes = new Uint8Array(event.target!.result as ArrayBuffer);
        const result = decodeFile(bytes); // pass bytes
        setDecoded(result);
      };

      reader.onerror = (err) => {
        console.error("File read error", err);
      };

      reader.readAsArrayBuffer(selectedFile); // read raw bytes
    }
  };

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
      {file ? <p>{JSON.stringify(decoded)}</p> : null}
    </div>
  );
}
