import outsideEvents from "../helpers/outside_events.js";

class DropdownMenu {
  constructor(dropdwnMenus, events) {
    this.dropdwnMenus = document.querySelectorAll(dropdwnMenus);

    // define touchstart e click como argumento padrão
    // de events caso o usuário não define
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;

    this.activeClass = "active";
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // Ativa o dropdownmenu e adiciona
  // a função que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;

    element.classList.add(this.activeClass);

    outsideEvents(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos ao dropdownmenu
  addDropdownMenuEvents() {
    this.dropdwnMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdwnMenus.length) {
      this.addDropdownMenuEvents();
    }
    return this;
  }
}
export default DropdownMenu;
