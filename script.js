function showimg(n) {
  let i;
  let carimg = document.getElementsByClassName("carimg");
  let dots = document.getElementsByClassName("dot");
  if (n > carimg.length) {
    imgi = 1;
  }
  if (n < 1) {
    imgi = carimg.length;
  }
  for (i = 0; i < carimg.length; i++) {
    carimg[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  carimg[imgi-1].style.display = "block";
  dots[imgi-1].className += " active";
  //setTimeout(showimg, 5000);
}

function toimg(n) {
  showimg(imgi = n);
}

let imgi = 1;
showimg(imgi);
