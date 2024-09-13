---
layout: page
title: About
permalink: /about/
---



My name is Nikith Muralikrishnan and I am a sophmore at Del Norte High School.

I was born on October 4, 2008 in Stamford, Connecticut.

I then moved to San, Diego California when I was around 3-4 months old.

Both of my parents are from Tamilnadu, India and immigrated to America in the year 2000.

I live with my mom dad, and litle sister.

My favorite subject in school is math and I want to become an enginer when I grow up.

I am really interested in space and how the universe works.

I am also a black belt in Karate.

My favorite cuisine is Italian food.

My favorite show is One Piece.






<div class="slideshow-container">

  <!-- Full-width images with number and caption text -->
  <div class="mySlides fade">
    <div class="numbertext">1 / 8</div>
    <img src="https://tse3.mm.bing.net/th?id=OIP.U1qGjRWlchLM6ZcGS6-yMAHaER&pid=Api&P=0&h=220" style="width:100%">
  </div>

  <div class="mySlides fade">
    <div class="numbertext">2 / 8</div>
    <img src="https://tse1.mm.bing.net/th?id=OIP.T9f23eG6mxoV15s9ZdIKcgAAAA&pid=Api&P=0&h=220" style="width:100%">
  </div>

  <div class="mySlides fade">
    <div class="numbertext">3 / 8</div>
    <img src="https://tse1.mm.bing.net/th?id=OIP.YHufaYYtdq8EtHQRPAx_9QHaE8&pid=Api&P=0&h=220" style="width:100%">
  </div>

  <div class="mySlides fade">
    <div class="numbertext">4 / 8</div>
    <img src="https://image.freepik.com/free-vector/chalkboard-with-math-elements_1411-88.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <div class="numbertext">5 / 8</div>
    <img src="https://images.designtrends.com/wp-content/uploads/2015/12/10064623/Space-Backgrounds15.jpg" style="width:100%">
  </div>

  <div class="mySlides fade">
    <div class="numbertext">6 / 8</div>
    <img src="https://pluspng.com/img-png/karate-black-belt-png-the-black-belt-is-more-than-just-a-symbol-of-accomplishment-it-is-a-way-of-1298.png" style="width:100%">
  </div>

  <div class="mySlides fade">
    <div class="numbertext">7 / 8</div>
    <img src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco/k/Photo/Recipes/2020-10-How-to-Make-the-Easiest-Gnocchi-from-Scratch%20/HT-Gnocchi-From-Scratch-479" style="width:100%">
  </div>

  <div class="mySlides fade">
    <div class="numbertext">8 / 8</div>
    <img src="https://1.bp.blogspot.com/-Awn9T6Cw5Pg/UmrRa71BrfI/AAAAAAAAW5U/wsBlO0_C_j8/s1600/Volume+1+One+Piece.png" style="width:100%">
  </div>

  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>

<style>
    * {box-sizing:border-box}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}


.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}
</style>

<script>
    let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
</script>