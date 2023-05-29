class ScrollAnime {
  constructor(sections) {
    this.scrollSection = document.querySelectorAll(sections);
    this.halfScreen = window.innerHeight * 0.6;

    this.checkDistance = this.checkDistance.bind(this);
  }

  // pega a didtâncoa de cada item
  // em relação ao topo do site.
  getDistannce() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsettop;
      return {
        element: section,
        offset: Math.floor(offset - this.halfScreen)
      };
    });
  }

  // verifica a distância em cada objetos 
  // em relação ao scroll do site.
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("active");
      } else if (item.element.classList.contains("active")) {
        item.classList.remove("active");
      }
    });
  }

  init() {
    if(this.sections.length){
      this.getDistannce();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  // remove o evento de scroll
  stop(){
    window.removeEventListener('scroll', this.checkDistance);
  }
}
export default ScrollAnime;
