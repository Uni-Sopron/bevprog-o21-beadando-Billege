function kinemhagynam_tartalom () {
    let nev  = (document.getElementById("nev").value)
    document.getElementById("kinemhagynam_tartalom").innerHTML += "<li>"+ nev +"  ❤️"+"</li>"
    document.getElementById("nev").value=""
}

function csakkaloriategetnijovokpotolninem_tartalom () {
    let nev = (document.getElementById("nev").value)
    document.getElementById("csakkaloriategetnijovokpotolninem_tartalom").innerHTML += "<li>"+ nev + " 😮"+"</li>"
    document.getElementById("nev").value=""
}

function nemazenhetem_tartalom () {
    let nev = (document.getElementById("nev").value)
    document.getElementById("nemazenhetem_tartalom").innerHTML += "<li>"+ nev + " 😢"+"</li>"
    document.getElementById("nev").value=""
}
