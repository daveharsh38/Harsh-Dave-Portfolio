// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  this.reset();
});

// Scroll animations
const experienceItems = document.querySelectorAll('.experience-item');
const educationItems = document.querySelectorAll('.education-item');
const projects = document.querySelectorAll('.project');
const certificationItems = document.querySelectorAll('.certification-item');
const awardItems = document.querySelectorAll('.award-item');

const checkVisibility = () => {
  experienceItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < window.innerHeight - 100) {
      item.classList.add('visible');
    }
  });

  educationItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < window.innerHeight - 100) {
      item.classList.add('visible');
    }
  });

  projects.forEach(project => {
    const projectTop = project.getBoundingClientRect().top;
    if (projectTop < window.innerHeight - 100) {
      project.classList.add('visible');
    }
  });

  certificationItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < window.innerHeight - 100) {
      item.classList.add('visible');
    }
  });

  awardItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < window.innerHeight - 100) {
      item.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);