const input = document.querySelector("input");

const h3 = document.createElement("h3");
h3.textContent = "Please enter your age and press the button.";
document.body.prepend(h3);

input.addEventListener("keyup", (event) => {
  const userInput = event.target.value; // why not input.value?
  button.addEventListener("click", function () {
    //need to add input validity conditions!
    answer.textContent = userInput > 18 ? "you can drink appear" : "you’re too young";
  });
});

const button = document.querySelector("button");
const answer = document.createElement("h3");
document.body.appendChild(answer);
