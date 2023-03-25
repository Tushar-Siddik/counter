let count = 0;
function setCount() {
  document.getElementById("output").innerText = count;
}

function setInitialCount() {
  setCount();
}

function incrementCount() {
  if (count < 5) {
    count++;
    setCount();
  } else {
    alert("You have reached 5");
  }
}

function decrementCount() {
  if (count > 0) {
    count--;
    setCount();
  } else {
    alert("You have reached 0");
  }
}

setInitialCount();
