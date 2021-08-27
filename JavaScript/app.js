let dropdownOpen = false;
const dropdownMenuArray = document.getElementsByClassName("dropdownMenuClose");
const toCloseMenu = document.getElementsByClassName("toCloseMenu");
let dropdownArrayNumber = null;
let openDropdowns = [];
let highlightedItem = "";

let mobileToggle = false;

let sideDropExpanded = false;

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

//prevents the default toggle

function dontCollapse(e) {
    e.stopPropagation();
}


//shows the dropdown to toggle
function btnToggle(e) {
    const targetID = e.attributes[4].value
    console.log(e.attributes)
    document.getElementById(targetID).classList.toggle("show");
}

//changes the menu Icon to a close Icon
document.getElementById("menuIcon").ontouchstart = function() {


    if (!mobileToggle) {
        document.getElementById('menuIcon').style.backgroundImage = "url('./exitMenu.svg')";
        mobileToggle = true;
    } else {
        document.getElementById('menuIcon').style.backgroundImage = "url('./toggler.svg')";
        mobileToggle = false;
    }

}

const closeItems = function() {
    console.log('fjdklfjld;safkdsjafads', openDropdowns)

    if (openDropdowns.length > 0) {
        const len = openDropdowns.length;
        console.log('yesdfd')
        for (let i = len - 1; i >= 0; i--) {
            console.log('yee', openDropdowns)
            const toCollapse = document.getElementById(openDropdowns[i]).getAttribute("aria-controls");
            console.log(toCollapse)
            document.getElementById(toCollapse).classList.toggle("show");
            console.log(toCollapse)

            openDropdowns.pop(i);
        }
    };

}

const closeOtherDropdowns = function(e) {
    const divID = e.getAttribute("id");

    if (highlightedItem) {
        document.getElementById(highlightedItem).style.backgroundColor = "#D0D2E1";
        document.getElementById(highlightedItem).style.color = "#314083"
    }



    if (divID.substring(0, divID.length - 1) === "upper") {
        console.log("openDropdowns", openDropdowns);

        if (openDropdowns[1]) {
            const toCollapse = document.getElementById(openDropdowns[1]).getAttribute("aria-controls");
            document.getElementById(toCollapse).classList.toggle("show");
            openDropdowns.pop(1)
        }

        if (openDropdowns.length > 0) {
            if (openDropdowns[0] !== divID) {
                console.log('yee2')
                openDropdowns.forEach(dropdown => {
                    const toCollapse = document.getElementById(dropdown).getAttribute("aria-controls");
                    console.log(toCollapse)
                    console.log(document.getElementById(toCollapse).classList)
                    document.getElementById(toCollapse).classList.toggle("show");
                    openDropdowns[0] = divID;
                });
            } else {
                console.log('yee')

                openDropdowns.pop(0);
            }

        } else {
            openDropdowns.push(divID.substring(0, divID.length));
            console.log('yess ', openDropdowns)
        }

        //mid
    } else if (divID.substring(0, divID.length - 1) === 'mid') {
        console.log("opendropMid", divID);
        highlightedItem = (divID + "Label");

        document.getElementById((divID + "Label")).style.backgroundColor = "#6f77A9"
        document.getElementById((divID + "Label")).style.color = "#FFFFFF"


        if (openDropdowns.length !== 1) {
            console.log("not one")


            if (divID !== openDropdowns[1]) {
                for (i = 1; i < openDropdowns.length; i++) {
                    const toCollapse = document.getElementById(openDropdowns[i]).getAttribute("aria-controls");
                    console.log(toCollapse)
                    console.log(document.getElementById(toCollapse).classList)
                    document.getElementById(toCollapse).classList.toggle("show");
                    openDropdowns[1] = (divID.substring(0, divID.length));
                }
            } else {
                openDropdowns.pop(1)
            }

        } else {
            openDropdowns.push(divID.substring(0, divID.length));
            console.log('up')
        }
    } else {
        console.log('yp')
    }
}