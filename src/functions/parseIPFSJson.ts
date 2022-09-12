import defaultImage from "../assets/images/default.png";
export default async function parseJSON(urlList: []): Promise<any> {
  try {
    return Promise.all(
      urlList.map((url) => {
        let gURL = `https://storage.googleapis.com/beardedbuddies/images-reveal/${url}`;
        console.log(gURL);
        fetch(gURL)
          .then((r) => {
            console.log("auiq");
            console.log("r", r);
            console.log("json", r.json());
            return r.json();
          })
          .then((data) => {
            console.log("data", data);
            return data;
          })
          .catch((error) => console.log(error));
      })
    ) as any;
  } catch (err) {
    console.log("err", err);
  }
}
