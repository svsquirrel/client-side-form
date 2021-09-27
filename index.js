
const pagecontent = document.querySelector('.page-content');
const form = document.querySelector('.existing-user');
const about = document.querySelector('.about-page');
const shop = document.querySelector('.shop-page');
const contact = document.querySelector('.contact-page');
const createform = document.querySelector('.new-user');
const items = document.querySelectorAll('.pageitem');

const create = document.querySelector('.create-account');
create.addEventListener('click', () => {
    displayPage(createform);
});
const login = document.querySelector('.login');
login.addEventListener('click', () => {
    displayPage(form);
});
const navabout = document.querySelector('.about')
navabout.addEventListener('click', () => {
    displayPage(about);
});
const navshop = document.querySelector('.shop')
navshop.addEventListener('click', () => {
    displayPage(shop);
});
const navcontact = document.querySelector('.contact')
navcontact.addEventListener('click', () => {
    displayPage(contact);
});
const returnbtn = document.querySelector('#return');
returnbtn.addEventListener('click', () => {
    displayPage(shop);
    console.log('clock');
})
function displayPage(page) {

    if (page.style.display === 'none') {
        items.forEach(item => {
            item.style.display = 'none';
        })
        page.style.display = 'block';
    } else {
        page.style.display = 'none';
    }
}

function loadPage() {
    items.forEach(item => {
        item.style.display = 'none';
    })
}
loadPage()