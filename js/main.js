// this is Javascript module syntax
// IIFE (this is the technical name)
(() => {
  console.log('JS is linked');

  let theIcon = document.querySelector('.i img')
      theIcons = document.querySelectorAll('.i img');

  function logMyId() {
    console.log("You clicked the icon:", this.id);
  }

  theIcons.forEach(icon => icon.addEventListener('click', logMyId));

})();
