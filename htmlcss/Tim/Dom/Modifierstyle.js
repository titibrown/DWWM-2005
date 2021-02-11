// 1ère méthode : décomposée
let header = document.querySelector('header');
header.style.backgroundColor = '#ffbd69';

// 2ème méthode : directe
document.querySelector('h1').style.color = '#111d5e';
document.querySelector('h1').style.textAlign = 'center';

// 3ème méthode : avec une classe
document.querySelector('header').className = "ma_class";


/*header.textContent = "Bienvenue";
header.style.backgroundColor = "#e3b04b";
header.style.color = "white";
header.style.padding = "30px";
header.style.fontSize = "3em";
header.style.textAlign = "center";
*/