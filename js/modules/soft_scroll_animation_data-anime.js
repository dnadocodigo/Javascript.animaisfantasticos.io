const initSoftScrollAnimation = () => {
  const scrollSection = document.querySelectorAll('[data-anime="scroll"]');
  const halfScreen = window.innerHeight * 0.6;

  const animatedScroll = () => {
    scrollSection.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      const isSectionVisible = sectionTop - halfScreen < 0;

      if (isSectionVisible) {
        section.classList.add("ativo");
      } else if (section.classList.contains("ativo")) {
        section.classList.remove("ativo");
      }
    });
  };

  if (scrollSection.length) {
    animatedScroll();
    window.addEventListener("scroll", animatedScroll);
  }
};
export default initSoftScrollAnimation;
