const hamburger = document.querySelector('.Hamburger');
const navmenu = document.querySelector('.Menu-items');
// eslint-disable-next-line no-unused-vars
document.getElementById('welcome').style.opacity = 1;
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navmenu.classList.toggle('active');
  if (document.getElementById('welcome').style.opacity > 0) {
    document.getElementById('welcome').style.opacity = 0;
    //     document.getElementById('names').style.zIndex = '1';
    document.body.style.overflow = 'hidden';
    //     document.getElementById('navB').style.opacity = '1';
  } else if (document.getElementById('welcome').style.opacity <= 0) {
    document.getElementById('welcome').style.opacity = 1;
    //     document.getElementById('names').style.zIndex = '-1';
    document.body.style.overflow = 'auto';
    //     document.getElementById('navB').style.opacity = '0';
  }
});
// Hide navMenu
document.querySelectorAll('.nav--link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navmenu.classList.remove('active');
  document.body.style.overflow = 'auto';
  document.getElementById('welcome').style.opacity = 1;
<<<<<<< HEAD
  
=======
>>>>>>> a2c71857c502da8b7b16b98d15666c9eea75ea1c
}));
