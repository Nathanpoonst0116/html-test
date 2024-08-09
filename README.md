# Title: Instagram UI practice (Mac version)

## Disclaimer
This website is just for practice and currently only works on MacBook. Other devices, such as Windows and phones, might have bugs.

## Description
The website is made based on the Instagram UI. Only the main page is showcased  

## Major Functions and effects

#### 1. Responsive layout for different window widths (3 versions)

#### 2. Stories horizontal scroll and left/right button for scrolling

#### 3. Post-liking-effects: button animation, posts double-tap heart animation

#### 4. User icon/name hover info-box showcase, follow button effect in the info-box

#### 5. Comment system (only available on pop-up comment box)

#### 6. Pop-up comment box responsive layout

#### 7. Video stop, sound on/off button

#### 8. Posts swiper for multiple images, with left/right button for swiping

#### 9. Buttons/cursor effects

## Limitations/missing interactions

#### 1. Follow-buttons on the right suggestion tables

#### 2. Like effect on the pop-up comment box

#### 3. Video control button on the pop-up comment box

#### 4. Bookmark button effect

#### 5. Comment box under post on the main 


## File Description

### 1. ig.html
- **Structure**: Divided into three parts:
  - Left side navigation bar
  - Top and bottom bars
  - Main box for posts
  - Right side for recommendations
- **Classes**: Classes are created for most elements.
- **Responsive Design**: Based on the official Instagram, three layouts are designed for different window sizes.

### 2. ig-css
- **Layout**: Primarily uses Flexbox for display.
- **Button Effects**: Includes effects and designs for most buttons.
- **Adjustments**: Box sizes and positions are adjusted.
- **Designs**: Colors and fonts are designed.
- **Effects**: Scrolling and hover effects are implemented.

#### 2.1. ig-main.css
- **Purpose**: Styles for elements across all window sizes.

#### 2.2. ig-large.css
- **Purpose**: Styles for elements in large window sizes.

#### 2.3. ig-small.css
- **Purpose**: Styles for elements in smaller window sizes.

#### 2.4. ig-extra-small.css
- **Purpose**: Styles for elements in the smallest window sizes.

#### 2.5. ig-main-info-box.css
- **Purpose**: Styles for the hover info box in the main section.

#### 2.6. ig-main-right.css
- **Purpose**: Styles for the box and elements for right-side recommendations.

#### 2.7. ig-right-info-box.css
- **Purpose**: Styles for the hover info box on the right side.

#### 2.8. ig-left-hover-box.css
- **Purpose**: Styles for hover details on the left navigation bar buttons (smaller window sizes).

#### 2.9. ig-post-detail-insert-box.css
- **Purpose**: Styles for the pop-up detail box when clicking the comment buttons.

### 3. ig-js
- **Content**: Mainly for the interaction and logic of buttons and boxes.

#### 3.1. ig-like.js
- **Purpose**: Animation and logic for the liking system, such as post double tap heart animation, the like button clicked effect, and likes number changes.
- **limitation**: No loops are used, causing inefficiency and lengthy codes.
  
#### 3.2. ig-swiper.js
- **Purpose**: Swiper for the last post, enable swiping between images. Imported source codes from online.
  
#### 3.3. ig-follow-btn.js
- **Purpose**: Following-logic for duplicates hover-info-box on the right.
- **limitation**: hover-info-boxes are not the same object corresponding to the name and icon for each user.
  
#### 3.4. ig-right-box.js
- **Purpose**: Logic for the hover-info-box effect, including those triggered by the pop-up box from comment.
  
#### 3.5. ig-post-detail-insert.js
- **Purpose**: Using loops to insert pop-up detail-box for posts, as well as the comment button triggering logic.

#### 3.6. ig-comment.js
- **Purpose**: Dynamic comment systems for each post (only available in pop-up box).

## Installation Instructions
1. Clone the repository.
2. Open `ig.html` in a web browser (preferably on MacBook).

## URL showcase
- https://edgeguy0116.github.io/html-test/ig.html

## Completion Date 
- 17/7/2024 ~ 9/8/2024 (Practice 1)
