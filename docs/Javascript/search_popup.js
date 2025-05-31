
const popup = document.getElementById("popupOverlay");
const openBtn = document.getElementById("openPopupBtn");

openBtn.onclick = () => {
  popup.style.display = "flex";
  console.log("button open: " + popup.style.display);
};

popup.onclick = () => {
  popup.style.display = "none";
  console.log("button closed: " + popup.style.display);
};
