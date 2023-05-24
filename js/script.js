{
    const welcome = () => {
        console.log("Cześć!");
    }
    welcome();

    let removeHeaderButton = document.querySelector(".js-removeHeaderButton");
    let personTitle = document.querySelector(".personTitle");

    removeHeaderButton.addEventListener("click", () => {
        personTitle.remove();
    });


    const toggleBackground = () => {
        const body = document.documentElement;
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









