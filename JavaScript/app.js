let dropdownOpen = false;

document.getElementById("logoBar").onmouseover = function() {
    if (dropdownOpen) {
        // document.getElementsByClassName("testing")[0].style.display = "block";
        document.getElementById("yo").style.display = "block";
    }
}

document.getElementsByClassName("testing")[0].onmouseover = function() {
    dropdownOpen = true;
}

document.getElementById("yo").onmouseleave = function() {
    dropdownOpen = false;
    document.getElementById("yo").style.display = "";
}