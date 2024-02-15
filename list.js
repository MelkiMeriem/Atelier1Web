// generates a random number between 0 and 16777215 (which is FFFFFF in hexadecimal,the maximum color value)
function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
  
  // Sélects all the items of the list and places them in an array
  const items = document.querySelectorAll('#liste li');//<li> has liste as Id
  
  // for each element of the array add an event listener for the click
  items.forEach(item => {
    item.addEventListener('click', () => {
      //change the color every time you click on the item
      item.style.color = randomColor();
    });
  });
  