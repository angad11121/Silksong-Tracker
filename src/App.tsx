import React from "react";
import { decodeFile } from "./decoder.js";
import backgroundImage from "../static/background.jpg";

export default function App() {
  const [file, setFile] = React.useState(null);
  const [decoded, setDecoded] = React.useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (event) => {
        // `event.target.result` is an ArrayBuffer
        const bytes = new Uint8Array(event.target.result);
        const result = decodeFile(bytes); // pass bytes
        setDecoded(result);
      };

      reader.onerror = (err) => {
        console.error("File read error", err);
      };

      reader.readAsArrayBuffer(selectedFile); // read raw bytes
    }
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: "10px",
  };

  return (
    <div style={containerStyle}>
      <h1 className="Title"> Silksong Progress Tracker</h1>
      <input type="file" onChange={handleFileChange} />
      {file && <p>Selected file: {file.name}</p>}
      {file && <p>{JSON.stringify(decoded)}</p>}
    </div>
  );
}
