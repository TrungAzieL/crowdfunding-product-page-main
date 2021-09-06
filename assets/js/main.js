const bookMarkBtn = document.querySelectorAll(".btn__bookmark");
bookMarkBtn[1].style.display = "none";
function bookMarked() {
    bookMarkBtn[0].style.display = "none";
    bookMarkBtn[1].style.display = "flex";
}
function bookMark() {
    bookMarkBtn[0].style.display = "flex";
    bookMarkBtn[1].style.display = "none";
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

const mobileNavBarBtn = document.querySelectorAll(
    ".header__heading__mobile__nav > img"
);
mobileNavBarBtn[1].style.display = "none";
function openMobileNav() {
    mobileNavBarBtn[0].style.display = "none";
    mobileNavBarBtn[1].style.display = "block";
    mobileNavBar.style.display = "block";
}
function closeMobileNav() {
    mobileNavBarBtn[1].style.display = "none";
    mobileNavBarBtn[0].style.display = "block";
    mobileNavBar.style.display = "none";
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
