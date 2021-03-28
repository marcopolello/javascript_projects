const colors = [
  "green", "red", "rgba(133,122,200)", "#f15025",
  "blue", "yellow"
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}


// "#DFFF00", "#FFBF00", "#FF7F50", "#DE3163",
// "#9FE2BF", "#40E0D0", "#6495ED", "#CCCCFF",
