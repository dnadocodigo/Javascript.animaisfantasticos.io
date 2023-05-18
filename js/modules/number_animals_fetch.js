import initAnimeNumber from "./anime_number.js";

const initNumberFetchAnimals = () => {
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
      const numberGrid = document.querySelector(".numeros-grid");
      animalsJSON.forEach((animal) => {
        const divAnimal = createAnimalsElement(animal);
        numberGrid.appendChild(divAnimal);
      });
      initAnimeNumber();
    } catch (erro) {
      console.log(erro);
    }
  }
  fetchAnimals("./js/jsons/animalsApi.json");
};
export default initNumberFetchAnimals;
