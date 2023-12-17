const iconToggle=document.querySelector('.toggle_icon');
const navbarMenu=document.querySelector('.menu');
const menuLink=document.querySelector('.menu_link');
const iconClose=document.querySelector('.close_icon');

iconToggle.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('active');
});

iconClose.addEventListener('click',()=>{
    navbarMenu.classList.toggle('active');
})

menuLink.forEach((menuLink)=>{
    menuLink.addEventListener('click',()=>{
        navbarMenu.classList.remove('active')
    })
})


