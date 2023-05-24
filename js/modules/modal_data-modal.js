export default class Modal {
  constructor(openButton, closeButton, containerModal) {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.containerModal = document.querySelector(containerModal);
    //  bind  this ao callback
    // para fazer referência ao objeto
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  // abre ou fecha o moaal
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  //  fecha o modal ao clicar fora dele
  clickOutsideModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // adiciona os eventos ao modal
  addModalEvent() {
    this.openButton.addEventListener("click", this.eventToggleModal);
    this.closeButton.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickOutsideModal);
  }

  init() {
    console.log(this.containerModal);
    console.log(this.openButton);
    console.log(this.closeButton);
    if (this.openButton && this.closeButton && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
