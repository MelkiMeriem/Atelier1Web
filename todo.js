

const nom=document.getElementById('name')
const content=document.getElementById('content')
const bouton=document.getElementById('bouton')


const liste=document.querySelector('ul')
bouton.addEventListener('click', function() {
    var newchore=document.createElement('li')
    newchore.innerText= nom.value + ':' + content.value +'  '
    if(nom.value!==''&& content.value!==''){
    liste.appendChild(newchore)}
    var del = document.createElement("button");
    del.innerHTML = '<i class="fas fa-trash-alt"></i>'; // Icône de poubelle de Font Awesome
    del.onclick = function() {
      this.parentNode.remove(); 
    };
    newchore.appendChild(del);
  });

