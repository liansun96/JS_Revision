const url = "https://fakestoreapi.com/products/1";

const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Http error status: ${res.status}`);
    }
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

fetchData(url)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
