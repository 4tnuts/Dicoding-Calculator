const changeThemeBtn = document.getElementsByClassName("change-theme");
const screenCalc = document.querySelectorAll(".calculator-screen > p");
const numberButtons = document.querySelectorAll(".number");
const aritmethicButtons = document.querySelectorAll(".aritmethic");
const bodyElement = document.body;
let aritClicked = 0;

const calculate = () => {
  let numbers = screenCalc[0].textContent.split(/[+x/-]+/g);
  let operators = screenCalc[0].textContent.split(/[0-9]+/g).filter(Boolean);
};

aritmethicButtons.forEach((el, key) => {
  el.onclick = () => {
    if (el.textContent === "AC") {
      return (screenCalc[0].textContent = "");
    }

    if (aritClicked == 0 && screenCalc[0].textContent != "") {
      if (el.textContent === "=") {
        aritClicked = 0;
        return calculate();
      } else if (el.textContent === "+" || "-" || "/" || "x") {
        aritClicked = 1;
        return (screenCalc[0].textContent += `${el.textContent}`);
      }
    }
    return console.log("cant clikced twice");
  };
});

numberButtons.forEach((el, key) => {
  el.onclick = () => {
    aritClicked = 0;
    if (screenCalc[0].textContent === "0") {
      screenCalc[0].textContent = el.textContent;
    } else {
      screenCalc[0].textContent += el.textContent;
    }
  };
});

const changeTheme = () => {
  if (changeThemeBtn[0].textContent == "Change To Black") {
    changeThemeBtn[0].textContent = "Change To White";
    return bodyElement.classList.replace("light", "dark");
  }
  changeThemeBtn[0].textContent = "Change To Black";
  bodyElement.classList.replace("dark", "light");
};
