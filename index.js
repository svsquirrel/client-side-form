const content = document.querySelector('.content')
const form = document.querySelector('.formContainer');

const existingform = document.querySelector('.existing-user');
//form.addEventListener('click', () => form.style.display='none');

const login = document.querySelector('.login');
    login.addEventListener('click', () =>{
        clearContent('.content');
        existingform.style.display='block';
    });
 const create = document.querySelector('.create-account');
     create.addEventListener('click', () =>{
        clearContent('.content');
        const createform = document.querySelector('.new-user');
        createform.style.display='block';
     });

const about = document.querySelector('.about')
    about.addEventListener('click', () => {
        clearContent('.content');
       content.textContent = 'About';
    });
const shop = document.querySelector('.shop')
    shop.addEventListener('click', () => {
        clearContent('.content');
        content.textContent = 'Shop';
    });
const contact = document.querySelector('.contact')
    contact.addEventListener('click', () => {
        clearContent('.content');
        content.textContent = 'Contact';
    });

function clearContent(element){
    document.querySelector(element).innerHTML = '';
}   


