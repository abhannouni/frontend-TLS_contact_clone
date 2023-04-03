var firstButton = document.querySelector(".first");
var secondButton = document.querySelector(".second");
var input = document.querySelector("input");
var name = document.querySelector(".name");
var more = document.querySelector(".more");
var yourname = document.querySelector(".yourname");
var reset = document.querySelector(".reset");
var ctr = document.querySelector(".container");

firstButton.addEventListener("click", function(e){
  this.innerText = "Saving...";
  setTimeout(function() {
    ctr.classList.add("center", "slider-two-active");
    ctr.classList.remove("full", "slider-one-active");
  }, 900);
  e.preventDefault();
});

secondButton.addEventListener("click", function(e){
  this.innerText = "Saving...";
  setTimeout(function() {
    ctr.classList.add("full", "slider-three-active");
    ctr.classList.remove("center", "slider-two-active", "slider-one-active");
    name = name.value;
    if(name == "") {
      yourname.innerHTML = "Anonymous!";
    } else {
      yourname.innerHTML = name + "!";
    }
  }, 900);
  e.preventDefault();
});

// copy
function balapaCop(text, color) {
  console.log(text, color);
}
balapaCop("Step by Step Form", "#999");
