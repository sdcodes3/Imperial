let type = "none";
// When create account is clicked from login page
function createAccount(){
    document.getElementById("profile").click();
    document.getElementById("createAccount").click();
    type = "acc";
}

// When login is clicked from create account
function login(){
    createAccount()
    type = "login"
}
// When Profile is clicked
function profile(){
    if(document.getElementById("collapseExample").classList.contains("show")){
        document.getElementById("searchIcon").click();
    }
    if(document.getElementById("collapseExample").classList.contains("show")){
        document.getElementById("searchIcon").click();
    }
    if(type == "acc"){
        document.getElementById("createAccount").click();
    }
    else if(type == "login" || type == "none"){
        document.getElementById("profile").click();
    }
    type = "none"
}

// When search icon is clicked
function search(){
    if(document.getElementById("collapseExample1").classList.contains("show") || document.getElementById("collapseExample2").classList.contains("show")){
        profile();
    }
}

const swiper1 = new Swiper('.swiperNav', {
    // Optional parameters
    loop: true,
  
    slidesPerView: 5,
    spaceBetween: 30,
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});