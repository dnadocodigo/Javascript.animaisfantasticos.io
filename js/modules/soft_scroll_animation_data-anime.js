const initSoftScrollAnimation = () => {
  const scrollSection = document.querySelectorAll('[data-anime="scroll"]');
  const halfScreen = window.innerHeight * 0.6;

  const animatedScroll = () => {
    scrollSection.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      const isSectionVisible = sectionTop - halfScreen < 0;

      if (isSectionVisible) {
        section.classList.add("active");
      } else if (section.classList.contains("active")) {
        section.classList.remove("active");
      }
    });
  };

  if (scrollSection.length) {
    animatedScroll();
    window.addEventListener("scroll", animatedScroll);
  }
};
export default initSoftScrollAnimation;
