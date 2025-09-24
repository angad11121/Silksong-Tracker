import React from "react";
import { decodeFile } from "./decoder.js";
import type { SaveData } from "./types.ts";

export default function App() {
  const [file, setFile] = React.useState<File | null>(null);
  const [decoded, setDecoded] = React.useState<SaveData | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile =  e.target!.files?.[0];
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
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: "10px",
    }}>
      <h1 className="Title">Silksong Progress Tracker</h1>
      <input type="file" onChange={handleFileChange} />
      {file && <p>Selected file: {file.name}</p>}
      {file && <p>{JSON.stringify(decoded)}</p>}
    </div>
  );
}
