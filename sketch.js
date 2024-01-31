function changeColourRandom(event) {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function createGrid(container, n) {
    for (let i = 0; i < n; ++i) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.style.display = "flex";
        row.style.justifyContent = "space-around";
        for (let j = 0; j < n; ++j) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.addEventListener("mouseover", changeColourRandom);
            box.addEventListener("mouseleave", changeColourRandom);
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function destroyChildren(container) {
    while (container.firstChild) {
        container.firstChild.remove();
    }
}

function promptUser() {
    console.log("HEEE")
    const size = Number(prompt("Enter a grid size between 1-100"));
    if (typeof size !== "number" || size < 1 || size > 100) {
        promptUser();
    }
    destroyChildren(container);
    createGrid(container, size);
}

const button = document.querySelector("button");
button.addEventListener("click", promptUser);
const container = document.querySelector("#container");

createGrid(container, 16);

