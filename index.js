const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll("#nav-links a");


menuIcon.onclick = () => {
  navLinks.classList.toggle('active')
}

navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


const words = ["Frontend Developer", "Web Developer", "Web Application", "Artist"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenWords = 2000; // 2 seconds before switching to next

const typewriterElement = document.getElementById("typewriter-text");

function typeEffect() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typewriterElement.textContent = currentWord.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  } else {
    typewriterElement.textContent = currentWord.substring(0, charIndex++);
    if (charIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenWords);
      return;
    }
  }

  setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

// Start the typing effect
typeEffect();



  const toggleBtn = document.getElementById('darkModeToggle');
  const body = document.getElementById('body');

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Toggle the icon between moon and sun
    if (toggleBtn.classList.contains('fa-moon')) {
      toggleBtn.classList.remove('fa-moon');
      toggleBtn.classList.add('fa-sun');
    } else {
      toggleBtn.classList.remove('fa-sun');
      toggleBtn.classList.add('fa-moon');
    }
  });


