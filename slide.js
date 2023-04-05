let slideIndex = 0;
const slides = document.querySelectorAll(".banner-slide");
const numSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= numSlides) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = numSlides - 1;
  }
  showSlide(slideIndex);
}

setInterval(nextSlide, 5000);
