import CryptoJS from 'crypto-js';
import { CSHARP_HEADER, AES_KEY_STRING } from '@/decoder/constants.js';
import type { SaveData } from '@/types.ts';

export function removeHeader(fileBytes: Uint8Array) {
  const noHeader = fileBytes.subarray(CSHARP_HEADER.length, fileBytes.length - 1);

  let lengthPrefix = 0;
  for (let i = 0; i < 5; i++) {
    lengthPrefix++;
    if ((noHeader[i]! & 0x80) == 0) break;
  }

  return noHeader.subarray(lengthPrefix);
}

export function decodeFile(fileBytes: Uint8Array): SaveData {
  const noHeader = removeHeader(fileBytes);
  const b64String = new TextDecoder('latin1').decode(noHeader);
  const encryptedWords = CryptoJS.enc.Base64.parse(b64String);
  const cipherParams = CryptoJS.lib.CipherParams.create({ ciphertext: encryptedWords });
  const key = CryptoJS.enc.Utf8.parse(AES_KEY_STRING);
  const decrypted = CryptoJS.AES.decrypt(cipherParams, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  const plainText = CryptoJS.enc.Utf8.stringify(decrypted);

  return JSON.parse(plainText);
}
