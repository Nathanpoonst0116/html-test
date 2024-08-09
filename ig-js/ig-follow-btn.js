const followingBtn = document.getElementById("main-inner-follow-btn-following");
const followBtn = document.getElementById("main-inner-follow-btn");

let follow = new Array(4).fill(false);



for (let j = 0; j <= 3; j++) {
  let followingBtn_Main = document.getElementsByClassName("main-inner-follow-btn-following")[j];
  let followBtn_Main = document.getElementsByClassName("main-inner-follow-btn")[j];

  followBtn_Main.onclick = function() {
    if(follow[j] == false) {
      followBtn_Main.style.display = "none";
      followingBtn_Main.style.display = "flex";
      follow[j] = true;
    }
    console.log("follow" + j + ":", follow[j]);
  }
  
  followingBtn_Main.onclick = function() {
    if(follow[j] == true) {
      followBtn_Main.style.display = "flex";
      followingBtn_Main.style.display = "none";
      follow[j] = false;
    }
    console.log("follow" + j + ":", follow[j]);
  }
}


const followingBtnRight = document.getElementById("right-inner-following-btn");
const followBtnRight = document.getElementById("right-inner-follow-btn");

let followRight = new Array(10).fill(false);

for (let i = 0; i <= 9; i++) {
  let followingBtn_Right = document.getElementsByClassName("right-inner-following-btn")[i];
  let followBtn_Right = document.getElementsByClassName("right-inner-follow-btn")[i];


  followingBtn_Right.onclick = function() {
    if(followRight[i] == true) {
      followBtn_Right.style.display = "flex";
      followingBtn_Right.style.display = "none";
      followRight[i] = false;

      if(i%2 == 0) {
        document.getElementsByClassName("right-inner-follow-btn")[i+1].style.display = "flex";
        document.getElementsByClassName("right-inner-following-btn")[i+1].style.display = "none";
        followRight[i+1] = false;
      }
      else {
        document.getElementsByClassName("right-inner-follow-btn")[i-1].style.display = "flex";
        document.getElementsByClassName("right-inner-following-btn")[i-1].style.display = "none";
        followRight[i-1] = false;
      }
    }

    

    console.log("followRight" + i + ": ", followRight[i]);
  }

  followBtn_Right.onclick = function() {
    if(followRight[i] == false) {
      followBtn_Right.style.display = "none";
      followingBtn_Right.style.display = "flex";
      followRight[i] = true;

      if(i%2 == 0) {
        document.getElementsByClassName("right-inner-follow-btn")[i+1].style.display = "none";
        document.getElementsByClassName("right-inner-following-btn")[i+1].style.display = "flex";
        followRight[i+1] = true;
      }
      else {
        document.getElementsByClassName("right-inner-follow-btn")[i-1].style.display = "none";
        document.getElementsByClassName("right-inner-following-btn")[i-1].style.display = "flex";
        followRight[i-1] = true;
      }
    }

    console.log("followRight"  + i + ": ", followRight[i]);
  }
}

