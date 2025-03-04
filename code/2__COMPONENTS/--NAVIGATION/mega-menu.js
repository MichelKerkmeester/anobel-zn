// Navigation
// Mobile — Mega Menu

// Select all elements
const megaMenu = document.querySelector('.nav--mega-menu');
const menuButton = document.querySelector('.btn--hamburger');

// Load Lottie animation
const lottieAnimation = lottie.loadAnimation({
  container: document.querySelector('.lottie--hamburger'), // the dom element
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://cdn.prod.website-files.com/6723d26a4aa4a278cad8f59c/6777ecd6636dc4314d954783_Icon%20-%20Hamburger%20Menu.json',
});

// Function to open the menu
function openMenu() {
  megaMenu.style.display = 'flex'; // Set display to flex before animation
  gsap.to(megaMenu, {
    duration: 0.8,
    height: '100svh',
    width: '100%',
    ease: 'power2.out',
    delay: 0.2,
    onComplete: () => {
      megaMenu.style.borderRadius = '0rem';
    },
  });
  lottieAnimation.playSegments([0, 70], true);
}

// Function to close the menu
function closeMenu() {
  megaMenu.style.borderRadius = '1rem';
  gsap.to(megaMenu, {
    duration: 0.4,
    height: '0svh',
    width: '100%',
    ease: 'power2.in',
    onComplete: () => {
      megaMenu.style.display = 'none';
    },
  });

  // Remove any existing complete listeners first
  lottieAnimation.removeEventListener('complete');

  // Play the close animation
  lottieAnimation.playSegments([70, 140], true);

  // Add the complete listener
  lottieAnimation.addEventListener('complete', () => {
    lottieAnimation.goToAndStop(0, true);
    // Remove the listener after it executes to prevent memory leaks
    lottieAnimation.removeEventListener('complete');
  });
}

// Toggle menu on button click
let isOpen = false;
menuButton.addEventListener('click', () => {
  if (!isOpen) {
    openMenu();
  } else {
    closeMenu();
  }
  isOpen = !isOpen;
});
