
const notLikedIcon = document.getElementById("not-liked-icon");
const notLikedIcon2 = document.getElementById("not-liked-icon2");
const notLikedIcon3 = document.getElementById("not-liked-icon3");
const notLikedIcon4 = document.getElementById("not-liked-icon4");

const likedIcon = document.getElementById("liked-icon");
const likedIcon2 = document.getElementById("liked-icon2");
const likedIcon3 = document.getElementById("liked-icon3");
const likedIcon4 = document.getElementById("liked-icon4");

const likeBtn= document.getElementById("like-btn");
const likeBtn2= document.getElementById("like-btn2");
const likeBtn3= document.getElementById("like-btn3");
const likeBtn4= document.getElementById("like-btn4");

const postBox = document.getElementById("post-box");
const igHeart = document.getElementById("ig-heart");

const postBox2 = document.getElementById("post2-box");
const igHeart2 = document.getElementById("ig-heart2");

const postBox3 = document.getElementById("post3-box");
const pauseIcon = document.getElementById("pause-icon");
const volBtn = document.getElementById("vol-btn");
const tagBtn = document.getElementById("tag-btn")
const volOn = document.getElementById("vol-on");
const volMute = document.getElementById("vol-mute");


const postBox4 = document.getElementById("post4-box");
const igHeart4 = document.getElementById("ig-heart4");
const arrowLeft = document.getElementById("arrow-left-btn");
const arrowRight = document.getElementById("arrow-right-btn");

const arrowLeft2 = document.getElementById("arrow-left-btn2");
const arrowRight2 = document.getElementById("arrow-right-btn2");







var vid = document.getElementById("vid");

let isLiked = false;
let isLiked2 = false;
let isLiked3 = false;
let isLiked4 = false;
let active = false;
let timeoutId;
let pageNo = 1;
let pageNo2 = 1;

const igLogoBtn = document.getElementById("ig-logo-btn");
const igWord = document.getElementById("ig-word");
const igWord2 = document.getElementById("ig-word2");



igLogoBtn.onclick = function () {
  document.documentElement.scrollTop = 0;
}

igWord.onclick = function () {
  document.documentElement.scrollTop = 0;
}

igWord2.onclick = function () {
  document.documentElement.scrollTop = 0;
}



likeBtn.onclick = function() {
  isLiked = !isLiked; // Toggle the liked state


  if (isLiked) {
    document.getElementById("post1-like").textContent = `10,001 likes`;
    likedIcon.style.display = "inline";
    notLikedIcon.style.display = "none";

    likeBtn.style.transform = "scale(1.3)";
    setTimeout(function() {
      likeBtn.style.transform = "scale(1) ";
    }, 150);
    
  } else {
    document.getElementById("post1-like").textContent = `10,000 likes`;
    likedIcon.style.display = "none";
    notLikedIcon.style.display = "inline";
  }

  console.log("post1: " + isLiked);

}

postBox.ondblclick = function() {

  igHeart.style.animation = 'none';
  igHeart.offsetHeight; // Trigger reflow
  igHeart.style.animation = '';
  

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randomNumber = getRandomNumber(1, 2);

  if (isLiked == false) {
    isLiked = !isLiked;

    active = true;

    setTimeout(function() {
      active = false;
    }, 1000);

    document.getElementById("post1-like").textContent = `10,001 likes`;
    likedIcon.style.display = "inline";
    notLikedIcon.style.display = "none";
    igHeart.style.display = "inline";

    igHeart.style.transform = "translate(-50%, -50%) scale(1.3)";
    setTimeout(function() {
      igHeart.style.transform = "translate(-50%, -50%) scale(1)";
    }, 150);
    timeoutId = setTimeout(function() {
      igHeart.style.display = "none";
    }, 1000);

    likeBtn.style.transform = "scale(1.3)";
    setTimeout(function() {
      likeBtn.style.transform = "scale(1) ";
    }, 150);
    
    
  } else {
    active = true;

    setTimeout(function() {
      active = false;
    }, 1000);

    clearTimeout(timeoutId);

    igHeart.style.display = "inline";
    igHeart.style.transform = "translate(-50%, -50%) scale(1.3)";
    setTimeout(function() {
      igHeart.style.transform = "translate(-50%, -50%) scale(1)";
    }, 150);

    if (randomNumber === 1) {
        igHeart.style.animation = 'shake 1.2s ease';
    } else {
        igHeart.style.animation = 'shakeLeft 1.2s ease';
    }

    timeoutId = setTimeout(function() {
      if (active == false) {
        igHeart.style.display = "none";
      }
    }, 1001);
  }

  console.log("post1: " + isLiked);
  console.log("active: " + active);

}






likeBtn2.onclick = function() {
  isLiked2 = !isLiked2; // Toggle the liked state
  
  if (isLiked2) {
    document.getElementById("post2-like").textContent = `7,778 likes`;
    likedIcon2.style.display = "inline";
    notLikedIcon2.style.display = "none";

    likeBtn2.style.transform = "scale(1.3)";
    setTimeout(function() {
      likeBtn2.style.transform = "scale(1)";
    }, 150);
  } else {
    document.getElementById("post2-like").textContent = `7,777 likes`;
    likedIcon2.style.display = "none";
    notLikedIcon2.style.display = "inline";
  }

  console.log("post2: " + isLiked2);

}

postBox2.ondblclick = function() {

  igHeart2.style.animation = 'none';
  igHeart2.offsetHeight; // Trigger reflow
  igHeart2.style.animation = '';
  

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randomNumber = getRandomNumber(1, 2);

  if (isLiked2 == false) {
    isLiked2 = !isLiked2;

    active = true;

    setTimeout(function() {
      active = false;
    }, 1000);

    document.getElementById("post2-like").textContent = `7,778 likes`;
    likedIcon2.style.display = "inline";
    notLikedIcon2.style.display = "none";
    igHeart2.style.display = "inline";

    igHeart2.style.transform = "translate(-50%, -50%) scale(1.3)";
    setTimeout(function() {
      igHeart2.style.transform = "translate(-50%, -50%) scale(1)";
    }, 150);
    timeoutId = setTimeout(function() {
      igHeart2.style.display = "none";
    }, 1000);

    likeBtn2.style.transform = "scale(1.3)";
    setTimeout(function() {
      likeBtn2.style.transform = "scale(1) ";
    }, 150);
    
  } else {
    active = true;

    setTimeout(function() {
      active = false;
    }, 1000);

    clearTimeout(timeoutId);

    igHeart2.style.display = "inline";
    igHeart2.style.transform = "translate(-50%, -50%) scale(1.3)";
    setTimeout(function() {
      igHeart2.style.transform = "translate(-50%, -50%) scale(1)";
    }, 150);

    if (randomNumber === 1) {
        igHeart2.style.animation = 'shake 1.2s ease';
    } else {
        igHeart2.style.animation = 'shakeLeft 1.2s ease';
    }

    timeoutId = setTimeout(function() {
      if (active == false) {
        igHeart2.style.display = "none";
      }
    }, 1001);
  }

  console.log("post1: " + isLiked);
  console.log("active: " + active);

}







likeBtn3.onclick = function() {
  isLiked3 = !isLiked3; // Toggle the liked state
  
  if (isLiked3) {
    document.getElementById("post3-like").textContent = `1,235 likes`;
    likedIcon3.style.display = "inline";
    notLikedIcon3.style.display = "none";

    likeBtn3.style.transform = "scale(1.3)";
    setTimeout(function() {
      likeBtn3.style.transform = "scale(1)";
    }, 150);
  } else {
    document.getElementById("post3-like").textContent = `1,234 likes`;
    likedIcon3.style.display = "none";
    notLikedIcon3.style.display = "inline";
  }

  console.log("post3: " + isLiked3);

}


postBox3.onclick = function () {
  if (vid.paused) {
    vid.play(); 
    pauseIcon.style.display = "none";
  } else {
    vid.pause(); 
    pauseIcon.style.display = "inline";
  }
}

let vol = false;

volBtn.onclick = function () {

  event.stopPropagation();

  if (vol) {
    vol = false;
    volOn.style.display = "none";
    volMute.style.display = "flex";
    vid.muted = true;
  }
  else {
    vol = true;
    volOn.style.display = "flex";
    volMute.style.display = "none";
    vid.muted = false;
  }
}



tagBtn.onclick = function () {
  event.stopPropagation();
}






likeBtn4.onclick = function() {
  isLiked4 = !isLiked4; // Toggle the liked state


  if (isLiked4) {
    document.getElementById("post4-like").textContent = `17,406 likes`;
    likedIcon4.style.display = "inline";
    notLikedIcon4.style.display = "none";

    likeBtn4.style.transform = "scale(1.3)";
    setTimeout(function() {
      likeBtn4.style.transform = "scale(1) ";
    }, 150);
    
  } else {
    document.getElementById("post4-like").textContent = `17,405 likes`;
    likedIcon4.style.display = "none";
    notLikedIcon4.style.display = "inline";
  }

  console.log("post4: " + isLiked4);

}

postBox4.ondblclick = function() {

  igHeart4.style.animation = 'none';
  igHeart4.offsetHeight; // Trigger reflow
  igHeart4.style.animation = '';
  

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randomNumber = getRandomNumber(1, 2);

  if (isLiked4 == false) {
    isLiked4 = !isLiked4;

    active = true;

    setTimeout(function() {
      active = false;
    }, 1000);

    document.getElementById("post4-like").textContent = `17,406 likes`;
    likedIcon4.style.display = "inline";
    notLikedIcon4.style.display = "none";
    igHeart4.style.display = "inline";

    igHeart4.style.transform = "translate(-50%, -50%) scale(1.3)";
    setTimeout(function() {
      igHeart4.style.transform = "translate(-50%, -50%) scale(1)";
    }, 150);
    timeoutId = setTimeout(function() {
      igHeart4.style.display = "none";
    }, 1000);

    likeBtn4.style.transform = "scale(1.3)";
    setTimeout(function() {
      likeBtn4.style.transform = "scale(1) ";
    }, 150);
    
    
  } else {
    active = true;

    setTimeout(function() {
      active = false;
    }, 1000);

    clearTimeout(timeoutId);

    igHeart4.style.display = "inline";
    igHeart4.style.transform = "translate(-50%, -50%) scale(1.3)";
    setTimeout(function() {
      igHeart4.style.transform = "translate(-50%, -50%) scale(1)";
    }, 150);

    if (randomNumber === 1) {
        igHeart4.style.animation = 'shake 1.2s ease';
    } else {
        igHeart4.style.animation = 'shakeLeft 1.2s ease';
    }

    timeoutId = setTimeout(function() {
      if (active == false) {
        igHeart4.style.display = "none";
      }
    }, 1001);
  }

  console.log("post4: " + isLiked);
  console.log("active: " + active);

}

arrowRight.onclick = function () {
  if (pageNo < 3) {
    pageNo++;
    document.getElementById("page-no").textContent = pageNo + `/3`;

  }
}

arrowLeft.onclick = function () {
  if (pageNo > 1) {
    pageNo--;
    document.getElementById("page-no").textContent = pageNo + `/3`;

  }
}

arrowRight2.onclick = function () {
  if (pageNo2 < 3) {
    pageNo2++;
    document.getElementById("page-no2").textContent = pageNo2 + `/3`;

  }
}

arrowLeft2.onclick = function () {
  if (pageNo2 > 1) {
    pageNo2--;
    document.getElementById("page-no2").textContent = pageNo2 + `/3`;

  }
}

