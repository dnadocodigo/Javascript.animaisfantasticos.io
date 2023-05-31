import outsideEvents from "../helpers/outside_events.js";

class MenuMobile{
  constructor(menuButton, menuList, events){
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    
    this.activeClass = 'active';
    // define touchstart e click como argumento padrão
    // de events caso o usuário não define
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;
    this.openMenu = this.openMenu.bind(this);
  }
 
  openMenu(){
    this.menuButton.classList.add(this.activeClass);
    this.menuList.classList.add(this.activeClass);
    outsideEvents(this.menuList, this.events, () => {
      this.menuButton.classList.remove(this.activeClass);
      this.menuList.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvent(){
   
      this.events.forEach((userEvent) => this.menuButton.addEventListener(userEvent, this.openMenu),
      );
  }
  
  init(){
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvent();
    }
    return this;
  }
}
export default MenuMobile;
