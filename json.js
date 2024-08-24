document.addEventListener("keydown", function (event) {
    const key = event.key;
    switch (key) {
        case "ArrowLeft":
            document.querySelector(".box2").classList.toggle("left");
            break;
        case "ArrowRight":
            document.querySelector(".box2").classList.toggle("right");
            break;
    }
});