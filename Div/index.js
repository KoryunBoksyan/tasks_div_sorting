// number of divs
function checkInputNumber () {
    
    let num = +prompt("Enter the number of cubes");
    if (isNaN(num) || !Number.isInteger(num) || num <= 0 || num > 100) {
        alert("Wrong input number");
        return checkInputNumber();
    }

    return num;
};


const num = checkInputNumber();

console.log(num);

// color random 

const colorsList = [];

function randomColor() {
    const rgb = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;

    if (colorsList.indexOf(rgb) !== -1) {
        return randomColor();
    }

    colorsList.push(rgb);

    return rgb;

}

console.log(colorsList);


// creating div

function createDiv() {
    let div = document.createElement("div");
    div.className = "child";
    div.style.width = "24px";
    div.style.height = "24px";
    div.style.backgroundColor = randomColor();
    return div;
}

// appending
const parent = document.getElementById("parent");

for (let i = 0; i < num; i++) {
    parent.appendChild(createDiv());
}


