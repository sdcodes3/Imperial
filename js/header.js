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
    if(type == "acc"){
        document.getElementById("createAccount").click();
    }
    else if(type == "login" || type == "none"){
        document.getElementById("profile").click();
    }
    type = "none"
}