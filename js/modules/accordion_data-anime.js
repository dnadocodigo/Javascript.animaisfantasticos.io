const initAccordionList = () => {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt',
  );
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    const activeAccordionList = (event) => {
      console.log(event.currentTarget.classList.toggle(activeClass));
      console.log(
        event.currentTarget.nextElementSibling.classList.toggle(activeClass),
      );
    };
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordionList);
    });
  }
};
export default initAccordionList;
