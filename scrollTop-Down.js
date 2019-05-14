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
 
