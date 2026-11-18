let num;

function showimg(n) {
  let i;
  let carimg = document.getElementsByClassName("carimg");
  let dots = document.getElementsByClassName("dot");
  if (num > carimg.length) {
    num = 1;
  }
  if (num < 1) {
    num = carimg.length;
  }
  for (i = 0; i < carimg.length; i++) {
    carimg[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  carimg[num-1].style.display = "block";
  dots[num-1].className += " active";
  setTimeout(showimg, 5000);
}

showimg(num = 1);
