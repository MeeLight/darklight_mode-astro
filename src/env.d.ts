/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
