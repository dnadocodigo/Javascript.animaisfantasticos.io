const initFuncionamento = () => {
  const funcionanmento = document.querySelector("[data-semana]");
  const diasSemana = funcionanmento.dataset.semana.split(",").map(Number);
  const horarioFuncionamento = funcionanmento.dataset.horario
    .split(",")
    .map(Number);
  const dataAtual = new Date();

  const diaAtusl = dataAtual.getDay();
  const horaAtual = dataAtual.getHours();

  const estaAbeto = diasSemana.indexOf(diaAtusl) !== -1;
  const horarioAbertura =
    horaAtual >= horarioFuncionamento[0] && horaAtual < horarioFuncionamento[1];

  if (estaAbeto && horarioAbertura) {
    funcionanmento.classList.add("aberto");
  }
};
export default initFuncionamento;
