function smoothScroll(target) {
    var element = document.querySelector(target);
    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  }