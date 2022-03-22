// DROP DOWN JS FUNCTIONALITAY

const $dropDownActivator = document.querySelector("#drop-down");
const $dropDownMenu = document.querySelector(".drop-down_menu");

$dropDownActivator.addEventListener("mouseover", () => {
  $dropDownMenu.classList.toggle("active");
});
$dropDownMenu.addEventListener("mouseleave", () => {
  $dropDownMenu.classList.remove("active");
});
