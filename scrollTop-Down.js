let scr = 0;

addEventListener('scroll', () => {
          let top = page.pageYOffset || document.documentElement.scrollTop;
          if (scr < top) {
            //down
          } else {
            //top
          }
          
          return scr = top;
        });
 
&&
static hideScroll (...elem) {
    let prevScroll = window.pageXOffset
    window.addEventListener('scroll', () => {
      let currentScrollPos = window.pageYOffset
      elem.forEach(item => {
        if (prevScroll > currentScrollPos) {
          item.classList.add('scroll--visible')
        } else {
          item.classList.remove('scroll--visible')
        }
      })
      prevScroll = currentScrollPos
    })
  }
