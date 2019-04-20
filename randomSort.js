const shuffle = (array) => {
    let cacheLength = array.length;

    for (let i = cacheLength - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return; array;
  };
