const slider = document.getElementById('slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let slides = [];
let currentIndex = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function createSlideElement(src) {
  const slide = document.createElement('div');
  slide.className = 'slide';
  const img = document.createElement('img');
  img.src = src;
  slide.appendChild(img);
  return slide;
}

document.addEventListener('DOMContentLoaded', () => {
  const imageSources = JSON.parse(localStorage.getItem('userImages') || '[]');

  if (imageSources.length === 0) {
    alert('Nenhuma imagem selecionada!');
    window.location.href = 'index.html';
    return;
  }

  imageSources.forEach(src => {
    const slide = createSlideElement(src);
    slider.insertBefore(slide, prevBtn); // antes do botão
    slides.push(slide);
  });

  showSlide(0);
});

prevBtn.addEventListener('click', () => {
  if (slides.length === 0) return;
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  if (slides.length === 0) return;
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});