
const popup = document.getElementById("popupOverlay");
const openBtn = document.getElementById("openSearchPopup");
const searchImg = openBtn.querySelector("img");
console.log("desktop img is: " + searchImg);

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

window.addEventListener("resize", () => {
    if (window.innerWidth <= window.innerHeight) {
        searchImg.src = "../../Images/Navbar/burger.png"; // ✅ actually change the image
        console.log("search button img changed to: " + searchImg.src);
        console.log("Now in mobile view");
    } else {
        searchImg.src = "../../Images/Navbar/Icon.png"; // ✅ optional: revert in desktop
        console.log("search button img changed to: " + searchImg.src);
        console.log("Now in desktop view");
    }
});

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

searchBtn.addEventListener("click", function (event) {
    if (event) {
        // event.preventDefault()
        //stored_input = searchInput.value;
        var stored_input = searchInput.value.trim();
        if (stored_input)
        {
            localStorage.setItem("search_input", stored_input);
            window.location.href = "../Pages/Cart/Cart.html";
        }
    }

});
