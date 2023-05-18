const initSoftScroll = () => {
  const linksInternos = document.querySelectorAll(
    '[data-menu="soft"] a[href^="#"]',
  );

  const softScrollToSection = (event) => {
    event.preventDefault();
    const selectHref = event.currentTarget.getAttribute("href");
    const selectSection = document.querySelector(selectHref);

    selectSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  linksInternos.forEach((link) => {
    link.addEventListener("click", softScrollToSection);
  });
};
export default initSoftScroll;
