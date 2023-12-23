const container = document.getElementById("grid-container");
const colorInput = document.getElementById("color-input");
const button = document.getElementById("button");
const resetButton = document.getElementById("reset-button");

function random(number) {
  return Math.floor(Math.random() * number + 1);
}

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener("mouseover", function bgChange() {
      const selectedColor = colorInput.value || getRandomColor();
      cell.style.backgroundColor = selectedColor;
    });
  }
}

function getRandomColor() {
  return "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
}

function changeSize() {
  let size = prompt("Enter a value between 0 to 101");
  container.innerHTML = "";
  if (0 < size && size <= 100) {
    makeRows(size, size);
  } else {
    makeRows(16, 16);
    alert("Please enter a value between 1 and 100");
  }
}

function resetGrid() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.style.backgroundColor = "";
  });
}

button.addEventListener("click", changeSize);
resetButton.addEventListener("click", resetGrid);

makeRows(16, 16);
