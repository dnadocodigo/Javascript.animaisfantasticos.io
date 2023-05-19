class SoftScroll {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }
    this.softScrollToSection = this.softScrollToSection.bind(this);
  }

  softScrollToSection(event) {
    event.preventDefault();
    const selectHref = event.currentTarget.getAttribute("href");
    const selectSection = document.querySelector(selectHref);

    selectSection.scrollIntoView(this.options);
  }

  addLinksEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.softScrollToSection);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinksEvent();
    }
    return this;
  }
}
export default SoftScroll;
