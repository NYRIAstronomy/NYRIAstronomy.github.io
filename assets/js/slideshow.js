var slideIndex = 1;
showImgs(slideIndex);

function plusImgs(n) {
  showImgs(slideIndex += n);
}

function currentImg(n) {
  showImgs(slideIndex = n);
}

function showImgs(n) {
  var i;
  var imgs = document.getElementsByClassName("slideshow-element");
  var dots = document.getElementsByClassName("slideshow-badge");
  if (n > imgs.length) {slideIndex = 1}
  if (n < 1) {slideIndex = imgs.length}
  for (i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slideshow-badge-active", "");
  }
  imgs[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " slideshow-badge-active";
}
