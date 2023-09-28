const nav = document.getElementById("topNav");
window.onscroll = function () {
  if (window.pageYOffset > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

const dropdown = document.querySelector('.nav');
const navButton = document.querySelector('button[aria-expanded]');

function toggleNav ( event ) {
  const button = event.currentTarget;
  const expanded = button.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';

  if (expanded === 'false') {
    dropdown.classList.remove("animate-open");

    setTimeout(() => {
      dropdown.classList.add("animate-close");
    }, 90);

    setTimeout(() => {
      navButton.setAttribute('aria-expanded', expanded); 
      dropdown.classList.remove("animate-close");
    }, 340);
  } else if (expanded === 'true') {
    dropdown.classList.add("animate-open");
    navButton.setAttribute('aria-expanded', expanded);
  }
}

navButton.addEventListener('click', toggleNav);

window.addEventListener('resize', () => {
  screenWidth = window.innerWidth;

  // Check if screenWidth is greater than 1023
  if (screenWidth > 1023 && dropdown.classList.contains("animate-open")) {
      dropdown.classList.remove("animate-open");
      setTimeout(() => {
          dropdown.classList.add("animate-close");
      }, 90);
      setTimeout(() => {
          navButton.setAttribute('aria-expanded', 'false');
          dropdown.classList.remove("animate-close");
      }, 130);
  }
});


nav.addEventListener('click', (event) => {event.stopPropagation()})