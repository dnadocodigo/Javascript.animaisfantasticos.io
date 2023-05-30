export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move a tooltip com base em seus estilos
  // de acordo com a posição do mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 150}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // Remove a tooltip e os eventos de mousemove e mouseleave
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleavw", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // Cria a tooltip box e coloca no body
  createTooltipsBox(element) {
    const tooltipBox = document.createElement("div");
    const tooltipText = element.getAttribute("aria-label");

    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = tooltipText;

    document.body.appendChild(tooltipBox);

    this.tooltipBox = tooltipBox;
  }

  // Cria a tooltip e adiciona os eventos
  // de mousemove e mouseleave ao target
  onMouseOver({ currentTarget }) {
    // cria a tooltipbox e coloca em uma propriedade
    this.createTooltipsBox(currentTarget);

    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  addTooltipsEvent() {
    this.tooltips.forEach((item) =>
      item.addEventListener("mouseover", this.onMouseOver),
    );
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipsEvent();
    }
    return this;
  }
}
