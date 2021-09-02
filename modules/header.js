export function headerAnim() {

    var prevScrollpos = window.pageYOffset;
    const headerPos = document.querySelector('.js-header');
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        headerPos.classList.remove('ativo');
      } else {
        headerPos.classList.add('ativo');
      }
      prevScrollpos = currentScrollPos;
    }
    
}
    