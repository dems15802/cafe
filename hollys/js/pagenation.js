const pagenation = document.querySelector(".pagenation"),
    pageBtn = pagenation.querySelectorAll(".pageBtn"),
    pageNum = pagenation.querySelectorAll(".pageNum");

let pageNumArray = [],
    j = 0;

function classMove(className) {
    if (className === "prevBtn" && j !== 0) {
        j--;
    } else if (className === "nextBtn" && j !== 9) {
        j++;
    }
    console.log(j);
    pageNum.forEach(function (i) {
        i.classList.remove("on");
    });
    pageNum[j].classList.add("on");
}

function pageMove(e) {
    const hasClass = this.className,
        thisClass = hasClass.slice(8, hasClass.length);

    e.preventDefault();

    classMove(thisClass);

}


function pageNumClick(e) {
    e.preventDefault();
    pageNum.forEach(function (i) {
        i.classList.remove("on");
    })
    this.classList.add("on");
    j = pageNumArray.indexOf(this);
}


function init() {
    pageNum.forEach(function (e) {
        e.addEventListener("click", pageNumClick);
        pageNumArray.push(e);
    })
    pageBtn.forEach(function (e) {
        e.addEventListener("click", pageMove);
    })
}

init();
