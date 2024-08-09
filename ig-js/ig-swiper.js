
const swiper = new Swiper('.slider4-wrapper', {

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.arrow-right-btn',
    prevEl: '.arrow-left-btn',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

});


const swiper2 = new Swiper('.slider4-wrapper2', {

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.arrow-right-btn2',
    prevEl: '.arrow-left-btn2',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

});

document.addEventListener('DOMContentLoaded', function () {

  const arrowLeft = document.getElementById("story-arrow-left-btn");
  const arrowRight = document.getElementById("story-arrow-right-btn");
  const storyOuterBox = document.getElementById("story-outer-box");
  const scrollAmount = 316;

  const updateArrowVisibility = () => {
    // Hide left arrow if at the start
    if (storyOuterBox.scrollLeft === 0) {
      arrowLeft.style.display = "none";
    } else {
      arrowLeft.style.display = "flex";
    }

    // Hide right arrow if at the end
    if (storyOuterBox.scrollLeft + storyOuterBox.clientWidth >= storyOuterBox.scrollWidth) {
      arrowRight.style.display = "none";
    } else {
      arrowRight.style.display = "flex";
    }
  };

  arrowLeft.addEventListener('click', () => {
    storyOuterBox.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  arrowRight.addEventListener('click', () => {
    storyOuterBox.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  // Update arrow visibility on scroll
  storyOuterBox.addEventListener('scroll', updateArrowVisibility);

  // Initial arrow visibility check
  updateArrowVisibility();

  console.log("right:" + (storyOuterBox.scrollLeft + storyOuterBox.clientWidth));
  console.log("left:" + storyOuterBox.scrollLeft);
});
