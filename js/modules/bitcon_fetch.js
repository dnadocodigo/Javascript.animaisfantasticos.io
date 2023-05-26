const initFetchBitcoin = () => {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((bitcoin) => {
      const price = document.querySelector(".btc-price");
      price.innerHTML = (100 / bitcoin.BRL.sell).toFixed(5);
    })
    .catch((erro) => console.log(Error(erro)));
};
export default initFetchBitcoin;
