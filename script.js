const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');
const chk = document.getElementById('chk')

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider();
  if (currentSlide === slider.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  showSlider();
  updateLink();
}

function prevSlider() {
  hideSlider();
  if (currentSlide === 0) {
    currentSlide = slider.length - 1;
  } else {
    currentSlide--;
  }
  showSlider();
  updateLink();
}

function updateLink() {
  const currentImage = slider[currentSlide];
  const link = currentImage.getAttribute('data-link');
  const websiteLink = document.getElementById('website-link');
  websiteLink.href = link;
}

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

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)