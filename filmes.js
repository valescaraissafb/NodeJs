
const filmesFavoritos = [
  {
    titulo: "O Senhor dos Anéis: A Sociedade do Anel",
    diretor: "Peter Jackson",
    ano: 2001
  },
  {
    titulo: "Interestelar",
    diretor: "Christopher Nolan",
    ano: 2014
  },
  {
    titulo: "Cidade de Deus",
    diretor: "Fernando Meirelles",
    ano: 2002
  },
  {
    titulo: "Forrest Gump",
    diretor: "Robert Zemeckis",
    ano: 1994
  }
];


console.log("🎬 Meus Filmes Favoritos:");
console.table(filmesFavoritos);

// Encontrar o filme mais antigo
const filmeMaisAntigo = filmesFavoritos.reduce((maisAntigo, filmeAtual) => {
  return filmeAtual.ano < maisAntigo.ano ? filmeAtual : maisAntigo;
});
console.log(`Filme mais antigo: "${filmeMaisAntigo.titulo}" (${filmeMaisAntigo.ano})`);
