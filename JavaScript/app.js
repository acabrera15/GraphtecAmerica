let dropdownOpen = false;
const dropdownMenuArray = document.getElementsByClassName("dropdownMenuClose");
const toCloseMenu = document.getElementsByClassName("toCloseMenu");
let dropdownArrayNumber = null;

//does not close on logo
document.getElementById("logoBar").onmouseover = function() {
    if (dropdownOpen) {

        toCloseMenu[dropdownArrayNumber].style.display = "block";
    }
}

//set move over
for (let i = 0; i < dropdownMenuArray.length; i++) {
    dropdownMenuArray[i].onmouseover = function() {
        dropdownOpen = true;
        dropdownArrayNumber = i;
    }
}

//sets mouse leave
for (let i = 0; i < toCloseMenu.length; i++) {
    toCloseMenu[i].onmouseleave = function() {
        dropdownOpen = false;
        toCloseMenu[i].style.display = "";
    }
}

document.getElementById("testing").addEventListener('click', function(event) {
    event.stopPropagation();
});

function btnToggle() {
    document.getElementById("yo").classList.toggle("show");
}