const texte =  "me joindre au +33(6)25369854 entre "
"a fait plus de ventes au 2eme trimestre lorsque"
"par mail à example@gmail.com ou au +33(1)25364125"
"+33(2)12365987"
"avec le devis qui s'élève à un montant de"
"à en discuter au +33(2)14785421 pour toute question"
"avec +33% d'augmentation sur l'année dernière"
"le +33(a)78569852 est invalide"

const lignes = texte.trim().split("\n")


console.log("Vérifier si une ligne contient au moins un Match")


for(const ligne of lignes){
    const result =/\+33\(([1-9])\)(\d{2})(\d{2})(\d{2})(\d{2})/.test(ligne)
    console.log(result ? "Vrai" : "Faux", ligne)
}


console.log("Vérifier qu'une ligne contient un match et sans rien d'autre avant ni après")

for(const ligne of lignes){
    const result =/^\+33\(([1-9])\)(\d{2})(\d{2})(\d{2})(\d{2})$/.test(ligne)               // Début ^ + Fin $ 
    console.log(result ? "Vrai" : "Faux", ligne)
}



console.log("Extraire tous les Matchs")


console.log(texte.match(/\+33\(([1-9])\)(\d{2})(\d{2})(\d{2})(\d{2})/g))   // Flag G permet de ne pas s'aêter au premier Numéro 


console.log("Remplacer les matchs par un texte statique")


console.log(texte.replace(/\+33\(([1-9])\)(\d{2})(\d{2})(\d{2})(\d{2})/g, '[Number]'))

