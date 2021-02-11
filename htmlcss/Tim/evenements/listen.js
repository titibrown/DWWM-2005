// let a = document.querySelector('a');
// let button = document.querySelector('button');

// a.onclick = function(){
//   if(confirm('Etes-vous sûr ?')) {
//     location.href="https://believemy.com"
//   }
// }
/* Next Fonction Anonyme 
a.onclick = () => {
  if(confirm('Etes-vous sûr ?')) {
    location.href="https://believemy.com"
  }
}

button.onmouseover = () => {
  document.body.style.backgroundColor = 'orange';
}

button.onmouseout = () => {
  document.body.style.backgroundColor = 'white';
}
*/
// Ajouter un event

let a = document.querySelector('a');
let button = document.querySelector('button');

a.addEventListener('click', (e) => {
  if(confirm('Etes-vous sûr ?')) {
    location.href = "https://believemy.com";
  }
});

button.addEventListener('mouseover', () => {
  document.body.style.backgroundColor = 'orange';
});

function backgroundWhite() {
  document.body.style.backgroundColor = 'white';
}

button.addEventListener('mouseout', backgroundWhite);
button.addEventListener('mouseout', () => {
  document.body.style.fontFamily = 'arial';
});

// button.removeEventListener('mouseout', backgroundWhite);




//Propagation 


let article = document.querySelector('article');
let h1      = document.querySelector('h1');

article.addEventListener('click', () => {
  alert('article cliqué');
});

h1.addEventListener('click', (e) => {
  alert('titre cliqué');
  e.stopPropagation(); // On stop la propagation
});

// Planifier Set Timout Out, Set Interval 


// setTimeout
let timer = setTimeout("alert('Bonjour')", 3000);
clearTimeout(timer); // Arrêter avant l'exécution 

// setInterval
let interval = setInterval("alert('Bonjour')", 5000);
clearInterval(interval);


/*

Les écouteurs "on" et les propriétés JavaScript



    onfocus - Quand l'utilisateur sélectionne l'élément

    onchange - Quand l'utilisateur change la valeur de l'élément

    onclick - Quand l'utilisateur clique sur l'élément

    ondblclick - Quand l'utilisateur double-clique sur l'élément

    onkeypress - Quand l'utilisateur appuie sur une touche du clavier dans l'élément


Les évènements avec addEventListener

    click - Quand l'utilisateur clique sur l'élément

    mouseover - Quand l'utilisateur passe avec sa souris au-dessus d'un élément

    mouseout - Quand l'utilisateur sort avec sa souris d'un élément

    copy - Quand l'utilisateur copie un élément

    cut - Quand l'utilisateur coupe un élément

    paste - Quand l'utilisateur colle un élément


*/