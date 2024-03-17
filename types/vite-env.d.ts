/// <reference types="vite/client" />

// NOTE: Vite の環境変数を使うときは VITE_ というプレフィックスが必要
interface ImportMetaEnv {
  VITE_MAP_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
