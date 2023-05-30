import AnimeNumber from "../animations/anime_number.js";

export default function fetchAnimal(url, target) {
  // cria a div contendo informaçõs
  // com o número de animains.
  function createAnimalsElement(animal) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("number-animal");
    createDiv.innerHTML = `<h3>${animal.especie}</h3><span data-number>${animal.total}</span>`;
    return createDiv;
  }

  // preenche cada animal no DOM
  const numberGrid = document.querySelector(target);
  function fillAnimal(animal) {
    const divAnimal = createAnimalsElement(animal);
    numberGrid.appendChild(divAnimal);
  }

  // anima os números de cada animal
  function numberAnimalAnime() {
    const animeNumber = new AnimeNumber("[data-number]", ".number", "active");
    animeNumber.init();
  }

  // puxa os animais através de um arquivo json
  // e cria cada animal pelo método de criar animais
  async function createAnimal() {
    try {
      // fetch que espera a resposta.
      // transforma a resposta e transforma em um arquivo json
      const animalsResponses = await fetch(url);
      const animalsJSON = await animalsResponses.json();

      // após a transformação para um arquivo json, ativa as funções
      // para preencher e animar os números
      animalsJSON.forEach((animal) => fillAnimal(animal));
      numberAnimalAnime();
    } catch (erro) {
      console.log(erro);
    }
  }
  return createAnimal();
}
