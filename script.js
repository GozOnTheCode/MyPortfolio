function openNav() {
    document.getElementById("myNav").style.width = "100%";
}


function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
    

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
}



let links = Array.from(document.querySelectorAll("a"));


links.forEach(link => {
    link.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
    });

    link.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
    });
});



const btnservice = document.querySelector(".btnservice");
const box7 = document.querySelector(".box-7");

btnservice.addEventListener("click", () => {
    box7.classList.toggle("visible");
})
