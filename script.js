let imgi = 1;
showimg(imgi);

function toimg(n) {
  showimg(imgi = n);
}

function showimg(n) {
  let i;
  let carousel = document.getElementsByClassName("carousel");
  let dots = document.getElementsByClassName("dot");
  if (n > carousel.length) {
    imgi = 1;
  }
  if (n < 1) {
    imgi = carousel.length;
  }
  for (i = 0; i < carousel.length; i++) {
    carousel[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  carousel[imgi-1].style.display = "block";
  dots[imgi-1].className += " active";
  //setTimeout(showimg, 5000);
}
