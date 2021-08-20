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

//closes dropdown if over logo 
document.getElementById("videoBar").onmouseover = function() {
    console.log(dropdownOpen);
    console.log(toCloseMenu[dropdownArrayNumber].style)
    dropdownOpen = false;
    toCloseMenu[dropdownArrayNumber].style.display = "";
}