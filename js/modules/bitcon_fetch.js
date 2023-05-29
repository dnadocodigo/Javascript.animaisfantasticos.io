function fetchBitcoin(url, target){
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const price = document.querySelector(target);
      price.innerHTML = (100 / bitcoin.BRL.sell).toFixed(5);
    })
    .catch((erro) => console.log(Error(erro)));
};
export default fetchBitcoin;
