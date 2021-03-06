let dropdownOpen = false;
const dropdownMenuArray = document.getElementsByClassName("dropdownMenuClose");
const toCloseMenu = document.getElementsByClassName("toCloseMenu");
let dropdownArrayNumber = null;
let openDropdowns = [];
let highlightedItem = "";
var appended = false;

//for resize
let intViewportWidth = window.innerWidth;
const widthOutput = document.querySelector('#width');


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

    console.log()

    const targetID = e.attributes["data-target"].value

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
    console.log('here', divID)

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
        console.log(divID)
    }
}

const smallViewClick = function(e) {
    closeOtherDropdowns(e);
    btnToggle(e);
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById('mobile').style = "background-image: url('./back.png');  background-repeat: no-repeat;  background-position: center;  background-size: cover; height: 100%;  width: 100%; "
}


function dropdownChanges() {
    const accessoryThirdCol = document.getElementById('accessoryThirdCol');
    const accessoryThirdColHeader = document.getElementById("accessoryThirdColHeader");
    const accessorySecondCol = document.getElementById("accessorySecondCol");

    const supportThirdColHeader = document.getElementById("supportThirdColHeader");
    const supportSecondCol = document.getElementById("supportSecondCol");
    const supportThirdCol = document.getElementById("supportThirdCol");

    const dropdownHeaders = document.getElementsByClassName("dropdownHeader");

    if (intViewportWidth < 1120) {
        if (appended === false) {

            //for accessory drop
            let colToAdd = document.createElement('div');
            colToAdd.setAttribute('id', "tempAccessoryCol");
            colToAdd.innerHTML = accessoryThirdCol.innerHTML;
            accessoryThirdCol.style = "display: none";
            accessoryThirdColHeader.style = "display: none";
            console.log(colToAdd.toString)
            accessorySecondCol.innerHTML += colToAdd.outerHTML;
            accessorySecondCol.style = "right: 10px";
            document.getElementById('accessoryMegamenu').style = "width: 525px";


            //for support drop
            let supportColToAdd = document.createElement('div');
            supportColToAdd.setAttribute('id', "tempSupportCol");
            supportColToAdd.innerHTML = supportThirdCol.innerHTML;
            supportThirdCol.style = "display: none";
            supportThirdColHeader.style = "display: none";
            console.log(colToAdd.toString)
            supportSecondCol.innerHTML += supportColToAdd.outerHTML;
            supportSecondCol.style = "right: 10px";
            document.getElementById("supportDropdown").style = "width: 525px";

            for (let i = 0; i < dropdownHeaders.length; i++) {
                dropdownHeaders[i].style = "width: 84%";
            }

            appended = true;

        }

    } else {
        console.log('yo')
            //accessory 
        document.getElementById('accessoryMegamenu').style = "width: 725px";
        document.getElementById("tempAccessoryCol").parentNode.removeChild(document.getElementById("tempAccessoryCol"));
        accessoryThirdCol.style = "display: block"
        accessoryThirdColHeader.style = "display: block"
        accessorySecondCol.style = "right: 0px";

        //support
        document.getElementById('supportDropdown').style = "width: 725px";
        document.getElementById("tempSupportCol").parentNode.removeChild(document.getElementById("tempSupportCol"));
        supportThirdCol.style = "display: block"
        supportThirdColHeader.style = "display: block"
        supportSecondCol.style = "right: 0px";

        for (let i = 0; i < dropdownHeaders.length; i++) {
            dropdownHeaders[i].style = "width: 60%";
        }

        appended = false
    }
}

if (intViewportWidth < 1120) {
    dropdownChanges();
}

//on resize window
function reportWindowSize() {
    intViewportWidth = window.innerWidth;
    dropdownChanges();
}

window.onresize = reportWindowSize;