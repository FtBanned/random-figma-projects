const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const loginButton = document.getElementById("loginButton");


function updateButtonColor() {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    
    if (emailValue !== "" && passwordValue !== "") {
        loginButton.style.backgroundColor = "#567af0";
        loginButton.style.color = "white";
    } else {
        loginButton.style.backgroundColor = "rgba(24, 119, 242, 0.36)";
        loginButton.style.color = "white"; 
    }
}


emailInput.addEventListener("input", updateButtonColor);
passwordInput.addEventListener("input", updateButtonColor);