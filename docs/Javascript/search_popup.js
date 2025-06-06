
const popup = document.getElementById("popupOverlay");
const openBtn = document.getElementById("openSearchPopup");
const searchImg = openBtn.querySelector("img");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

window.addEventListener("DOMContentLoaded", (BurgerMenu));
window.addEventListener("resize", (BurgerMenu));

// on mobile, the search icon is repurposed into the burger menu, acting as navigation
function BurgerMenu() {
    if (window.innerWidth <= window.innerHeight) {
        searchImg.src = "../../Images/Navbar/burger.png"; // ✅ actually change the image
    } else {
        searchImg.src = "../../Images/Navbar/Icon.png"; // ✅ optional: revert in desktop
    }
}

// opens search menu
openBtn.onclick = () => {
    popup.style.display = "flex";
};

// closes search menu
popup.onclick = () => {
    searchInput.value = "";
    popup.style.display = "none";
    searchBtn.style.visibility = "hidden";
};

// if key ENTER clicked, turns search button visible
searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchBtn.style.visibility = "visible";
    }
});

// on click of search button, saves search input to local storage
searchBtn.addEventListener("click", function (event) {
    if (event) {
        var stored_input = searchInput.value.trim();
        if (stored_input)
        {
            localStorage.setItem("search_input", stored_input);
        }
    }

});
