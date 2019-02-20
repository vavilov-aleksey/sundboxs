'use strict';

// Проблема: нужно сделать position:fixed и блок прилипает к правому скролу и накладывается на него
// Решение:
export default class Footer {
  constructor(){
    const site = document.querySelector('.site');

    if(site){
      let siteNotify = document.querySelector('.site__notify');
      if(siteNotify) this.widthScroll(site, siteNotify)
    }
  }

  widthScroll(parent, element){
    this.scrollWidth = parent.offsetWidth - parent.clientWidth;
    this.siteNotify = element;

    if(this.siteNotify) this.siteNotify.style.right = `${this.scrollWidth}px`;
  }
  
  // Если понадобится делать по краям отступы
  widthScroll(parent, element) {
    this.scrollWidth = element.offsetWidth - parent.clientWidth;
    this.siteNotify = element;

    if (this.siteNotify) {
      this.siteNotify.style.right = `${this.scrollWidth}px`;
      this.siteNotify.style.width = `calc(100% - ${this.scrollWidth}px)`;
    }
  }
}
