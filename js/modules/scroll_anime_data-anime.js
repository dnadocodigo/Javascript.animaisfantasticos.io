class ScrollAnime{
  constructor(sections){
    this.scrollSection = document.querySelectorAll(sections);
    this.halfScreen = window.innerHeight * 0.6;

    this.animatedScroll = this.animatedScroll.bind(this);
  }
  
  animatedScroll(){
    this.scrollSection.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      const isSectionVisible = sectionTop - this.halfScreen < 0;

      if (isSectionVisible) {
        section.classList.add("active");
      } else if (section.classList.contains("active")) {
        section.classList.remove("active");
      }
    });
  };

  init(){
    window.addEventListener("scroll", this.animatedScroll);
  }

};
export default ScrollAnime;
