const bookMarkBtn = document.querySelector(".btn__bookmark");
let isBookMarked = false;
function bookMark() {
    let bookMarkText = bookMarkBtn.querySelector("span");
    if (!isBookMarked) {
        bookMarkBtn.querySelector("img").src =
            "../assets/images/icon-bookmarked.svg";
        bookMarkText.style.color = "var(--Dark-cyan)";
        bookMarkText.innerText = "Bookmarked";
    } else {
        bookMarkBtn.querySelector("img").src =
            "../assets/images/icon-bookmark.svg";
        bookMarkText.innerText = "Bookmark";
        bookMarkText.style.color = "var(--Dark-gray)";
    }
    isBookMarked = !isBookMarked;
}

// fixedLayOutTop
const layOut = document.querySelector(".body__container--header__layout");
const documentHeight = document.body.scrollHeight;
function fixedLayOutTop() {
    let scrollTop =
        window.pageYOffset !== undefined
            ? window.pageYOffset
            : (
                  document.documentElement ||
                  document.body.parentNode ||
                  document.body
              ).scrollTop;
    if (layOut.clientHeight + scrollTop <= documentHeight)
        layOut.style.top = `${scrollTop + 100}px`;
    else {
        layOut.style.top = `${documentHeight - layOut.clientHeight}px`;
    }
}

// Layout ON/OFF
const modal = document.querySelector(".modal");
const modalLayout = document.querySelector(".body__container--header__layout");
const modalLayoutComplete = document.querySelector(
    ".body__container__modal__complete"
);
function openHeaderLayout() {
    modal.classList.add("modal__showUp");
    modalLayout.classList.add("layout__showUp");
    fixedLayOutTop();
}
function closeModal() {
    modal.classList.remove("modal__showUp");
    modalLayout.classList.remove("layout__showUp");
    modalLayoutComplete.classList.remove("layout-complete__showUp");
}
function openCompleteLayout() {
    modalLayoutComplete.classList.add("layout-complete__showUp");
    modalLayout.classList.remove("layout__showUp");
}

const formEnterPledgeInp = document.querySelectorAll(".enter-pledge__inp");
function fixFormEnterPledgeInp(e) {
    if (e.id === "min0") return e.value <= 0;
    else if (e.id === "min25") return e.value <= 25;
    else return e.value <= 75;
}
formEnterPledgeInp.forEach(function (event) {
    event.addEventListener(
        "keydown",
        (e) => {
            if (e.keyCode === 40 && fixFormEnterPledgeInp(event)) {
                e.preventDefault();
            } else if (e.keyCode === 69 || e.keyCode === 13) e.preventDefault();
        },
        false
    );
    event.addEventListener(
        "blur",
        () => {
            let value = parseInt(event.value);
            if (event.id == "min0" && value < 0) {
                event.value = 0;
            } else if (event.id == "min25" && value < 25) {
                event.value = 25;
            } else if (event.id == "min75" && value < 75) {
                event.value = 75;
            }
        },
        false
    );
});

function chooseLayOutProject(e) {
    if (e.checked) {
        e.parentNode.childNodes[9].style.display = "flex";
        e.parentNode.style.borderColor = "var(--Moderate-cyan)";
    } else {
        e.parentNode.childNodes[9].style.display = "none";
        e.parentNode.style.borderColor = "var(--Border-color)";
    }
}

// Mobile navbar
const mobileNavBar = document.querySelector(
    ".header__heading__mobile__nav__navbar"
);
let isMobileNavBarOpen = false;

function openAndCloseMobileNav(e) {
    if (!isMobileNavBarOpen) {
        e.src = "../assets/images/icon-close-menu.svg";
        mobileNavBar.style.display = "block";
    } else {
        e.src = "../assets/images/icon-hamburger.svg";
        mobileNavBar.style.display = "none";
    }
    isMobileNavBarOpen = !isMobileNavBarOpen;   
}

const layoutHr = document.querySelectorAll("hr");
autoChangeHr();
function autoChangeHr() {
    for (let i = 0; i < layoutHr.length; i++) {
        let height = layoutHr[i].parentNode.parentNode.clientHeight;
        layoutHr[i].style.top = `${height}px`;
    }
}
window.onresize = autoChangeHr;
