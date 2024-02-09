const url = "https://fakestoreapi.com/product/1";

// function fetchData(url){
//   return new Promise((resolve, reject) => {
//       fetch(url).then((res)=>{
//         if(!res.ok){
//           throw new Error(`Http error status:${res.status}`)
//         }
//         return res.json()
//       }).then((data)=>{
//         resolve(data)
//       }).catch((err)=>{
//         reject(err)
//       })
//   })
// }

async function fetchData(url) {
  try {
    let res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Http error status:${res.status}`);
    }
    let data = res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

fetchData(url)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

//Promise fetch()
// function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Http error status: ${response.status}`);
//         }
//         console.log(response);
//         return response.json();
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

// function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`Http error status :${res.status}`);
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

// fetchData(url)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//async/await fetch()
// async function fetchItem(url) {
//   try {
//     const response =  await fetch(url);
//     if(!response.ok){
//         throw new Error(`Http error Status : ${response.status}`)
//     }
//     const data = response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchItem(url).then((data) => {
//   console.log(data);
// }).catch((err)=>{
//     console.error(err);
// })

// async function fetchItem(url) {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) {
//       throw new Error(`Http error status : ${res.status}`);
//     }
//     const data = res.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchItem(url).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.error(err);
// })

// const fetchItem = async (url) => {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) {
//       throw new Error(`Http error status : ${res.status}`);
//     }
//     const data = res.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchItem(url).then((data) => {
//   console.log(data);
// }).catch((err)=>{
//   console.error(err);
// })
