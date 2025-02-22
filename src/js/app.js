function initGame() {
  const goblin = document.createElement("div");
  goblin.classList.add("goblin");  
  const cells = Array.from(document.querySelectorAll(".cell"));  

  if (cells.length < 2) {
    throw new Error("Need at least 2 cells to play the game");
  }

  function getRandomIndex(value) {
    const randomIndex = Math.floor(Math.random() * value);
    return randomIndex;
  }

  let currentIndex = getRandomIndex(cells.length);  

  function moveGoblin() {
    let newIndex;
    do {
      newIndex = getRandomIndex(cells.length);
    } while (newIndex === currentIndex);
    console.log(`Moving goblin from cell ${currentIndex} to cell ${newIndex}`);
    cells[currentIndex].innerHTML = "";
    cells[newIndex].appendChild(goblin);
    currentIndex = newIndex;
  }

  cells[currentIndex].appendChild(goblin);
  setInterval(moveGoblin, 1200);
}

// Экспортируем функцию, но не вызываем её
export { initGame };

// comment this to pass build
const unusedVariable = "variable";

// for demonstration purpose only
export default function demo(value) {
  return `Demo: ${value}`;
}

console.log("app.js included");