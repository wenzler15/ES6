// Exercicio 1
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
// const umPorSegundo = async () => {
//   console.log(await delay(), "1s");

//   console.log(await delay(), "2s");

//   console.log(await delay(), "3s");
// };

// umPorSegundo();

// Exercicio 2

import axios from "axios";
// const getUserFromGithub = async username => {
//   try {
//     const response = await axios.get(
//       `https://api.github.com/users/${username}`
//     );
//     console.log(response);
//   } catch (err) {
//     console.warn("Usuário não existe");
//   }
// };
// getUserFromGithub("diego3g");
// getUserFromGithub("diego3g124123");

// Exercicio 3

// class Github {
//   static async getRepositories(repo) {
//     try {
//       const response = await axios.get(`https://api.github.com/repos/${repo}`);

//       console.log(response.data);
//     } catch (err) {
//       console.log("Repositório não existe");
//     }
//   }
// }
// Github.getRepositories("rocketseat/rocketseat.com.br");
// Github.getRepositories("rocketseat/dslkvmskv");

// Exercicio 4

// const buscaUsuario = async usuario => {
//   try {
//     const resp = await axios.get(`https://api.github.com/users/${usuario}`);
//     console.log(resp.data);
//   } catch (err) {
//     console.log("Usuário não existe");
//   }
// };
// buscaUsuario("diego3g");
