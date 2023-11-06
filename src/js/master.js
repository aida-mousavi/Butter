let btnHam = document.querySelector("#btnHam");
let main = document.getElementsByTagName("main")[0];
let silv = document.getElementById("SILV");
let Product = document.querySelector("#PRODUCES");
let imgProduct = document.querySelectorAll("#PRODUCES>figure")[1];
let believe = document.querySelector("#BELIEVE");
let peanut = document.getElementById("PEANUT");
let arrowRight = document.getElementById("arrowRight");
let arrowLeft = document.getElementById("arrowLeft");
let quoteComment = document.getElementById("quoteComment");
let knife = document.querySelector("#PRODUCES>img");
let adv = document.querySelectorAll(".ADV");
let seen = document.querySelector("#SEEN");
let seenImg = seen.querySelectorAll("img");
let hamMenu = document.getElementById("hamMenu");
let scrollTopScreen;
let clickArrow;
let quoteWidthAll = 2220;

main.addEventListener("scroll", (e) => {
  scrollTopScreen = e.target.scrollTop;
  resizing();
});

window.addEventListener("resize", () => {
  main.addEventListener("scroll", (e) => {
    scrollTopScreen = e.target.scrollTop;
  });

  resizing();
  mainWidth = main.clientWidth;
  clickArrow = Math.ceil((quoteWidthAll - mainWidth) / 370);

});

function resizing() {
  if (scrollTopScreen - 200 > silv.offsetTop) {
    let getSpan = silv.querySelectorAll("span");
    getSpan.forEach((val) => {
      val.classList.add("animate-moveText");
    });
  }

  scrollTopScreen > imgProduct.offsetTop + 100
    ? (imgProduct.querySelector("div").style.top = "100%")
    : false;
  scrollTopScreen > knife.offsetTop + 200
    ? (knife.style.transform = "translateX(0px)")
    : false;

  if (scrollTopScreen > believe.offsetTop - 500) {
    let getImg = believe.querySelectorAll("img");

    getImg[1].style.left = "0%";
    getImg[2].style.right = "0%";
  }

  if (scrollTopScreen + 300 > peanut.offsetTop) {
    let getSpan = peanut.querySelectorAll("span");
    getSpan.forEach((val) => {
      val.classList.add("animate-moveText");
    });
  }

  if (scrollTopScreen + 300 > seen.offsetTop) {
    seenImg.c;
    adv.forEach((val) => {
      val.classList.add("animate-circleLOGO");
      let = x = val.querySelectorAll("img");
      x.forEach((val2) => {
        val2.classList.add("animate-circleIMG");
      });
    });
  }
}

btnHam.addEventListener("click", () => {
  btnHam.classList.toggle("[transform:translateY(-40px)]");
  hamMenu.classList.toggle("[top:0%]");
});

let arrow = 0;
let mainWidth = main.clientWidth;
clickArrow = Math.ceil((quoteWidthAll - mainWidth) / 370);
let tempClick = 0;

arrowRight.addEventListener("click", () => {
  if (tempClick != clickArrow) {
    arrowRight.style.visibility = "visible";
    arrowLeft.style.visibility = "visible";

    tempClick++;
    arrowRight.style.visibility = "visible";
    arrow -= 370;

    quoteComment.style.transform = `translateX(${arrow + "px"})`;

    if (tempClick == clickArrow) {
      arrowRight.style.visibility = "hidden";
    }
  }
});
arrowLeft.addEventListener("click", () => {
  if (tempClick != 0) {
    arrowLeft.style.visibility = "visible";
    arrowRight.style.visibility = "visible";
    tempClick--;
    arrow += 370;
    quoteComment.style.transform = `translateX(${arrow + "px"})`;
    if (tempClick == 0) {
      arrowLeft.style.visibility = "hidden";
    }
  }
});
