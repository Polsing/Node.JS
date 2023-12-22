function togglePassword(){
    var checkbox = document.getElementById("gridCheck1");
    var passwordInput = document.getElementById("inputPassword3");
    passwordInput.type = checkbox.checked ? "text" : "password";
}