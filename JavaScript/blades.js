function changeMedia(t) {
    if (t.id === "media1") {
        document.getElementById("bottomRightImage").src = "./assets/images/Desktop/Blades images/CB09UB.png";
        document.getElementById("bottomRightImage").style.bottom = 0;
        document.getElementById("buyBar").style.bottom = 0;
        document.getElementById("bottomRightheader").innerHTML = "CB09UB";
        document.getElementById("compCutter").src = "./assets/images/Desktop/Blades images/BlueComp.png";
    } else if (t.id === "media2") {
        document.getElementById("bottomRightImage").src = "./assets/images/Desktop/Blades images/CB09UBK60.png";
        document.getElementById("bottomRightImage").style.bottom = 0;
        document.getElementById("buyBar").style.bottom = 0;
        document.getElementById("bottomRightheader").innerHTML = "CB09UB-K60";
        document.getElementById("compCutter").src = "./assets/images/Desktop/Blades images/BlueComp.png";

    } else if (t.id === "media3") {
        document.getElementById("bottomRightImage").src = "./assets/images/Desktop/Blades images/CB15U.png";
        document.getElementById("bottomRightImage").style.bottom = 0;
        document.getElementById("buyBar").style.bottom = 0;
        document.getElementById("bottomRightheader").innerHTML = "CB15U";
        document.getElementById("compCutter").src = "./assets/images/Desktop/Blades images/RedCompatible.png";


    } else if (t.id === "media4") {
        document.getElementById("bottomRightImage").src = "./assets/images/Desktop/Blades images/CB15Uk30.png";
        document.getElementById("bottomRightImage").style.bottom = 0;
        document.getElementById("buyBar").style.bottom = 0;
        document.getElementById("bottomRightheader").innerHTML = "CB15-K30";
        document.getElementById("compCutter").src = "./assets/images/Desktop/Blades images/RedCompatible.png";


    } else if (t.id === "media5") {
        document.getElementById("bottomRightImage").src = "./assets/images/Desktop/Blades images/CB15UA.png";
        document.getElementById("bottomRightImage").style.bottom = 0;
        document.getElementById("buyBar").style.bottom = 0;
        document.getElementById("bottomRightheader").innerHTML = "CB15UA";
        document.getElementById("compCutter").src = "./assets/images/Desktop/Blades images/RedCompatible.png";


    } else if (t.id === "media6") {
        document.getElementById("bottomRightImage").src = "./assets/images/Desktop/Blades images/CB15UAk30.png";
        document.getElementById("bottomRightImage").style.bottom = 0;
        document.getElementById("buyBar").style.bottom = 0;
        document.getElementById("bottomRightheader").innerHTML = "CB15UA-K30";
        document.getElementById("compCutter").src = "./assets/images/Desktop/Blades images/RedCompatible.png";


    }
}

//move to he blade holders
function bladeHolderClick() {
    document.getElementById("rightColStyle").innerHTML = "<img id='cutterHeaderImage'src = './assets/images/Desktop/Blades images/FC9000Title.png' / >";
    document.getElementById("rightColStyle").innerHTML += "<div id='bladeHolderHeader' >BLADE HOLDERS</div>";
    document.getElementById("rightColStyle").innerHTML += "<img id='holderImage' src='./assets/images/Desktop/Blades images/BladeHolders.png' />";
    document.getElementById("rightColStyle").innerHTML += `
        <div class='row' style="height: 50%; cursor:pointer; opacity: 0.5; position:relative; bottom: 38%; margin:0">
            <div class='col-3' onclick='changeBladeHolders(this)' id='holder1'></div>
            <div class='col-3' onclick='changeBladeHolders(this)' id='holder2'></div>
            <div class='col-3' onclick='changeBladeHolders(this)' id='holder3'></div>
            <div class='col-3' onclick='changeBladeHolders(this)' id='holder4'></div>
        </div>
    `
    document.getElementById("rightColStyle").style.backgroundImage = "url('')";

    document.getElementById("bottomRightheader").innerHTML = "PHPP33-CB09N-HS"
    document.getElementById("bottomRightImage").src = "./assets/images/Desktop/Blades images/PHP33CB09NHS.png";

    document.getElementById("bottomRightImage").style.zIndex = -1
}


//moving back to the blades page
function showBlades() {
    document.getElementById("rightColStyle").innerHTML = ` <div class="row mediaRowStyles" id="media1" onclick="changeMedia(this)"></div>
    <div class="row mediaRowStyles" id="media2" onclick="changeMedia(this)"></div>
    <div class="row mediaRowStyles" id="media3" onclick="changeMedia(this)"></div>
    <div class="row mediaRowStyles" id="media4" onclick="changeMedia(this)"></div>
    <div class="row mediaRowStyles" id="media5" onclick="changeMedia(this)"></div>
    <div class="row mediaRowStyles" id="media6" onclick="changeMedia(this)"></div>
    `;
    document.getElementById("rightColStyle").style.backgroundImage = "url('./assets/images/Desktop/Blades\ images/MaterialChart.png')";

    document.getElementById("bottomRightheader").innerHTML = '';
    document.getElementById("bottomRightImage").src = "./assets/images/Desktop/Blades images/CrossCutter.png";
    document.getElementById("bottomRightImage").style.zIndex = 0


}

function changeBladeHolders(t) {
    if (t.id === 'holder1') {
        document.getElementById("bottomRightImage").src = "./assets/images/Desktop/Blades images/PHP33CB09NHS.png";
        document.getElementById("bottomRightheader").innerHTML = "PHPP33-CB09N-HS"

    } else if (t.id === 'holder2') {
        document.getElementById("bottomRightImage").src = "./assets/images/Desktop/Blades images/PHP33CB015NHS.png";
        document.getElementById("bottomRightheader").innerHTML = "PHPP33-CB15N-HS"

    } else if (t.id === 'holder3') {
        document.getElementById("bottomRightImage").src = "./assets/images/Desktop/Blades images/PHP35cb09hs.png";
        document.getElementById("bottomRightheader").innerHTML = "PHPP35-CB09-HS"

    } else if (t.id === 'holder4') {
        document.getElementById("bottomRightImage").src = "./assets/images/Desktop/Blades images/PHP35CB15HS.png";
        document.getElementById("bottomRightheader").innerHTML = "PHPP35-CB15-HS"

    }
}