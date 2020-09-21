//Exercicio 1
// class Usuario {
//   constructor(email, password) {
//       this.email = email;
//       this.password = password;
//   }
//   isAdmin() {
//       return this.admin === true;
//   }

// }
// class Admin extends Usuario {
//   constructor() {
//       super();
//       this.admin = true;
//   }
// }

// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');

// console.log(User1.isAdmin());
// console.log(Adm1.isAdmin());

//Exercicio 2
// const usuarios = [
//   { nome: "Diego", idade: 23, empresa: "Rocketseat" },
//   { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
//   { nome: "Lucas", idade: 30, empresa: "Facebook" }
// ];

// let withmap = " ";
// usuarios.map(item => {
//   withmap += item.idade + " ";
//   return withmap;
// });

// console.log(withmap);

// let withfilter = " ";
// withfilter = usuarios.filter(
//   item => item.empresa == "Rocketseat" && item.idade > 18
// );

// console.log(withfilter);

// let withfind = " ";
// withfind = usuarios.find(item => item.empresa == "Google");

// console.log(withfind);

// const user = usuarios.filter(item => item.idade * 2 < 51);
// console.log(user);

//Exercicio 3
// // 3.1
// const arr = [1, 2, 3, 4, 5];
// arr.map(item => {
//   return item + 10;
// });

// // 3.2
// // Dica: Utilize uma constante pra function
// const usuario = { nome: "Diego", idade: 23 };
// const mostraIdade = usuario => {
//   return usuario.idade;
// };
// mostraIdade(usuario);

// // 3.3
// // Dica: Utilize uma constante pra function
// const nome = "Diego";
// const idade = 23;
// const mostraUsuario = (nome = "Diego", idade = 18) => {
//   return { nome, idade };
// };
// mostraUsuario(nome, idade);
// mostraUsuario(nome);

// // 3.4
// const promise = () => {
//   return new Promise(function(resolve, reject) {
//     return resolve();
//   });
// };

//Exercicio 4
// const empresa = {
//   nome: "Rocketseat",
//   endereco: {
//     cidade: "Rio do Sul",
//     estado: "SC"
//   }
// };

// const {
//   nome,
//   endereco: { cidade, estado }
// } = empresa;

// console.log(nome); // Rocketseat
// console.log(cidade); // Rio do Sul
// console.log(estado); // SC

// function mostraInfo({ nome, idade }) {
//   return `${nome} tem ${idade} anos.`;
// }
// console.log(mostraInfo({ nome: "Diego", idade: 23 }));

//Exercicio 5
// const arr = [1, 2, 3, 4, 5, 6];
// const [x, ...y] = arr;
// console.log(x); // 1
// console.log(y);

// const soma = (...somando) => {
//   return somando.reduce((a, b) => a + b);
// };

// console.log(soma(1, 2, 3, 4, 5, 6)); // 21
// console.log(soma(1, 2)); // 3

// const usuario = {
//   nome: "Diego",
//   idade: 23,
//   endereco: {
//     cidade: "Rio do Sul",
//     uf: "SC",
//     pais: "Brasil"
//   }
// };

// const usuario2 = { ...usuario, nome: "Gabriel" };
// const usuario3 = {
//   ...usuario,
//   endereco: { ...usuario.endereco, cidade: "Lontras" }
// };

// console.log(usuario2);
// console.log(usuario3);

//Exercicio 6

// const usuario = "Diego";
// const idade = 23;
// console.log(`O usuário ${usuario} possui ${idade} anos`);

//Exercicio 7

// const nome = "Diego";
// const idade = 23;
// const usuario = {
//   nome,
//   idade,
//   cidade: "Rio do Sul"
// };
