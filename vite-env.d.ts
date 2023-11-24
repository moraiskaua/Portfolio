/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_SERVICE_ID: string;
  VITE_TEMPLATE_ID: string;
  VITE_PUBLIC_KEY: string;
}

declare module 'react' {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}
