/// <reference types="vite/client" />

declare module "*.asset.json" {
  const value: { url: string; asset_id: string; [key: string]: unknown };
  export default value;
}
