import viewSlider from "./slider.js";
import viewMenu from "./menu.js";

const nameProjectSlider = document.querySelectorAll('.link-my-project');
const checkboxMenuAside = document.getElementById('checkbox-menu');

document.getElementById('menu').style.display = "none";
document.getElementById('advanced').style.display = "none";
document.getElementById('cv').style.display = "block";

document.addEventListener("click", function (e) {
  if (e.target.id != 'button-menu') {
    document.getElementById('menu').style.display = "none";
  }
  if (e.target.id === 'button-cv') {
    document.getElementById('advanced').style.display = "none";
    document.getElementById('cv').style.display = "block";
  }
  if (e.target.id === 'button-advanced') {
    document.getElementById('advanced').style.display = "block";
    document.getElementById('cv').style.display = "none";
  }
  if (e.target.id === 'button-menu') {
    viewMenu.showMenu();
  }
  if (e.target.id === 'left' || e.target.id === 'right') {
    setClickedImgSlider(e);
  }
  if (e.target.id !== 'checkbox-menu') {
    checkboxMenuAside.checked = false;
  }
});

for (let index = 0; index < nameProjectSlider.length; index++) {
  const element = nameProjectSlider[index];

  element.addEventListener('click',setClickedLinkSlider, false);
}

function setClickedImgSlider(e) {
  if (e.target.id === 'left') {
    viewSlider.left();
  }
  if (e.target.id === 'right') {
    viewSlider.right();
  }
}

function setClickedLinkSlider(e) {
  viewSlider.activeItem(e.target.id);
  viewSlider.showLinks(e);
  viewSlider.showImg(e);
}
