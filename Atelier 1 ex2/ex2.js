function changeColor() {
    const color=document.getElementById('color');
    const paragraph=document.getElementById('paragraph');
    const titre=document.getElementById('titre');
    titre.style.color=color.value;
    paragraph.style.color=color.value;
}

function changeFontSize() {
    const size=document.getElementById('size');
    const paragraph=document.getElementById('paragraph');
    const titre=document.getElementById('titre');
    titre.style.fontSize=size.value+'px';
    paragraph.style.fontSize=size.value+'px';
}

function changeFontFamily() {
    const font=document.getElementById('font');
    const paragraph=document.getElementById('paragraph');
    const titre=document.getElementById('titre');
    titre.style.fontFamily=font.value;
    paragraph.style.fontFamily=font.value;
}

function changeText() {
    const texte=document.getElementById('texte');
    const paragraph=document.getElementById('paragraph');
    paragraph.innerText=texte.value;
}