let anchorlinks = document.querySelectorAll('a[href^="#"]');
    
    for (let item of anchorlinks) {
        item.addEventListener('click', (e)=> {
            let hashval = item.getAttribute('href');
            let target = document.querySelector(hashval);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            history.pushState(null, null, hashval);
            e.preventDefault();
        })
    }

//Для ИЕ и Сафари ,подлючить полифилл - https://github.com/iamdustan/smoothscroll
import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill()

this.linkNavigation = [...document.querySelectorAll('.product-instruction__navigation')]

if (this.linkNavigation) {
   this.linkNavigation.forEach(link => {
      link.addEventListener('click', (e) => {
        let target = document.querySelector(e.target.getAttribute('href'))
        let targetRect = target.getBoundingClientRect()
        let targetTop = targetRect.top + window.pageYOffset
        window.scroll({ top: targetTop, left: 0, behavior: 'smooth' })
      })
    })
  }
