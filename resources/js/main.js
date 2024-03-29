/*=============== SHOW MENU ===============*/
/*nav - menu | toggle | close*/
const headerMenu = document.getElementById('header-menu'),
   headerToggle = document.getElementById('header-toggle'),
   menuIconClose = document.getElementById('menu-icon-close');

const linkAction = () => {
   headerMenu.classList.remove('header__menu_show');
};

if (headerToggle) {
   headerToggle.addEventListener('click', () => {
      headerMenu.classList.add('header__menu_show');
   })
};

if (menuIconClose) {
   menuIconClose.addEventListener('click', linkAction)
};

/*=============== REMOVE MENU MOBILE ===============*/
const menuLink = document.querySelectorAll('.menu__item');

menuLink.forEach(element => element.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
   const header = document.getElementById('header')
   // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
   this.scrollY >= 50
      ? header.classList.add('scroll-header')
      : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
   const scrollUp = document.getElementById('scroll-up');

   this.scrollY >= 300
      ? scrollUp.classList.add('show-scroll')
      : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
   const scrollY = window.pageYOffset;

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.menu__item a[href*=' + sectionId + ']')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
         sectionsClass.classList.add('active-link')
      } else {
         sectionsClass.classList.remove('active-link')
      }
   })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
   document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
   themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
   // Add or remove the dark / icon theme
   document.body.classList.toggle(darkTheme)
   themeButton.classList.toggle(iconTheme)
   // We save the theme and the current icon that the user chose
   localStorage.setItem('selected-theme', getCurrentTheme())
   localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
   reset: true, // Animations repeat
});

// <!--==================== HOME ====================-->
// <!--==================== NEWSLETTER ====================-->
// <!--==================== FOOTER ====================-->
ScrollReveal().reveal(`.home__img, .newsletter__container , .footer__body, .footer__subtitle`);
ScrollReveal().reveal(`.home__content`, { origin: 'bottom' });

// <!--==================== ABOUT ====================-->
// <!--==================== RECENTLY ====================-->
ScrollReveal().reveal(`.about__img, .recently__img`, { origin: 'left' });
ScrollReveal().reveal(`.about__content, .recently__content`, { origin: 'right' });

// <!--==================== POPULAR ====================-->
ScrollReveal().reveal(`.popular__item`, { interval: 100 });
