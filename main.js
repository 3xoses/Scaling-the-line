document.body.style.height = 1000 + "px";
let size = 100;
let grow = true;
const line = document.createElement('div');
document.body.appendChild(line);
line.style.width = 100 + "%";
line.style.top = 0
line.style.left = 0
line.style.backgroundColor = "green";
line.style.height = size + "px"

const changeHeight = function () {
    if (size > window.innerWidth / 2) {
        grow = false;
    } 
    else if (size <= 0) {
        grow = true;
        line.style.backgroundColor = "green";
    }

    if (grow) {
        size += 10;
    }
    else {
        size -= 10;
        line.style.backgroundColor = "red";
    }

    line.style.height = size + "px"; 
};

window.addEventListener("scroll", changeHeight);