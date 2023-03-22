//mobile menue visible
const mobile_bar = document.querySelector(".mobile_bar");
mobile_bar.addEventListener("click", () => {
    document.querySelector(".main-menu").classList.toggle("open");
});