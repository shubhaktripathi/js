function clickHandle(s) {
  s.innerHTML = "Hey  Shubham";
}

document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
