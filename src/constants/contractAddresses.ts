export let bearedAddress: string;
if (process.env.NODE_ENV == "production") {
  bearedAddress = "0x9bff6Bc431B3A7d41bdD8142c6BDEd37C5b7b562";
}
if (process.env.NODE_ENV == "development") {
  bearedAddress = "0x9bff6Bc431B3A7d41bdD8142c6BDEd37C5b7b562";
}
