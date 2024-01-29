const modal = document.querySelector('.modal-container');
const login = document.querySelector('.login-container');
const myProfile = document.querySelector('.my-profile__container');
const buyCard = document.querySelector('.buy-card__container');
const linkToLogin = document.querySelector('.login-link');
const linkToRegister = document.querySelector('.register-link');
const regNeed = document.querySelector('.register-need');
const logNeed = document.querySelector('.login-need');
const linkToBuyCard = document.querySelectorAll('.btn-buy');
const linkToMyProfile = document.querySelector('.my-profile-link');
const logOutLink = document.querySelector('.log-out-link');
const linkToModal = document.querySelector('.link-to-register');
const linkToLogForm = document.querySelector('.link-to-login');
const modalCloseBtn = document.querySelector('.close-btn');
const loginCloseBtn = document.querySelector('.close-login');
const btnShowProfile = document.querySelector('.show-profile-btn');
const myProfileCloseBtn = document.querySelector('.close-my-profile');
const buyCardCloseBtn = document.querySelector('.close-buy-card');
const inputs = document.querySelectorAll('.modal__input');
const inputsLog = document.querySelectorAll('.inp-log');
const buyCardInputs = document.querySelectorAll('.buy-card__inp');
const formUser = {};
let regUser = null;
let authUser = null;
let cardHave = null;


let textInitials = document.querySelector('.text');
let profileUserName = document.querySelector('.my-profile__user-name');
let insertCardNumber = document.querySelector('.my-profile__insert-card');
const copyCardNumber = document.querySelector('.my-profile__card-copy');

linkToBuyCard.forEach((buy) => {
    buy.addEventListener('click', () => {
        if (authUser === null) {
            showModalLog();
        }

        else if (authUser !== null && cardHave === null) {
            showBuyCard();
        }

        else {
            buy.textContent = 'Own';
            buy.classList.add('btn--disabled');
        }
    });
});


regNeed.addEventListener('click', showModal);
logNeed.addEventListener('click', showModalLog);
linkToRegister.addEventListener('click', showModal);
linkToLogin.addEventListener('click', showModalLog);
btnShowProfile.addEventListener('click', showMyProfile);
linkToMyProfile.addEventListener('click', showMyProfile);
linkToModal.addEventListener('click', showModal);
linkToLogForm.addEventListener('click', showModalLog);
modalCloseBtn.addEventListener('click', showModal);
loginCloseBtn.addEventListener('click', showModalLog);
myProfileCloseBtn.addEventListener('click', showMyProfile);
buyCardCloseBtn.addEventListener('click', showBuyCard);
modal.addEventListener('click', closeModal);
login.addEventListener('click', closeModalLog);
myProfile.addEventListener('click', closeMyProfile);
buyCard.addEventListener('click', closeBuyCard);
logOutLink.addEventListener('click', logOutFromProfile);
document.body.addEventListener('keydown', closeModal);
document.body.addEventListener('keydown', closeModalLog);
document.body.addEventListener('keydown', closeMyProfile);
document.body.addEventListener('keydown', closeBuyCard);



function logOutFromProfile() {
    initials.classList.toggle('hidden');
    imgUser.classList.toggle('hidden');
    defaultLibraryCard.classList.remove('hidden');
    yourLibraryCard.classList.add('hidden');
    linkToBuyCard.forEach((buy) => {
        buy.textContent = 'Buy';
        buy.classList.remove('btn--disabled');
    });
    regUser = null;
    authUser = null;
    cardHave = null;
};

function showBuyCard() {
    // e.preventDefault();
    buyCard.classList.toggle('showModal');
    document.body.classList.toggle('overflow');
};

function closeBuyCard(e) {
    if ((e.target == buyCard || e.which === 13) && buyCard.classList.contains('showModal')) {
        closeElement();
    }
    else {
        return;
    }
};

function showMyProfile(e) {
    e.preventDefault();
    myProfile.classList.toggle('showModal');
    document.body.classList.toggle('overflow');
    showInitials();
    let formParse = JSON.parse(localStorage.getItem('user'));
    let cardNumber = formParse.card_number;
    insertCardNumber.textContent = cardNumber;
};

copyCardNumber.addEventListener('click', copyNumber);

function copyNumber() {
    let formParse = JSON.parse(localStorage.getItem('user'));
    let cardNumber = formParse.card_number;
    const tempInput = document.createElement('input');
    tempInput.setAttribute('value', cardNumber);
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}

function closeMyProfile(e) {
    if ((e.target == myProfile || e.which === 13) && myProfile.classList.contains('showModal')) {
        closeElement();
    }
    else {
        return;
    }
};

function showModalLog() {
    if (modal.classList.contains('showModal')) {
        closeElement();
    }
    // e.preventDefault();
    login.classList.toggle('showModal');
    document.body.classList.toggle('overflow');
};

function closeModalLog(e) {
    if ((e.target == login || e.which === 13) && login.classList.contains('showModal')) {
        closeElement();
    }
    else {
        return;
    }
};


function showModal(e) {
    if (login.classList.contains('showModal')) {
        closeElement();
    }
    e.preventDefault();
    modal.classList.toggle('showModal');
    document.body.classList.toggle('overflow');
};

function closeModal(e) {
    if ((e.target == modal || e.which === 13) && modal.classList.contains('showModal')) {
        closeElement();
    }
    else {
        return;
    }
};


function closeElement() {
    if (modal.classList.contains('showModal')) {
        modal.classList.toggle('showModal');
        document.body.classList.toggle('overflow');
    }
    else if (login.classList.contains('showModal')) {
        login.classList.toggle('showModal');
        document.body.classList.toggle('overflow');
    }
    else if (myProfile.classList.contains('showModal')) {
        myProfile.classList.toggle('showModal');
        document.body.classList.toggle('overflow');
    }
    else if (buyCard.classList.contains('showModal')) {
        buyCard.classList.toggle('showModal');
        document.body.classList.toggle('overflow');
    }
};

const yourLibraryCard = document.querySelector('.library-card--your__card');
const defaultLibraryCard = document.querySelector('.library-card--wrapper');
const nameLastName = document.querySelector('.name---last-name');
const cardNumber = document.querySelector('.card-number');

function showYourLibraryCard() {
    defaultLibraryCard.classList.add('hidden');
    yourLibraryCard.classList.remove('hidden');
};

const formBuyCard = document.querySelector('.buy_card');
const form = document.querySelector('.modal');
const formLog = document.querySelector('.login');
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const password = document.querySelector('#password');
const passwordLog = document.querySelector('#passwordLog');
const email = document.querySelector('#email');
const mail = document.querySelector('#mail');
const bankCardNumber = document.querySelector('#bankCard_number');
const expCode = document.querySelectorAll('#exp_code');
const cvc = document.querySelector('#cvc');
const cardHolder = document.querySelector('#cardholder');
const postCode = document.querySelector('#post_code');
const city = document.querySelector('#city');
const buyBtn = document.querySelector('.buy-card__btn');


form.addEventListener("submit", checkForm);
formLog.addEventListener("submit", checkLog);
formBuyCard.addEventListener("submit", checkBuyCard);

function checkForm(event) {
    if (!email.validity.valid || !password.validity.valid || !firstName.validity.valid || !lastName.validity.valid) {
        event.preventDefault();
    }
    else {
        formUser['card_number'] = createCardNumber();
        inputs.forEach((input) => {
            let id = input.id;
            let value = input.value;
            formUser[id] = value;
        });
        localStorage.setItem('user', JSON.stringify(formUser));
        event.preventDefault();
        showInitials();
        closeElement();
        form.reset();
        regUser = JSON.parse(localStorage.getItem('user'));
    }
};

function checkLog(event) {
    if (!mail.validity.valid || !passwordLog.validity.valid) {
        event.preventDefault();
    }
    else {
        let userParse = JSON.parse(localStorage.getItem('user'));
        if ((mail.value == userParse.email || mail.value == userParse.card_number) && passwordLog.value == userParse.password) {
            event.preventDefault();
            showInitials();
            closeElement();
            formLog.reset();
            authUser = userParse;
            showYourLibraryCard();
        }
    }
};

function checkBuyCard(event) {
    let userParse = JSON.parse(localStorage.getItem('user'));
        if (!bankCardNumber.validity.valid || !cvc.validity.valid || !cardHolder.validity.valid || !postCode.validity.valid || !city.validity.valid) {
            event.preventDefault();
        }
        else {
            event.preventDefault();
            closeElement();
            formBuyCard.reset();
            cardHave = userParse;
        }
};

const initials = document.querySelector('.initials');
const imgUser = document.querySelector('.header__icon');

function showInitials() {
    let formParse = JSON.parse(localStorage.getItem('user'));
    let nameLarge = formParse.first_name[0].toUpperCase();
    let lastNameLarge = formParse.last_name[0].toUpperCase();
    let fName = formParse.first_name;
    let lName = formParse.last_name;
    let numberCard = formParse.card_number;
    initials.textContent = `${nameLarge}${lastNameLarge}`;
    imgUser.classList.add('hidden');
    initials.classList.remove('hidden');
    initials.setAttribute('title', `${fName} ${lName}`);
    nameLastName.setAttribute('placeholder', `${fName} ${lName}`);
    cardNumber.setAttribute('placeholder', `${numberCard}`);
    if (myProfile.classList.contains('showModal')) {
        let firstName = formParse.first_name;
        let lastName = formParse.last_name;
        textInitials.textContent = `${nameLarge}${lastNameLarge}`;
        profileUserName.textContent = `${firstName} ${lastName}`;
    };
};

function createCardNumber() {
    let card = '';

    for (let i = 0; i < 9; i++) {
        card += Math.floor(Math.random() * 16)
            .toString(16)
            .toUpperCase();
    };
    return card;
};

const inpName = document.querySelector('.library--inp-name');
const inpCard = document.querySelector('.library--inp-card');
const btnCheck = document.querySelector('.btn--check');
const panelInfo = document.querySelector('.panel-info');

btnCheck.addEventListener('click', () => {
    if (regUser !== null && authUser === null) {
        showInfoPanel();
    }
});

function showInfoPanel() {
    let formParse = JSON.parse(localStorage.getItem('user'));
    if (inpName.value == formParse.first_name && inpCard.value == formParse.card_number) {
        btnCheck.classList.add('hidden');
        panelInfo.classList.toggle('hidden');
        panelInfo.classList.add('library-card__icons');
        setTimeout(() => {
            btnCheck.classList.remove('hidden');
            panelInfo.classList.toggle('hidden');
            panelInfo.classList.remove('library-card__icons');
        }, 10000);
    }
    inpName.value = '';
    inpCard.value = '';
};

const counterVisits = document.querySelector('.library--visits');
const counterBooks = document.querySelector('.library--books');
const myProfileCountVisit = document.querySelector('.my-profile--count-visits');
const myProfileCountBook = document.querySelector('.my-profile--count-books');
const yourCardCountVisit = document.querySelector('.your-card--count-visit');
const yourCardCountBooks = document.querySelector('.your-card--count-books');
let bookCounter = 0;


// function countVisit() {
if (localStorage.getItem('visitCounter') === null) {
    localStorage.setItem('visitCounter', '1');
    counterVisits.textContent = '1';
    myProfileCountVisit.textContent = '1';
    yourCardCountVisit.textContent = '1';
}
else {
    let visitCounter = parseInt(localStorage.getItem('visitCounter'));
    visitCounter++;
    localStorage.setItem('visitCounter', JSON.stringify(visitCounter));
    counterVisits.textContent = JSON.parse(localStorage.getItem('visitCounter'));
    myProfileCountVisit.textContent = JSON.parse(localStorage.getItem('visitCounter'));
    yourCardCountVisit.textContent = JSON.parse(localStorage.getItem('visitCounter'));
}
// }








function increaseCounter() {
    if (bookCounter < 16) {
        bookCounter++;
        updateCounter();
    }
};

function updateCounter() {
    counterBooks.textContent = bookCounter;
    myProfileCountBook.textContent = bookCounter;
    yourCardCountBooks.textContent = bookCounter;
}


