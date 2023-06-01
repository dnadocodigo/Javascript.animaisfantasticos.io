class Opening{
  constructor(operation, activeClass){
    this.operation = document.querySelector(operation);
    this.activeClass = activeClass;
  }

  dataOpening(){
    this.daysOfTheWeek = this.operation.dataset.week.split(",").map(Number);
    this.openingHours = this.operation.dataset.schedule.split(",").map(Number);
  }
  
  dataNow(){
    this.DateNow = new Date();
    this.currentDay = this.DateNow.getDay();
    this.currentTime = this.DateNow.getUTCHours() - 3;
  }
  
  isOpen(){
    const openWeek = this.daysOfTheWeek.indexOf(this.currentDay) !== -1;
    const openingTime = this.currentTime >= this.openingHours[0] && this.currentTime < this.openingHours[1];

    return openWeek && openingTime;
  }

  activeOpen(){
    if(this.isOpen){
      this.operation.classList.add(this.activeClass);
    }
  }
  
  init(){
    if (this.isOpen) {
      this.dataOpening();
      this.dataNow();
      this.activeOpen();
    }
    return this;
  }
};
export default Opening;
