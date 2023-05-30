class ScrollAnime {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfScreen = window.innerHeight * 0.6;

    this.checkDistance = this.checkDistance.bind(this);
  }

  // Pega a distância de cada item em relação
  // ao topo do site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.halfScreen),
      };
    });
  }

  // Verifica a distância em cada objeto
  // em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("active");
      } else if (item.element.classList.contains("active")) {
        item.element.classList.remove("active");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }
}
export default ScrollAnime;
