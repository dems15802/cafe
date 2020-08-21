const banner = document.querySelector(".banner"),
    bannerconts = banner.querySelector(".bannerconts"),
    bannerA = bannerconts.querySelectorAll("a"),
    img = bannerconts.querySelectorAll("img"),
    prev = banner.querySelector(".prev"),
    next = banner.querySelector(".next"),
    bull = banner.querySelector(".bull");

let i = 0,
    bannerWidth = banner.clientWidth,
    bullA = [],
    sliding;

function iconChange() {

    bullA.forEach(function (e) {
        const bullImg = e.childNodes[0];
        bullImg.src = `img/bull.gif`;
    });
    bullA[i].childNodes[0].src = `img/bull_over.gif`;
}

function iconClick(e) {
    const indexA = bullA.indexOf(e.target.parentNode);
    imgSlide(indexA);
}

function addIcon() {
    for (c = 0; c < bannerA.length; c++) {
        const creImg = document.createElement("img");
        const creA = document.createElement("a");
        if (c === 0) {
            creImg.src = `img/bull_over.gif`;
        } else {
            creImg.src = `img/bull.gif`;
        }
        creImg.alt = `${c+1}번째 슬라이드로 이동`;
        creA.appendChild(creImg);
        creA.href = `javascript:;`;
        bull.appendChild(creA);
        bullA.push(creA);
    }
    bullA.forEach(function (e) {
        e.addEventListener("click", iconClick);
    });
}

/*
function slideWidth() {
    banner.style.width = `100%`;
    bannerconts.style.width = `${100*a.length}%`;
    a.forEach(function(e){
        e.style.width = `${100/a.length}%`;
    })
//    img.forEach(function(e){
//        e.style.width = `${100}%`;
//    })
    bannerconts.style.transform = `translateX(-${i*(bannerWidth-1)}px)`;
    bannerWidth = banner.clientWidth;
    return bannerWidth;
//    console.log(bannerconts.clientWidth);
}
*/

function imgSlide(j) {
    if (j === undefined) {
        i++
        if (i > bannerA.length - 1) {
            i = 0;
        }
    } else if (j === Number(j)) {
        i = j
    } else {
        if (j.target.className === "prev") {
            i--
            if (i < 0) {
                i = bannerA.length - 1;
            }
        } else if (j.target.className === "next") {
            i++
            if (i > bannerA.length - 1) {
                i = 0;
            }
        }
    }

    bannerconts.style.transform = `translateX(-${i*(bannerWidth)}px)`;
    bannerconts.style.transition = `400ms`;

    iconChange();
    clearInterval(sliding);
    sliding = setInterval(imgSlide, 5000);
}

function init() {
    addIcon();
    prev.addEventListener("click", imgSlide);
    next.addEventListener("click", imgSlide);
    sliding = setInterval(imgSlide, 5000);
};

init();
