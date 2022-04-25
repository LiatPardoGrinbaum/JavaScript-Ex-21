const btn1 = document.querySelector(".btn1"); // +
const btn2 = document.querySelector(".btn2"); // -
const p = document.querySelector("p");

const buttons = [btn1, btn2];

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    changeFontSize(event.target.textContent);
    // console.log(event.target.textContent);
  });
});

function changeFontSize(btnSign) {
  let fontSize = getComputedStyle(p).getPropertyValue("font-size"); //string
  fontSize = parseFloat(fontSize); //works with parseInt too, convert into number. this is the current font size
  if (btnSign === "+" && fontSize < 100) {
    p.style.fontSize = fontSize + 5 + "px"; //now it's a string
  } else {
    fontSize;
  }
  if (btnSign === "-" && fontSize > 6) {
    p.style.fontSize = fontSize - 5 + "px";
  } else {
    fontSize;
  }
}
