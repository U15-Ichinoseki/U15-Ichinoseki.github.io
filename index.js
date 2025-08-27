document.addEventListener('DOMContentLoaded', () => {
  const titleCount = document.getElementById('title-count');
  const titleContainer = document.getElementById('title-container');

  if (titleContainer) {
    titleContainer.style.maxHeight = 'none';
    const endHeight = titleContainer.scrollHeight;
    titleContainer.style.maxHeight = '0px';

    if (titleContainer.style.maxHeight && titleContainer.style.maxHeight !== '0px') {
        titleContainer.style.maxHeight = '0px';
      } 
      else {
      titleCount.addEventListener('animationend', () => {
        titleContainer.style.maxHeight = endHeight + 'px';
      });
    }
  }

  const title = document.getElementById('title');
  if (title) {
    const children = title.querySelectorAll('div');
    children.forEach(child => {
      const span = child.querySelector('span');
      span.addEventListener('animationend', (event) => {
        if (event.animationName === 'fade-in-up') {
          child.classList.remove('overflow-hidden');
        }
      });
    });
  }
});

// ヘッダーのトグル
const toggleBtn = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownIcon = document.getElementById('dropdown-icon');
const dropdownLinks = document.querySelectorAll('.dropdown-link');
let isOpen = false;

toggleBtn.addEventListener('click', () => {
  if (!isOpen) {
    dropdownMenu.classList.remove('hidden');
    dropdownIcon.classList.add('rotate-180');
    isOpen = true;
  } else {
    dropdownMenu.classList.add('hidden');
    dropdownIcon.classList.remove('rotate-180');
    isOpen = false;
  }
});

document.addEventListener('click', (e) => {
  if (!toggleBtn.contains(e.target) && !dropdownMenu.contains(e.target) && isOpen) {
    dropdownMenu.classList.add('hidden');
    dropdownIcon.classList.remove('rotate-180');
    isOpen = false;
  }
});

dropdownLinks.forEach(link => {
  link.addEventListener('click', () => {
    dropdownMenu.classList.add('hidden');
    dropdownIcon.classList.remove('rotate-180');
    isOpen = false;
  });
});

// menu for mobile
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active', isOpen);

  document.documentElement.classList.toggle('overflow-hidden', isOpen);
  document.body.classList.toggle('overflow-hidden', isOpen);
  
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// スクロール固定解除
window.addEventListener('resize', () => {
  if (window.innerWidth >= 640) {
    document.documentElement.classList.remove('overflow-hidden');
    document.body.classList.remove('overflow-hidden');
  } else if (window.innerWidth < 640 && mobileMenu.classList.contains('active')) {
    document.documentElement.classList.add('overflow-hidden');
    document.body.classList.add('overflow-hidden');
  }
});

function closeMobileMenu() {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('active');
  document.documentElement.classList.remove('overflow-hidden');
  document.body.classList.remove('overflow-hidden');
  hamburger.setAttribute('aria-expanded', 'false');
}

const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

const logo = document.getElementById('logo');
logo.addEventListener('click', closeMobileMenu);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (mobileMenu.classList.contains('active')) {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.documentElement.classList.remove('overflow-hidden');
      document.body.classList.remove('overflow-hidden');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  }
});

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  const heroHeight = this.window.innerHeight;
  const navHeight = 60;

  if (this.window.scrollY > navHeight) {
    nav.classList.add('backdrop-blur-sm', 'border-b-2', 'border-blue-300', 'shadow-md');
    if (this.window.scrollY > heroHeight / 2) {
      dropdownMenu.classList.add('border-blue-400');
      dropdownMenu.classList.remove('border-white');
    }
  } else {
    nav.classList.remove('backdrop-blur-sm', 'border-b-2', 'border-blue-300', 'shadow-md');
    dropdownMenu.classList.add('border-white');
    dropdownMenu.classList.remove('border-blue-400');
  }
});
