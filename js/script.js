console.log("Cześć!");

let removeHeaderButton = document.querySelector(".js-removeHeaderButton");
let personTitle = document.querySelector(".personTitle");

removeHeaderButton.addEventListener("click", () => {
    personTitle.remove();
});

let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
let body = document.querySelector(".js-body")
let backgroundName = document.querySelector(".js-backgroundName");

changeBackgroundButton.addEventListener("click", () => {

    body.classList.toggle("body--pinkBackground");

    backgroundName.innerText = body.classList.contains("body--pinkBackground") ? "ciemne" : "jasne";
});

