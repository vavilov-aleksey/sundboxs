//ф-я сработает перед закрытием или обновлением всей страницы.
doSomethingBeforeUnload = () => {
    //some func
  };

  // Setup the `beforeunload` event listener
  setupBeforeUnloadListener = () => {
    window.addEventListener("beforeunload", (ev) => {
      ev.preventDefault();
      return this.doSomethingBeforeUnload();
    });
  };

  componentDidMount() {
    // Activate the event listener
    this.setupBeforeUnloadListener();
  }
