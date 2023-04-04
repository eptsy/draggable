const tabsbox = document.querySelector(".tabs_box");
arrowIcons = document.querySelectorAll(".icon i");

function handleIcons() {
  let scrollValue = Math.round(tabsbox.scrollLeft);
  let maxScroll = tabsbox.scrollWidth - tabsbox.clientWidth;
  arrowIcons[0].parentElement.style.display = scrollValue > 0 ? "flex" : "none";
  arrowIcons[1].parentElement.style.display =
    maxScroll > scrollValue ? "flex" : "none";
}
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    tabsbox.scrollLeft += icon.id === "first" ? -350 : 350;
    setTimeout(handleIcons(), 50);
  });
});

let isDragging = false;
const dragging = (e) => {
  if (!isDragging) return;
  tabsbox.classList.add("dragging");
  tabsbox.scrollLeft -= e.movementX;
  handleIcons();
};

tabsbox.addEventListener("mousedown", () => {
  isDragging = true;
});

const dragStop = () => {
  tabsbox.classList.remove("dragging");
  isDragging = false;
};

tabsbox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
