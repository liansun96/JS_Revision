const url =
  "https://api.themoviedb.org/3/discover/movie?api_key=7fe0fbe72550cf27a1a5a738cabda3db&language=en-US&page=1";


const options = {
  method: "GET",  
};

function fatchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url ,options)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Http error status : ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

fatchData(url)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });


