"use strict";
function clickMeButtonEventHandler() {
  console.log("clicked");
}
window.onLoad = function () {
  let button = document.getElementById("clickMeButton");
  button.onclick = clickMeButtonEventHandler;
};
