 // Đóng mở Modal login
document.addEventListener("DOMContentLoaded", () => {

    // Mở Form Đăng ký
    var modalRegister = document.querySelector('.modal-register');
    var modalBodyRegister = document.querySelector('.modal__body-register');
    var modalCloseRegister = document.querySelector('.modal__close-register');

    function removemodalRegister() {
        modalRegister.classList.add('close');
    }

    function holdModal(event) {
        event.stopPropagation();
    }

    modalRegister.addEventListener('click', removemodalRegister);
    modalBodyRegister.addEventListener('click', holdModal);
    modalCloseRegister.addEventListener('click', removemodalRegister);
    
    document.querySelector('.info__notify-register').addEventListener("click", e => {
        e.preventDefault();
        modalRegister.classList.add("open");
        modalRegister.classList.remove("close");
    });

    document.querySelector('.info__notify-login').addEventListener("click", e => {
        e.preventDefault();
        modalLogin.classList.add("open");
        modalLogin.classList.remove("close");
    });

    // Mở Form Đăng ký/Đăng nhập cho rpsMobile
    document.querySelector('.info__notify-register-rpsMobile').addEventListener("click", e => {
        e.preventDefault();
        modalRegister.classList.add("open");
        modalRegister.classList.remove("close");
    });

    document.querySelector('.info__notify-login--rpsMobile').addEventListener("click", e => {
        e.preventDefault();
        modalLogin.classList.add("open");
        modalLogin.classList.remove("close");
    });

    // Mở Form Đăng nhập
    var modalLogin = document.querySelector('.modal-login');
    var modalBodyLogin = document.querySelector('.modal_body-login');
    var modalCloseLogin = document.querySelector('.modal__close-login');

    function removemodalLogin() {
        modalLogin.classList.add('close');
    }

    function holdModal(event) {
        event.stopPropagation();
    }

    modalLogin.addEventListener('click', removemodalLogin);
    modalBodyLogin.addEventListener('click', holdModal);
    modalCloseLogin.addEventListener('click', removemodalLogin);

    // Chuyển từ Form Đăng ký sang Form Đăng nhập
    document.querySelector('.js-auth__form-footer-register').addEventListener("click", e => {
        e.preventDefault();
        modalRegister.classList.remove("open");
        modalRegister.classList.add("close");
        modalLogin.classList.add("open");
        modalLogin.classList.remove("close");
    });

    // Chuyển từ Form Đăng nhập sang Form Đăng ký
    document.querySelector('.js-auth__form-footer-login').addEventListener("click", e => {
        e.preventDefault();
        modalLogin.classList.remove("open");
        modalLogin.classList.add("close");
        modalRegister.classList.add("open");
        modalRegister.classList.remove("close");
    });

    // Mở MobileMenu
    var nav = document.querySelector('.nav-first');
    
    document.querySelector('.nav-icon').addEventListener("click", e => {
        e.preventDefault();
        nav.classList.add("open");
    });
    
    
    // Tự động đóng khi chọn menu
    var menuItems = document.querySelectorAll('#nav li a[href*=]');
    console.log(menuItems);

});
var kichThuoc = document.getElementsByClassName("slippery_slider")[0].clientWidth; 
var ChuyenSlide = document.getElementsByClassName("contains_photos")[0];  
var Chuyen = 0;
function Next(){ 
 Chuyen  +=  kichThuoc;
console.log(kichThuoc);
console.log(Chuyen) ;
 ChuyenSlide.style.marginleft = '-' + Chuyen + 'px';

}