const toggleMenuElement = document.getElementById('iBuerger');
const mainMenuElement = document.getElementById('cMenu');

toggleMenuElement.addEventListener('click', ()=>{

  mainMenuElement.classList.toggle('show');
  
}); 