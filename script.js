var debugInput = document.querySelector("input");

function toggleDebug(){
  document.body.classList.toggle("debug-on", debugInput.checked);
}

debugInput.addEventListener("click", toggleDebug);
