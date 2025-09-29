import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // @ts-ignore -- This isn't in types, for some reason
  test: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
      'fixtures/': new URL('./tests/fixtures/', import.meta.url).pathname,
    },
  },
});
