const dataForComment = [
  {icon: "pic/icon_pic_cat.webp", 
  userName: "channelchk",
  postTime: "0s"},

  {icon: "pic/icon_pic_cat.webp", 
  userName: "channelchk",
  postTime: "0s"},

  {icon: "pic/icon_pic_cat.webp", 
  userName: "channelchk",
  postTime: "0s"},

  {icon: "pic/icon_pic_cat.webp", 
  userName: "channelchk",
  postTime: "0s"}

]



  for (let i = 0; i < 4; i++) {
    const form = document.getElementsByClassName('clicked-post-comment-box')[i];
    const inputField = document.getElementsByClassName("clicked-add-comment")[i];
    const submitBtn = document.getElementsByClassName("submit-btn")[i];


    submitBtn.disabled = true;

    submitBtn.style.color = "#C5E8FF";
    submitBtn.style.cursor = "default";

    inputField.addEventListener('input', function() {
      // Enable or disable the button based on input value
      submitBtn.disabled = inputField.value.trim() === '';
      if(submitBtn.disabled) {
        submitBtn.style.color = "#C5E8FF";
        submitBtn.style.cursor = "default";
      } else {
        submitBtn.style.color = "#0095F6";
        submitBtn.style.cursor = "pointer"
      }

    });

    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting

      var comment = form.querySelector(".clicked-add-comment").value; // Get the input value from the form
      console.log("comment =", comment);


      const commentTextBox = `
      <div class = "user-comment">
        <div class = "user-comment-inner">
          <img class="clicked-icon-pic" src="pic/icon_pic_cat.webp">
          <div class="clicked-content-box">
            <p class="clicked-content"><strong>5gjm9_car </strong>${comment}</p>
            <div class="clicked-time-info">
              <p class="clicked-post-time">0s</p>
              <p class="translate">See translate</p>
            </div>
          </div>
        </div>
      </div>`


      const commentList = document.getElementsByClassName('post-clicked-info-box-context')[i];

      commentList.insertAdjacentHTML('beforeend', commentTextBox);

      commentList.scrollTop = commentList.scrollHeight;


      form.querySelector(".clicked-add-comment").value = '';
      submitBtn.disabled = true;

      if(submitBtn.disabled) {
        submitBtn.style.color = "#C5E8FF";
        submitBtn.style.cursor = "default";
      } else {
        submitBtn.style.color = "#0095F6";
        submitBtn.style.cursor = "pointer"
      }


    }); 

  }
