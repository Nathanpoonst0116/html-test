

const dataForPost = [
  { post: `<img class = "clicked-pic" src="pic/post1.jpeg">`,
  icon: "pic/icon1.jpg", userName: "channelchk",
  postContent: `<strong>channelchk</strong>【DSE放榜 倘遇黑雨】
  <br>
  若6am前掛 除黑後3hrs
  <br>
  成績單SMS全港考生
  <br>
  若1pm後除黑 順延1天
  <br><br>
  天文台料7.17間中驟雨狂風雷暴
  <br>
  上午雨勢有時較大
  <br>
  祝各位考生放榜順利🖖
  <br><br>
  天氣師李鈺廷 @weather.hk 提提你
  <br><br>
  👇瞓唔着的話
  <br>
  大家留個言抒發吓🙂‍↕️`,
  postLikeText: "4,002 likes",
  postTime: "3d",
  postTimeLong: "3 days ago",
  translate: "See translate"
  },

  { post: `<img class = "clicked-pic" src="pic/post2.jpg">`, 
  icon: "pic/post-user-icon.jpg", userName: "okfine_ggyy",
  postContent: `<strong>okfine_ggyy</strong> 買飲料只是儀式感`,
  postLikeText: "7777 likes",
  postTime: "36m",
  postTimeLong: "36 minutes ago",
  translate: "See translate"
  },


  { post: `<video id="vid" class= "clicked-pic" autoplay muted loop>
  <source src ="pic/chii-vid.mp4" type="video/mp4">
  </video>`, 
  icon: "pic/icon-user3.jpg", userName: "wofulcibei",
  postContent: `<strong>wofulcibei</strong> 可愛すぎて飲めない3Dラテアート
  <br><br>
  ◎ 3Dラテアート ¥1,000
  <br><br>
  【店舗名】Qoomo(くーも)糸島[3Dラテアートカフェ]<br>
  【住所】福岡県糸島市志摩桜井５８０４−７<br>
  【アクセス】赤隈駅バス停から徒歩1分<br>
  【営業時間】11:00-17:00<br>
  【定休日】火曜、水曜<br>
  【予算】￥1,000~ ￥2,000<br><br>
  
  糸島に最近オープンした<br>
  3Dラテアート専門店<br><br>
  
  自分の好きなキャラクターを<br>
  リクエストしたらその場で<br>
  ラテアートをつくってくれます！<br><br>
  
  糸島に遊びに行く時は<br>
  是非行ってみてね〜<br><br>
  
  <span class="hash-tag">#福岡グルメ<br>
  #japanesefood </span>`,
  postLikeText: "1,234 likes",
  postTime: "9m",
  postTimeLong: "9 minutes ago",
  translate: "See translate"
  },



  
  { post: 
  ` <div class = "swiper slider4-wrapper slider4-wrapper2">
      <div class = "swiper-wrapper slider4">
          <div class ="swiper-slide">
              <img id="post4-pic" class="swiper-slide clicked-pic" src="pic/post4-pic.jpg">
          </div>
          <div class ="swiper-slide">
              <img id="post4-pic2" class="swiper-slide clicked-pic" src="pic/post4-pic2.jpg">
          </div>
          <div class ="swiper-slide">
              <img id="post4-pic3" class="swiper-slide clicked-pic" src="pic/post4-pic3.jpg">
          </div>
      </div>

      <div class ="arrow-box2">
          <button id="arrow-left-btn2" class ="arrow-left-btn2 arrow-btn2">
              <img id="arrow-left" class="arrow" src="pic/arrow-left.png">
          </button>
          <button id="arrow-right-btn2" class ="arrow-right-btn2 arrow-btn2">
              <img id="arrow-right" class="arrow" src="pic/arrow-right.png">
          </button>
      </div>

      <div class = "page-no-box2">
          <p id="page-no2">1/3</p>
      </div>

      <button id="tag-btn" class= "tag-btn">
          <i class="bi bi-person-fill"></i>
      </button>

      <div class="swiper-pagination">
          
      </div>
    </div>`, 





  icon: "pic/post-icon4.jpg", userName: "1corgi_dogs",
  postContent: `<strong>1corgi_dog</strong> 
  <span class="hash-tag"> #コーギー #犬 #絵 #アート #イラスト 
  #アニメ #アニメーション #corgi #corgidog #dog 
  #illustration #art #anime #animation #animals 
  #科基 #柯基犬 #코기 #子供 #こども #肩たたき 
  #パパ #お父さん #家族 #children #puppy #family #massage
  </span>`,
  postLikeText: "17,405 likes",
  postTime: "3d",
  postTimeLong: "3 days ago",
  translate: "See translate"
  }
];


dataForPost.forEach(item => {
  const htmlContent = `
      <div class = "post-clicked-box-outer">

        <button id = "cancel-btn" class = "cancel-btn">
          <i class="bi bi-x"></i>
        </button>

        <div class = "post-clicked-box-main">
          <div class = "clicked-pic-box">
            ${item.post}
          </div>
          <div class = "post-clicked-info-box">

            <div class = "post-clicked-info-box-header">
              <img class="clicked-icon-pic clicked-icon-pic-main" src="${item.icon}">
              <p class= "channel-name clicked-channel-name">${item.userName}</p>

            </div>

            <div id = "post-clicked-info-box-context" class = "post-clicked-info-box-context">
              <div class = "user-comment">
                <div class = "user-comment-inner">
                  <img class="clicked-icon-pic" src="${item.icon}">
                  <div class="clicked-content-box">
                    <p class="clicked-content">${item.postContent}</p>
                    <div class="clicked-time-info">
                      <p class="clicked-post-time">${item.postTime}</p>
                      <p class="translate">${item.translate}</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            <div class = "post-clicked-info-box-reaction">

              <div class = "clicked-reaction-box">
                <div class="clicked-reaction">
                    <button id = "like-btn4" class="btn"><i id="liked-icon4" class="bi bi-heart-fill"></i><i id="not-liked-icon4" class="bi bi-heart"></i></button>
                    <button class="btn3"><i class="bi bi-chat"></i></button>
                    <button class="btn3"><i class="bi bi-send"></i></button>
                </div>
                <div class="bookmark">
                    <button class="btn2"><i class="bi bi-bookmark"></i></button>
                </div>
              </div>

              <div class = "clicked-post-like-text-box">
                <p class = "clicked-post-like-text">${item.postLikeText}</p>
                <p class = "clicked-post-time-text">${item.postTimeLong}</p>
              </div>

            </div>

            <div class="clicked-post-comment-box-outer">
              <form class="clicked-post-comment-box">
                <i class="bi bi-emoji-smile"></i>
                <input class="Add-comment clicked-add-comment" type="text" placeholder="Add a comment..." required>
                <input class="submit-btn" type="submit" value="Post">
              </form>
            </div>

          </div>
          
        </div>
      </div>
  `;


  document.getElementById('outer-flex-box').insertAdjacentHTML('beforeend', htmlContent);
 
  
});







for (let i = 0; i < 4; i++) {
  const cancelBtn = document.getElementsByClassName("cancel-btn")[i];
  const commentBtn = document.getElementsByClassName("bi bi-chat")[i];
  const postDetailBox = document.getElementsByClassName("post-clicked-box-outer")[i];
  const commentText = document.getElementsByClassName("comment")[i];

  
  commentBtn.onclick = function () {
    postDetailBox.style.display = "flex";
    document.body.classList.add('no-scroll');
  }

  commentText.onclick = function () {
    postDetailBox.style.display = "flex";
    document.body.classList.add('no-scroll');

  }

  cancelBtn.onclick = function () {
    postDetailBox.style.display = "none";
    document.body.classList.remove('no-scroll');

  }
  
}


