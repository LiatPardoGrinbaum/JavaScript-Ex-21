const input = document.querySelector("input");
const body = document.querySelector("body");
const button = document.querySelector("button");

input.addEventListener("keyup", (event) => {
  const userInput = event.target.value; //string- but im not sure I should convert to num
  ///***need to add condition- if the input isn't a number throw error message */
  button.addEventListener("click", function () {
    const smileysAmount = new Array(parseInt(userInput));
    const image = document.createElement("img");
    console.log(smileysAmount);
    for (let smiley of smileysAmount) {
      body.appendChild(image);
      image.src = "/Ex21.5-smiley/smiley.png";
      image.style.width = "70px";
    }
    image.innerHTML = ""; //not working- how can I clear the smilyesbefore submitting again?
  });
});
