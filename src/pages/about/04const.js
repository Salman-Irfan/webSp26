import { theme } from "../../constants/theme.js";
import { exercises } from "../../database/exercises.js";

console.log(exercises);

// if (dark) {
//   console.log("Dark mode is on");
// } else {
//   console.log("Dark mode is off");
// }

// ternary operator
// dark ? console.log("Dark mode is on") : console.log("Dark mode is off");


theme === "dark"
  ? console.log("Dark mode is on")
  : console.log("Dark mode is off");

// one id select
const one = document.getElementById("one");
// apply the ternary operator to change the background and text color with id "one"
theme === "dark"
  ? (one.innerHTML = "<p class='bg-green-500 text-white'>Dark mode is on</p>")
  : (one.innerHTML = "<p class='bg-white text-black'   >Dark mode is off</p>");
