import outsideEvents from "./outside_events.js";

const initDropdownMenu = () => {
  const dropdwnMenus = document.querySelectorAll("[data-dropdown]");
  function handleClick(event) {
    event.preventDefault();
    this.classList.add("ativo");
    outsideEvents(this, ["touchstart", "click"], () => {
      this.classList.remove("ativo");
    });
  }
  dropdwnMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
};
export default initDropdownMenu;
