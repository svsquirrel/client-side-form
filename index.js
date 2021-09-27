
const pagecontent = document.querySelector('.page-content');
const form = document.querySelector('.existing-user');
const about = document.querySelector('.about-page');
    about.style.display = 'none';
const shop = document.querySelector('.shop-page');
    shop.style.display = 'none';
const contact = document.querySelector('.contact-page');
    contact.style.display = 'none';
const createform = document.querySelector('.new-user');

const create = document.querySelector('.create-account');
    create.addEventListener('click', () =>{
        displayPage(createform);
    });
const login = document.querySelector('.login');
    login.addEventListener('click', () =>{
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

function displayPage(page){
   const items = document.querySelectorAll('.pageitem');
        
    if (page.style.display === 'none' ){
        items.forEach(item => {
            item.style.display = 'none';
        })
        page.style.display = 'block';
    } else {
        page.style.display = 'none';
    }
}

