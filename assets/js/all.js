"use strict";

var rwdBtn = document.querySelector(".rwdBtn");
var navBar = document.querySelector(".navBar");
rwdBtn.addEventListener("click", function (e) {
  console.log(e.target.nodeName);

  if (e.target.nodeName === "I") {
    console.log("hello");
    navBar.classList.toggle("open");
  }
});
//# sourceMappingURL=all.js.map
