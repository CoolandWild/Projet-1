function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("footer").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("footer").style.marginLeft = "0";
}

function openCat(catName, elmnt, color) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(catName).style.display = "block";

    elmnt.style.backgroundColor = color;
}

document.getElementById('downFaq').onclick = function changeContent(event) {
    event.preventDefault();
    document.getElementById('reponse1').style = 'display: flex';
    document.getElementById('upFaq').style = 'display: flex';
    document.getElementById('downFaq').style = 'display: none';
}

document.getElementById('upFaq').onclick = function changeContent(event) {
    event.preventDefault();
    document.getElementById('reponse1').style = 'display: none';
    document.getElementById('upFaq').style = 'display: none';
    document.getElementById('downFaq').style = 'display: flex';
}

document.getElementById('downFaq1').onclick = function changeContent(event) {
    event.preventDefault();
    document.getElementById('reponse2').style = 'display: flex';
    document.getElementById('upFaq1').style = 'display: flex';
    document.getElementById('downFaq1').style = 'display: none';
}

document.getElementById('upFaq1').onclick = function changeContent(event) {
    event.preventDefault();
    document.getElementById('reponse2').style = 'display: none';
    document.getElementById('upFaq1').style = 'display: none';
    document.getElementById('downFaq1').style = 'display: flex';
}

document.getElementById('downFaq2').onclick = function changeContent(event) {
    event.preventDefault();
    document.getElementById('reponse3').style = 'display: flex';
    document.getElementById('upFaq2').style = 'display: flex';
    document.getElementById('downFaq2').style = 'display: none';
}

document.getElementById('upFaq2').onclick = function changeContent(event) {
    event.preventDefault();
    document.getElementById('reponse3').style = 'display: none';
    document.getElementById('upFaq2').style = 'display: none';
    document.getElementById('downFaq2').style = 'display: flex';
}

document.getElementById('downFaq3').onclick = function changeContent(event) {
    event.preventDefault();
    document.getElementById('reponse4').style = 'display: flex';
    document.getElementById('upFaq3').style = 'display: flex';
    document.getElementById('downFaq3').style = 'display: none';
}

document.getElementById('upFaq3').onclick = function changeContent(event) {
    event.preventDefault();
    document.getElementById('reponse4').style = 'display: none';
    document.getElementById('upFaq3').style = 'display: none';
    document.getElementById('downFaq3').style = 'display: flex';
}

document.getElementById('downFaq4').onclick = function changeContent(event) {
    event.preventDefault();
    document.getElementById('reponse5').style = 'display: flex';
    document.getElementById('upFaq4').style = 'display: flex';
    document.getElementById('downFaq4').style = 'display: none';
}

document.getElementById('upFaq4').onclick = function changeContent(event) {
    event.preventDefault();
    document.getElementById('reponse5').style = 'display: none';
    document.getElementById('upFaq4').style = 'display: none';
    document.getElementById('downFaq4').style = 'display: flex';
}