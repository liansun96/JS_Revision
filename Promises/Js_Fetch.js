// const url =  "https://api.themoviedb.org/3/discover/movie?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1";
const url = "https://fakestoreapi.com/products/1";

const options = {
  method: "GET",
};

// async function fetchData(url){
//   const res = await fetch(url)
//   const data = res.json();
//   return data;
// }

const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Http errer status : ${res.status}`);
    }
    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

fetchData(url)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
