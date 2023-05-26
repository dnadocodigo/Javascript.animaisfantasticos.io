import AnimeNumber from "./anime_number.js";

export default function initNumberFetchAnimals() {
  function createAnimalsElement(animal) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("numero-animal");
    createDiv.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return createDiv;
  }
  async function fetchAnimals(url) {
    try {
      const animalsResponses = await fetch(url);
      const animalsJSON = await animalsResponses.json();
      const numberGrid = document.querySelector(".numbers-grid");
      animalsJSON.forEach((animal) => {
        const divAnimal = createAnimalsElement(animal);
        numberGrid.appendChild(divAnimal);
      });
      const animeNumero = new AnimeNumber("[data-number]", ".numero", "active");
      animeNumero.init();
    } catch (erro) {
      console.log(erro);
    }
  }
  fetchAnimals("./js/jsons/animalsApi.json");
}
