const states = ["Uttar Pradesh", "Delhi", 1947, "Himanchal Pradesh"];

for (let i = 0; i <= states.length; i++) {
  // = will give undefined at last

  console.log(states[i]);
}

alert("new");

for (let i = 0; i <= states.length; i++) {
  if (typeof states[i] !== "string") continue;
  console.log(states[i]);
}

alert("new");

for (let i = 0; i <= states.length; i++) {
  if (typeof states[i] === "string") continue;
  console.log(states[i]);
}

alert("new");

for (let i = 0; i <= states.length; i++) {
  if (typeof states[i] !== "string") break;
  console.log(states[i]);
}
