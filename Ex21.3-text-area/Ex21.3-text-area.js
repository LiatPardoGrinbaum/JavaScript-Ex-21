const textarea = document.querySelector("#textAreaId");
const btn = document.querySelector('input[type="submit"]');
const form = document.querySelector("form");
const body = document.querySelector("body");
let userInput = "";
const message = document.createElement("h3");
message.style.color = "red";

textarea.addEventListener("keyup", (event) => {
  btn.disabled = false;
  userInput = event.target.value;
  // console.log(userInput);
  btn.addEventListener("click", function () {
    if (userInput.length > 100) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
      message.textContent = "Please write 100 charecters or more before submit.";
      document.body.prepend(message);
    }
  });
});
