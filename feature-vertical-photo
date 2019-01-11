//Замена стиля бакгрунда для фоток, чтоб вертикальная фотка не обрезалась
    //Пример http://prntscr.com/m5paig
    //Получаем блоки с фото
    const feature = [...document.querySelectorAll('.feature__image')];

    // Перебор всех блоков
    feature.forEach(cell => {
      //Получаем только путь к фото
      const imageSrc = (cell.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2'));

      const image = new Image();
      image.src = imageSrc;

      //Получаем высоту и ширину
      let width = image.width, height = image.height;

      //Меняем стиль
      if (width < height) cell.style.backgroundSize = 'contain';
    })
