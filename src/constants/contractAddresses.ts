export let bearedAddress: string;
if (process.env.NODE_ENV == "production") {
  bearedAddress = "0xD9014F1a730F86b8B989233Ec8625B99669A6F6b";
}
if (process.env.NODE_ENV == "development") {
  bearedAddress = "0x780e1E9e9e44aa86724529B6faE782C8Cb3894DE";
}
