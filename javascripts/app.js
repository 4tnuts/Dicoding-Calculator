const changeThemeBtn = document.getElementsByClassName('change-theme');
console.log(changeThemeBtn)
const bodyElement = document.body;
changeTheme = () => {
    if(changeThemeBtn[0].textContent == "Change To Black"){
        changeThemeBtn[0].textContent = "Change To White";
        return bodyElement.classList.replace("light", "dark");
    }
    changeThemeBtn[0].textContent = "Change To Black";
    bodyElement.classList.replace("dark", 'light');
};
