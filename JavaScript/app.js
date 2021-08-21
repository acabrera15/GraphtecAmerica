let dropdownOpen = false;
const dropdownMenuArray = document.getElementsByClassName("dropdownMenuClose");
const toCloseMenu = document.getElementsByClassName("toCloseMenu");
let dropdownArrayNumber = null;

let mobileToggle = false;

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

function btnToggle(e) {
    const targetID = e.attributes[4].value.substring(1, e.attributes[4].value.length)
    document.getElementById(targetID).classList.toggle("show");
}

document.getElementById("menuIcon").ontouchend = function() {

    if (!mobileToggle) {
        document.getElementById('menuIcon').style.backgroundImage = "url('./exitMenu.svg')";
        mobileToggle = true;
    } else {
        document.getElementById('menuIcon').style.backgroundImage = "url('./toggler.svg')";
        mobileToggle = false;
    }

}