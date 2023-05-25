{
    const welcome = () => {
        console.log("Cześć!");
    }
    welcome();

    const removeHeaderButton = document.querySelector(".js-removeHeaderButton");
    const personTitle = document.querySelector(".personTitle");

    removeHeaderButton.addEventListener("click", () => {
        personTitle.remove();
    });


    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const backgroundName = document.querySelector(".js-backgroundName");

        body.classList.toggle("body--pinkBackground");
        backgroundName.innerText = body.classList.contains("body--pinkBackground") ? "ciemne" : "jasne";
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", toggleBackground);
    };

    init();
}









