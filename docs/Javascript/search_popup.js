
const popup = document.getElementById("popupOverlay");
const openBtn = document.getElementById("openPopupBtn");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");


openBtn.onclick = () => {
    popup.style.display = "flex";
};

popup.onclick = () => {
    searchInput.value = "";
    popup.style.display = "none";
    searchBtn.style.visibility = "hidden";
};

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchBtn.style.visibility = "visible";
    }
});