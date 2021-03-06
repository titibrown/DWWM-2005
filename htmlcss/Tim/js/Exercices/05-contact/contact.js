/**
 * VALIDATION DU FORMULAIRE DE CONTACT 
 * 
 * Nom          : 3 caractères minimum, 30 au maximum. Lettres et espaces uniquement.
 * Email        : format email valide
 * Téléphone    : format 10 chiffres. Le premier chiffre est obligatoirement un 0
 * Message      : au moins 20 caractères, validation complète en backend.
 * 
 * Consignes : 
 * 1) Adapter les attributs "pattern" du formulaire (contact.html)
 * 2) Ajouter les évènements nécessaires pour valider chaque champ "en temps réel" (onkeyup, onkeypress...)
 * 3) Compléter le code de l'évènement "submit" se trouvant en bas de ce fichier.
 * 4) Ajouter les règles CSS que vous jugerez utilies dans les classes .success et .error du fichier contact.css
 * 5) (Bonus) Valider le formulaire coté backend dans le fichier "contact_validation.php"
 */



/**
 * TODO : Ajouter ci-dessous les évènements pour valider individuellement les champs du formulaire (onkeyup, onkeypress...)
 */

/* votre code ici */




document.addEventListener("keyup",(event) => 
{

if(!event.target.value.match(event.target.pattern,'contactName')){
    
 
}

if(!event.target.value.match(event.target.pattern, 'contactEmail')){
   
}

if(!event.target.value.match(event.target.pattern, 'contactPhone')){
    

}

if(!event.target.value.match(event.target.pattern, 'contactMessage')){


}

}





/**
 * TODO : Compléter le code de l'évènement ci-dessous pour valider tous les champs du formulaire lors de sa soumission (submit)
 */

// sélection du formulaire

const contactForm = document.getElementById('contactForm');

// évènement déclenché à la soumission du formulaire (submit)
contactSubmit.addEventListener('submit', (event) => {

    console.log(event);

  var forValid = document.getElementById('button_send');
  var name = document.getElementById('name');
  var email = document.getElementById('email')
  var telephone = document.getElementById('telephone')
  var message = document.getElementById('message')

formValid.addEventListener('submit',validation);



function validation(event){

        if (nameValue === null){

            setErrorFor(name,'Name is required');
        }else{
            setSucessfor(name);
        }
              
        if(emailValue === null){
            setErrorFor(email,'email is required');
        }else if (!isemailvalid(emailValue)){

                setErrorFor(email,'Not a valid Email');
        }else{

            setSucessfor(email);
        }


        if(telephonelValue === null){
            setErrorFor(telephone,'telephone is required');
        }else{
            setSucessfor(telephone);
        }

        if(messageValue ==={
           
        }
            setSucessfor(message);
        

        function isemailvalid(email){

            return "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$".test(email);
        }
    }
