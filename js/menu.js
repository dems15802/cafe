const gnb = document.querySelector(".gnb"),
    hover = gnb.querySelectorAll(".hover"),
    hoverA = document.querySelectorAll(".hover a"),
    ul = gnb.querySelectorAll(".hover > ul");

function none() {
    ul.forEach(function (e) {
//        e.style.display = 'none';
        e.style.height = 0;
//        e.style.marginTop = -270;
        e.style.marginTop = 0;
        e.style.opacity = 0;
        e.style.visibility = `hidden`;
//        e.style.transition = `400ms`;
    });
}

function show() {
    ul.forEach(function (e) {
//        e.style.display = 'block';
        e.style.height = `200px`;
//        e.style.marginTop = 0;
        e.style.marginTop = `20px`;
        e.style.opacity = 1;
        e.style.visibility = `visible`;
//        e.style.transition = `400ms`;
    });
}

function init() {
    hover.forEach(function (e) {
        e.addEventListener("mouseover", show);
        e.addEventListener("mouseleave", none);
    });
    hoverA.forEach(function(e){
        e.addEventListener("focus", show);
        e.addEventListener("blur", none);
    })

}

init();
