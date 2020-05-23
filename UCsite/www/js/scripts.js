function onOverlay() {
    document.getElementById("overlay").style.display = "block";
}

function offOverlay(e) {
    document.getElementById("overlay").style.display = "none";
}

function redirectToTextInput() {
  var value = document.getElementById("messageTextarea").value;
  document.getElementById("message").value = value;
}
