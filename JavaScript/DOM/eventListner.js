document.getElementById("btn").addEventListener("mousemove", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

document.getElementById("btn1").addEventListener("click", function () {
  alert("Don't click me");
});

document.getElementById("btn2").addEventListener("click", handleclick);
document.getElementById("btn2").addEventListener("mousemove", handleclick1);

function handleclick() {
  alert("Good to see you");
}

function handleclick1() {
  document.getElementById("btn2").innerHTML = Date();
}
