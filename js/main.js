// this is Javascript module syntax
// IIFE (this is the technical name)
(() => {
  console.log('JS is linked');

  let theIcon = document.querySelector('.i')
      theIcons = document.querySelectorAll('.i');

  function logMyId() {
    console.log('clicked the icon!');
    console.log(this.id);
  }

  theIcons.forEach(icon => icon.addEventListener('click', logClick));

})();
