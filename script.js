const chk = document.getElementById('chk')

let currentSlide = 0;


chk.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode')
});


function scrollToSection() {
  const section = document.getElementById('scrollSection');
  const sectionHeight = section.offsetHeight;

  window.scrollTo({
    top: sectionHeight,
    behavior: 'smooth'
  });
}

