const url =
  "https://api.themoviedb.org/3/discover/movie?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=4";
// const url = "https://fakestoreapi.com/products/1";

const options = {
  method: "GET",
};

// function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`Http error status:${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   });
// }

async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Http error status ${res.status}`);
    }
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

fetchData(url)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
