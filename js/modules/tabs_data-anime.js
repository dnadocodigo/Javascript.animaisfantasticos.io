const initActiveTabs = () => {
  const tabMenu = document.querySelectorAll('[data-tab = "menu"] li');
  const tabContent = document.querySelectorAll(
    '[data-tab = "content"] section',
  );
  const activeClass = "ativo";

  tabContent[0].classList.add(activeClass);

  if (tabMenu.length && tabContent.length) {
    const activeTab = (index) => {
      const addDataAnime = tabContent[index].dataset.anime;

      tabContent.forEach((item) => {
        item.classList.remove(activeClass);
      });
      tabContent[index].classList.add(activeClass);
      tabContent[index].classList.add(addDataAnime);
    };

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
};
export default initActiveTabs;
