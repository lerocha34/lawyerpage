let menu = document.querySelector('.menu-mobile');
let active = false;


document.querySelector('.menu-mobile-button').addEventListener('click',()=>{
    if (active == false){
    menu.style.display = 'flex';
    active = true;
    } else {
        menu.style.display = 'none';
        active = false;
    }
})

document.querySelector('.close-menu').addEventListener('click', () => {
    
    menu.style.display = 'none';
});

document.querySelector('.submit').addEventListener('click',()=>{
    let name = document.querySelector('.main-area .name');
    let email = document.querySelector('.main-area .email');
    let phone = document.querySelector('.main-area .phone');
    let message = document.querySelector('.main-area textarea');

    name.value = '';
    email.value = '';
    phone.value = '';
    message.value = '';

    alert('Sua mensagem foi enviada');
})