const chk = document.getElementById('chk')
const proj = document.getAnimations('more')

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

  proj.addEventListener("click", () => {
    elementPlatforms.classList.toggle("active");
});
}
