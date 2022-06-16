// Navbar animée
const btnNav = document.querySelector('.responsive-nav-btn');
const listeNav = document.querySelector('nav ul');
const imgBtn = document.querySelector('.responsive-nav-btn img');

btnNav.addEventListener('click', () => {

  listeNav.classList.toggle('active-nav');

  if(imgBtn.src.includes('menu')){
    imgBtn.src = './ressources/croix.svg';
    imgBtn.style.width = "30px";
    imgBtn.style.height = "30px";
  }
  else{
    imgBtn.src = './ressources/menu.svg';
    imgBtn.style.width = "40px";
    imgBtn.style.height = "40px";
  }

});
