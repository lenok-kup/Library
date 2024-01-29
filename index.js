const burgerBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.menu-burger');
let burgerLink = document.querySelectorAll('.header__link');
const icon = document.querySelector('.header__icon');
const authIcon = document.querySelector('.initials');
const dropMenu = document.querySelector('.drop-menu');
const dropCardNum = document.querySelector('.profile-menu');
const titleCardNum = document.querySelector('.profile-menu__title');
let menuOpen = false;
let profileOpen = false;
let cardNumOpen = false;


document.body.addEventListener('click', closeMenu);
document.body.addEventListener('click', closeProfile);
document.body.addEventListener('click', closeCardNum);

icon.addEventListener('click', (e) => {
    if(profileOpen){
        closeProfile();
        profileOpen = false;
    }
    else{
        showProfile(e);
        profileOpen = true;
        if(menuOpen){
            closeMenu();
            menuOpen = false;
        }
        else if(cardNumOpen){
            closeCardNum();
            cardNumOpen = false;
        }
    }
});

burgerBtn.addEventListener('click', (e) => {
    if(menuOpen){
        closeMenu();
        menuOpen = false;
    }
    else{
        showMenu(e);
        menuOpen = true;
        if(profileOpen){
            closeProfile();
            profileOpen = false;
        }
        else if(cardNumOpen){
            closeCardNum();
            cardNumOpen = false;
        }
    }
});

authIcon.addEventListener('click', (e) => {
    if(cardNumOpen){
        closeCardNum();
        cardNumOpen = false;
    }
    else{
        showCardNum(e);
        cardNumOpen = true;
        if(menuOpen){
            closeMenu();
            menuOpen = false;
        }
        else if(profileOpen){
            closeProfile();
            profileOpen = false;
        }
    }
});


burgerLink.forEach((link) => {
    link.addEventListener('click', showMenu)
});

function showMenu(e) {
    e.stopPropagation();
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
    menuOpen = true;
};

function closeMenu() {
    if (!menu.classList.contains('active')) {
        burgerBtn.classList.remove('active');
        menu.classList.add('active');
    }
  
};

function showProfile(e) {
    e.stopPropagation();
    dropMenu.classList.toggle('hide-drop');
    profileOpen = true;
}

function closeProfile() {
    dropMenu.classList.add('hide-drop');
}

function showCardNum(e) {
    e.stopPropagation();
    dropCardNum.classList.toggle('hide-drop');
    cardNumOpen = true;
    let parseObj = JSON.parse(localStorage.getItem('user'))
    titleCardNum.textContent = parseObj.card_number;
}

function closeCardNum() {
    dropCardNum.classList.add('hide-drop');
}


console.log('Оценка за работу 200 баллов, согласно всем требованиям');








