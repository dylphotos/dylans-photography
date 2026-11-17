let imgi = 1;

function showimg(n) {
  let i;
  let num = n;
  let carimg = document.getElementsByClassName("carimg");
  let dots = document.getElementsByClassName("dot");
  if (num > carimg.length) {
    num = 1;
  }
  if (n < 1) {
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
  //setTimeout(showimg, 5000);
}

function toimg(n) {
  showimg(imgi = n);
}

showimg(imgi);
