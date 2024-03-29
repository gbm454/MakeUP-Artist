var portfolioList = document.querySelectorAll(".portfolio-box");
portfolioList.forEach(function(portfolioPic){
    portfolioPic.addEventListener("click", function(){
        bg = this.style.backgroundImage;
        document.getElementById("pop_pic_bg").classList.add("active");
        document.getElementById("pop_pic").classList.add("active");
        document.getElementById("pop_pic").style.backgroundImage = bg;
    });
});

document.getElementById("pop_pic_bg").addEventListener("click", function(){
    document.getElementById("pop_pic_bg").classList.remove("active");
    document.getElementById("pop_pic").classList.remove("active");

})