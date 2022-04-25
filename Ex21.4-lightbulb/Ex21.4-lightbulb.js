const light = document.querySelector("#light");
console.log(light.src);
light.addEventListener("click", function () {
  if (light.src.match("OFFbulb")) {
    light.src = "/Ex21.4-lightbulb/images/ONbulb.jpg";
    console.log(light);
  } else {
    light.src = "/Ex21.4-lightbulb/images/OFFbulb.jpg";
    console.log(light);
  }
});

// function changeImage() {
//   if (light.src === "./images/OFFbulb.jpg") {
//     light.src = "./images/OFFbulb.jpg";
//     console.log(light);
//   } else {
//     light.src = "./images/OFFbulb.jpg";
//     console.log(light);
//   }
// }
