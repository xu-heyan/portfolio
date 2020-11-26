//计算项目大卡片宽度
let articles = document.querySelectorAll(".projects article");
let bigCards = document.querySelectorAll(".projects .big-card");
setArctciles();
function setArctciles() {
  for (let i = 0; i < 4; i++) {
    articles[i].style.width = (window.innerWidth - 1040) / 2 + 1040 + "px";
    bigCards[i].style.width = (window.innerWidth - 1040) / 2 + 996 + "px";
  }
}
window.onresize = function () {
  setArctciles();
};

//平滑滚动到站内锚点
let links = document.querySelectorAll(".about-me .bottom li");
let anchorElements = document.querySelectorAll(".projects article");
for (let i = 0; i < 4; i++) {
  links[i].onclick = function () {
    anchorElements[i].scrollIntoView({ behavior: "smooth" });
  };
}

//project1视频
let video1btn = document.getElementById("video1btn");
let videoholder1 = document.getElementById("videoholder1");
let video1 = document.getElementById("video1");
let close1 = document.getElementById("close1");
video1.volume = 0.6;
video1btn.onclick = function () {
  videoholder1.style.display = "block";
  video1.currentTime = 0;
  video1.play();
};
close1.onclick = function () {
  videoholder1.style.display = "none";
  video1.pause();
};
//project2视频
let video2btn = document.getElementById("video2btn");
let videoholder2 = document.getElementById("videoholder2");
let video2 = document.getElementById("video2");
let close2 = document.getElementById("closev2");
video2.volume = 0.6;
video2btn.onclick = function () {
  videoholder2.style.display = "block";
  video2.currentTime = 0;
  video2.play();
};
close2.onclick = function () {
  videoholder2.style.display = "none";
  video2.pause();
};
//project3视频
let video3btn = document.getElementById("video3btn");
let videoholder3 = document.getElementById("videoholder3");
let video3 = document.getElementById("video3");
let close3 = document.getElementById("closev3");
video3.volume = 0.6;
video3btn.onclick = function () {
  videoholder3.style.display = "block";
  video3.currentTime = 0;
  video3.play();
};
close3.onclick = function () {
  videoholder3.style.display = "none";
  video3.pause();
};
//project放大img
let p3img = document.getElementById("p3img");
let cover = document.getElementById("cover");
let closeimg = document.getElementById("closeimg");
p3img.onclick = function () {
  cover.style.display = "flex";
};
closeimg.onclick = function () {
  cover.style.display = "none";
};
//封装卡片轮播
class CardCarousel {
  constructor(projectIndex) {
    this.projectIndex = projectIndex;
    this.cards = document.querySelectorAll(
      ".project" + (projectIndex + 1) + " .cardjs"
    );
    this.ps = document.querySelectorAll(
      ".project" + (projectIndex + 1) + " .cardjs p"
    );
    this.mask = document.getElementById("mask" + projectIndex);
    this.flex = document.querySelector(
      ".project" + (projectIndex + 1) + " .mask .flex"
    );
    this.close2 = document.getElementById("close" + (projectIndex + 2));
    for (let i = 0; i < this.cards.length; i++) {
      const item = this.cards[i];
      let that = this;
      item.addEventListener("click", function () {
        that.updateMask(i);
      });
    }
    this.close2.onclick = () => {
      this.mask.style.display = "none";
    };
  }
  updateMask(i) {
    let lastNext;
    if (i == 0) {
      lastNext = "<div class='next'></div>";
    } else if (i == this.cards.length - 1) {
      lastNext = "<div class='last'></div>";
    } else {
      lastNext = "<div class='last'></div><div class='next'></div>";
    }
    this.flex.innerHTML = `
        ${lastNext}
        <img src="imgs/pg3/${this.projectIndex + 2}-${i + 1}.jpg" alt="">
        <p><span>${i + 1}. </span>${this.ps[i].innerText}</p>
    `;
    this.mask.style.display = "flex";

    let last = document.querySelector(
      ".project" + (this.projectIndex + 1) + " .mask .last"
    );
    let next = document.querySelector(
      ".project" + (this.projectIndex + 1) + " .mask .next"
    );
    if (last) {
      let that = this;
      last.onclick = function () {
        that.updateMask(i - 1);
      };
    }
    if (next) {
      let that = this;
      next.onclick = function () {
        that.updateMask(i + 1);
      };
    }
  }
}
let p1CardCarousel = new CardCarousel(0);
let p2CardCarousel = new CardCarousel(1);
let p3CardCarousel = new CardCarousel(2);
let p4CardCarousel = new CardCarousel(3);
