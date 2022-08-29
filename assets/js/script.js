var slides = document.querySelectorAll('.slider-list'),
  previous = document.querySelector('.previous'),
  next = document.querySelector('.next'),
  predict = document.querySelector('.slider-predict'),
  currentSlide = 0;

predict.innerHTML = '';
// creates slider dots
dots();
function dots() {
  for (var i = 0; i < slides.length; i++) {
    var li = document.createElement('li'),
      a = document.createElement('a');

    li.className = 'predict-list';
    a.setAttribute('href', '#FIXME');
    a.className = 'slider-dot';
    a.setAttribute('title', 'Slide');
    a.innerText = 'Slide';
    li.appendChild(a);

    predict.appendChild(li);
  }
}

// for next slide
next.addEventListener('click', function (e) {
  e.preventDefault();
  slideShow(currentSlide + 1);
});

// for previous slide
previous.addEventListener('click', function (e) {
  e.preventDefault();
  slideShow(currentSlide - 1);
});

var sliderDot = document.querySelectorAll('.slider-dot'),
  slideInterval = setInterval(autoSlide, 5000);

sliderDot[currentSlide].classList.add('slider-dot-active');

// change slide on slider dot click
sliderDot.forEach(function (slide, slideIndex) {
  slide.addEventListener('click', function (e) {
    e.preventDefault();
    sliderDot.forEach(function (slide) {
      slide.classList.remove('slider-dot-active');
    });

    slideShow(slideIndex);
    slide.classList.add('slider-dot-active');
  });
});

// for change slide on next & previous click
function slideShow(move) {
  clearInterval(slideInterval);
  if (move >= slides.length) {
    move = 0;
  }
  if (move < 0) {
    move = slides.length - 1;
  }

  removeSlide(currentSlide);
  addSlide(move);
  currentSlide = move;
  slideInterval = setInterval(autoSlide, 5000);
}

// for auto slide
function autoSlide() {
  removeSlide(currentSlide);
  if (currentSlide >= slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide += 1;
  }
  addSlide(currentSlide);
}

// to add active class from slide and dot
function addSlide(slideCount) {
  slides[slideCount].classList.add('slider-list-active');
  sliderDot[slideCount].classList.add('slider-dot-active');
}

// to remove active class from slide and dot
function removeSlide(slideCount) {
  slides[slideCount].classList.remove('slider-list-active');
  sliderDot[slideCount].classList.remove('slider-dot-active');
}