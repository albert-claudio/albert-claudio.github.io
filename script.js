const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

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

function isAfterSunset() {
  const now = new Date();
  const sunsetTime = new Date();
  sunsetTime.setHours(17); // Horas
  sunsetTime.setMinutes(50); // Minutos

  return now >= sunsetTime;
}

function setTheme() {
  const body = document.body;
  const isDarkTheme = isAfterSunset();

  if (isDarkTheme) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}

// Verifica o tema ao carregar a página
setTheme();

// Verifica o tema a cada minuto (você pode ajustar o intervalo)
setInterval(setTheme, 60000); // Verifica a cada minuto

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