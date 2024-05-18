const hamburgerMenuBtn = document.getElementById("hamburgerMenu");
const navLinks = document.getElementById("links");
let open=false;
hamburgerMenuBtn.addEventListener('click',()=>{
    if(!open){
        navLinks.style.bottom="-200%";
        open=true;
        hamburgerMenuBtn.classList.add('openMenu');
    }else{
        navLinks.style.bottom="100%";
        open=false;
        hamburgerMenuBtn.classList.remove('openMenu');
    }
});
window.addEventListener('resize',()=>{
    if(window.innerWidth>768){
        navLinks.style.height='fit-content';
        navLinks.style.visibility='visible';
        navLinks.style.opacity='1';
        console.log("size increased");
    }
})