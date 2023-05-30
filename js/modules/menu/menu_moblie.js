import outsideEvents from "../helpers/outside_events.js";

const initMenuMobile = () => {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  if (menuButton) {
    const openMenu = () => {
      menuButton.classList.add("ativo");
      menuList.classList.add("ativo");
      outsideEvents(menuList, eventos, () => {
        menuButton.classList.remove("ativo");
        menuList.classList.remove("ativo");
      });
    };

    eventos.forEach((userEvent) =>
      menuButton.addEventListener(userEvent, openMenu),
    );
  }
};
export default initMenuMobile;
