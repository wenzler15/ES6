// const minhaPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("OK");
//     }, 2000);
//   });

// // async function executaPromise() {
// //   const response = await minhaPromise();

// //   console.log(response);
// // }

// // executaPromise();

// const executaPromise = async () => {
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
// };

// executaPromise();

import axios from "axios";

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
    } catch (err) {
      console.warn("Erro na API");
    }
  }
}

Api.getUserInfo("diego3g");
Api.getUserInfo("diego3ssdg");
