const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const navLinks = document.querySelectorAll('.nav-link'); 

function closeMenu() {
  nav.classList.remove('open');
  navBtnImg.src = "./img/nav-open.svg";
}
navBtn.onclick = () => {
  const isOpen = nav.classList.toggle('open');
  navBtnImg.src = isOpen ? "./img/nav-close.svg" : "./img/nav-open.svg";
}
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});
document.addEventListener('click', (event) => {
  const target = event.target;
  if (!nav.contains(target) && !navBtn.contains(target)) {
    closeMenu();
  }
});

AOS.init({
    once: true
});
