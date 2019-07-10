// Если при загрузке изображения возникает ошибка, то скрываем изображение и не показываем alt

export class CheckImages {
  constructor () {
    this.imgArr = [...document.querySelectorAll('img')]
  }

  initialize () {
    if (this.imgArr) {
      this.imgArr.forEach(item => {
        let img = document.createElement('img')
        img.src = item.getAttribute('src')

        img.addEventListener('error', () => {
          item.style.display = 'none'
        })
      })
    }
  }
}
