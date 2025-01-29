const dropDownButton = document.querySelector(".dropdown-menu-button");
dropDownButton.addEventListener("click", function displayDropdownMenu() {
    document.getElementById("myDropdown").classList.toggle("visible");
});

window.addEventListener("click", function hideDropDownMenu(event) {
    if (event.target !== dropDownButton) {
      document.getElementById("myDropdown").classList.remove("visible");
    }
  });