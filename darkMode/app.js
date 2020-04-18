const moonPath = "M16 31C16 15.536 28.5 2 28.5 0.5C13.036 0.5 0.5 13.036 0.5 28.5C0.5 43.964 13.036 56.5 28.5 56.5C28.5 56.5 16 46.464 16 31Z";
const sunPath = "M56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56C43.464 56 56 43.464 56 28Z";

const darkMode = document.querySelector("#darkMode");
let toggle = false;

darkMode.addEventListener("click", () => {
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });
    timeline.add({
        targets: ".sun",
        d: [
            {value: toggle ? sunPath : moonPath}
        ]
    })
        .add({
            targets: '#darkMode',
            rotate: toggle ? 0 : 320
        }, "-= 350")
        .add({
            targets: "section",
            backgroundColor: toggle ? "rgb(199,199,199)" : "rgb(22,22,22)",
            color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
        }, "-= 700")



    if (!toggle) {
        toggle = true;
        document.getElementsByTagName("h1")[0].innerHTML = "Dark Mode";
    } else {
        toggle = false;
        document.getElementsByTagName("h1")[0].innerHTML = "Light Mode";
    }
});