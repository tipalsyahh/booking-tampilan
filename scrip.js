const slides = document.querySelectorAll('.slide');
const wrapper = document.querySelector('.slider__wrapper');
const prevBtn = document.querySelector('.btn--previous');
const nextBtn = document.querySelector('.btn--next');

let current = 0;

function updateSlider() {
  const slideWidth = slides[0].offsetWidth + parseInt(getComputedStyle(slides[0]).marginLeft) + parseInt(getComputedStyle(slides[0]).marginRight);
  
  // Geser wrapper sehingga slide tengah berada di center
  const wrapperWidth = wrapper.offsetWidth;
  const offset = (slideWidth * current) - (wrapperWidth/2 - slideWidth/2);
  wrapper.style.transform = `translateX(-${offset}px)`;
  
  // Update class slide
  slides.forEach((slide, index) => {
    slide.classList.remove('slide--current', 'slide--next', 'slide--previous');
    if(index === current) slide.classList.add('slide--current');
    else if(index < current) slide.classList.add('slide--previous');
    else slide.classList.add('slide--next');
  });
}

// Tombol next/prev
prevBtn.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  updateSlider();
});

updateSlider(); // inisialisasi
