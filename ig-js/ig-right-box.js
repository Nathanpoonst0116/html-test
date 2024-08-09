/*
const infoBox = document.getElementsByClassName("info-box");
const userName = document.getElementsByClassName("user-name-right-inner");


Array.from(userName).forEach((userName, index) => {
  const infoBoxes = infoBox[index]; // Match user names to their info boxes

  userName.addEventListener('mouseenter', () => {
      infoBoxes.style.visibility = 'visible';
      infoBoxes.style.opacity = '1';
  });

  userName.addEventListener('mouseleave', () => {
      setTimeout(() => {
          infoBoxes.style.visibility = 'hidden';
          infoBoxes.style.opacity = '0';
      }, 300); 
  });
});

*/

for (let i = 0; i <= 3; i++) {
  const channelName = document.getElementsByClassName("channel-name")[i];
  const infoBox = document.getElementsByClassName("info-box")[i];
  const iconPic = document.getElementsByClassName("icon-pic")[i];

  let showTimeout, hideTimeout;

  const showInfoBox = (top, left) => {
    clearTimeout(hideTimeout);
    infoBox.style.position = "absolute"; // Ensure this is outside the timeout
    infoBox.style.zIndex = "9999"; // Ensure this is outside the timeout
    hideTimeout = setTimeout(() => {
      infoBox.style.visibility = 'hidden';
      infoBox.style.opacity = "0";
      setTimeout(() => {
        infoBox.style.transition = "opacity 0.3s";
        infoBox.style.visibility = 'visible';
        infoBox.style.opacity = "1";
        infoBox.style.top = top;
        infoBox.style.left = left;
      }, 300);
    }, 0);
  };

  const hideInfoBox = () => {
    clearTimeout(showTimeout);
    hideTimeout = setTimeout(() => {
      infoBox.style.transition = "opacity 0.3s";
      infoBox.style.opacity = "0";
      setTimeout(() => {
        infoBox.style.visibility = 'hidden';
      }, 250); // Match with the opacity transition duration
    }, 100); // Small delay to prevent twinkling
  };

  const handleMouseEnter = (top, left) => {
    clearTimeout(hideTimeout);
    showTimeout = setTimeout(() => showInfoBox(top, left), 300); // Delay to show the info box
  };

  const handleMouseLeave = () => {
    clearTimeout(showTimeout);
    hideTimeout = setTimeout(() => {
      infoBox.style.transition = "opacity 0.3s";
      infoBox.style.opacity = "0";
      setTimeout(() => {
        infoBox.style.visibility = 'hidden';
      }, 250); // Match with the opacity transition duration
    }, 100); // Small delay to prevent twinkling
  };

  // Event listeners for channel name and icon pic with the same handlers
  channelName.addEventListener('mouseenter', () => handleMouseEnter("75%", "120%"));
  iconPic.addEventListener('mouseenter', () => handleMouseEnter("100%", "0"));

  channelName.addEventListener('mouseleave', handleMouseLeave);
  iconPic.addEventListener('mouseleave', handleMouseLeave);

  // Keep the info box visible when hovering over it
  infoBox.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
  });
  infoBox.addEventListener('mouseleave', handleMouseLeave);
}



for (let j = 0; j <= 3; j++) {
  const channelName = document.getElementsByClassName("clicked-channel-name")[j];
  const infoBox2 = document.getElementsByClassName("info-box")[j];
  const iconPic = document.getElementsByClassName("clicked-icon-pic-main")[j];

  const sectionToMove = document.getElementsByClassName('info-box-from-main-icon')[j];
  const newParent = document.getElementsByClassName('post-clicked-info-box-header')[j];
  const oldParent = document.getElementsByClassName('post-outer-icon')[j];


  
  let showTimeout, hideTimeout;

  const showInfoBox2 = (top, left) => {
    clearTimeout(hideTimeout);
    newParent.appendChild(sectionToMove);
    infoBox2.style.position = "absolute"; // Ensure this is outside the timeout
    infoBox2.style.zIndex = "9999999"; // Ensure this is outside the timeout
    hideTimeout = setTimeout(() => {
      infoBox2.style.visibility = 'hidden';
      infoBox2.style.opacity = "0";
      setTimeout(() => {
        infoBox2.style.transition = "opacity 0.3s";
        infoBox2.style.visibility = 'visible';
        infoBox2.style.opacity = "1";
        infoBox2.style.top = top;
        infoBox2.style.left = left;
      }, 300);
    }, 0);
  };


  const handleMouseEnter2 = (top, left) => {
    clearTimeout(hideTimeout);
    showTimeout = setTimeout(() => showInfoBox2(top, left), 300); // Delay to show the info box
  };

  const handleMouseLeave2 = () => {
    clearTimeout(showTimeout);

    hideTimeout = setTimeout(() => {
      infoBox2.style.transition = "opacity 0.3s";
      infoBox2.style.opacity = "0";
      setTimeout(() => {
        oldParent.appendChild(sectionToMove);
      }, 250)
      setTimeout(() => {
        infoBox2.style.visibility = 'hidden';
        
      }, 250); 
    }, 100); 


  };

  // Event listeners for channel name and icon pic with the same handlers
  channelName.addEventListener('mouseenter', () => handleMouseEnter2("45px", "65px"));
  iconPic.addEventListener('mouseenter', () => handleMouseEnter2("55px", "15px"));

  channelName.addEventListener('mouseleave', handleMouseLeave2);
  iconPic.addEventListener('mouseleave', handleMouseLeave2);

  // Keep the info box visible when hovering over it
  infoBox2.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
  });
  infoBox2.addEventListener('mouseleave', handleMouseLeave2);

}