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
    //        bullA = bull.querySelectorAll("a");

    bullA.forEach(function (e) {
        //        const bullImg = e.firstChild;
        const bullImg = e.childNodes[0];
        bullImg.src = `img/bull.gif`;
        //        e.innerHTML = `<img src="img/bull.gif">`;
    });
    //console.log(bullA);
    bullA[i].childNodes[0].src = `img/bull_over.gif`;
    //    bullA[i].innerHTML = `<img src="img/bull_over.gif">`;
}

function iconClick(e) {
    //    console.log(e.target);
    const indexA = bullA.indexOf(e.target.parentNode);
    //    console.log(bullA.indexOf(indexA));
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
        //        console.log(bullA.indexOf(e));
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
    //    console.log(j.target.className);
    /*if (j.target.className === "prev") {
        i--
        if (i < 0) {
            i = bannerA.length - 1;
        }
    } else if (j.target.className === "next") {
        i++
        if (i > bannerA.length - 1) {
            i = 0;
        }
    } else if (j === Number(j)) {
        i = j
    }*/

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

/*function prevImg() {
    i--
    if (i < 0) {
        i = bannerA.length - 1;
    }
    bannerconts.style.transform = `translateX(-${i*(bannerWidth)}px)`;
    bannerconts.style.transition = `400ms`;
    
    iconChange();
    clearInterval(sliding);
    sliding = setInterval(nextImg, 5000);
    
//    console.log(i*bannerWidth);
//    console.log(bannerconts.style.left);
}

function nextImg() {
//    console.log(i);
    i++
    if (i > bannerA.length - 1) {
        i = 0;
    }
//    if(e !== undefined){
//        i = e.target.indexOf();
//    }
    bannerconts.style.transform = `translateX(-${i*(bannerWidth)}px)`;
    bannerconts.style.transition = `400ms`;
    
    iconChange();
//    console.log(sliding);
    clearInterval(sliding);
    sliding = setInterval(nextImg, 5000);
    
//    console.log(i*bannerWidth);
//    console.log(bannerconts.style.left);
}*/

function init() {
    addIcon();
    prev.addEventListener("click", imgSlide);
    next.addEventListener("click", imgSlide);
    sliding = setInterval(imgSlide, 5000);
    //    setTimeout(nextImg, 5000);
};

init();
