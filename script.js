let num;
let halt = false;

function showimg(n, override) {
  if (halt && !override) {
    halt = false;
    return;
  }
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
  num += 1;
  setTimeout(showimg, 5000);
}

function toimg(n) {
  halt = true;
  showimg(num = n, 1);
}

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("doanim");
    io.unobserve(e.target);
  });
}, { threshold: 0.2 });

document.querySelectorAll(".animate").forEach((el) => {io.observe(el)});

showimg(num = 1, 0);
