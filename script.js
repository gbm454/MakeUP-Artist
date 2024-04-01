var portfolioList = document.querySelectorAll(".portfolio-box");
const description = document.querySelectorAll(".description");

portfolioList.forEach(function (portfolioPic) {
  portfolioPic.addEventListener("click", function () {
    var bg = this.style.backgroundImage;
    var description = this.querySelector(".description").innerText;
    document.getElementById("pop_pic_bg").classList.add("active");
    document.getElementById("pop_pic").classList.add("active");
    document.getElementById("pop_pic").style.backgroundImage = bg;
    document.getElementById("pop_pic").innerText = description;
    document.getElementById("pop_pic").style.color = "black";
    document.getElementById("pop_pic").style.fontSize = "20px";
    document.getElementById("pop_pic").style.fontWeight = "bold";
  });
});

document.getElementById("pop_pic_bg").addEventListener("click", function () {
  document.getElementById("pop_pic_bg").classList.remove("active");
  document.getElementById("pop_pic").classList.remove("active");
});
