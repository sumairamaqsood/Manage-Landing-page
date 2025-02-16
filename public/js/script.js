const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');

  nav.classList.toggle('hidden');
});

let currentSlide = 0;
const slider = document.getElementById('testimonial-slider');
const dots = document.querySelectorAll('.dot');

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('bg-brightRed', index === currentSlide);
    dot.classList.toggle('bg-white', index !== currentSlide);
  });
}

function moveSlide(index) {
  currentSlide = index;
  slider.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

updateDots(); // Set initial active dot
