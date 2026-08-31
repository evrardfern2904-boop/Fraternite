// Message de bienvenue
window.addEventListener("load", function () {
    console.log("Bienvenue sur le site de l'École Fraternité");
});

// Confirmation avant l'envoi d'un formulaire
document.addEventListener("DOMContentLoaded", function () {

    const formulaire = document.querySelector("form");

    if (formulaire) {
        formulaire.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Votre formulaire a été envoyé avec succès !");

            formulaire.reset();

        });
    }

});

// Bouton Retour en haut
const bouton = document.createElement("button");

bouton.innerHTML = "⬆";

bouton.id = "retourHaut";

document.body.appendChild(bouton);

bouton.style.position = "fixed";
bouton.style.bottom = "20px";
bouton.style.right = "20px";
bouton.style.padding = "12px 16px";
bouton.style.border = "none";
bouton.style.borderRadius = "50%";
bouton.style.background = "#0056b3";
bouton.style.color = "white";
bouton.style.fontSize = "20px";
bouton.style.cursor = "pointer";
bouton.style.display = "none";

// Afficher le bouton après un défilement
window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        bouton.style.display = "block";
    } else {
        bouton.style.display = "none";
    }

});

// Remonter en haut
bouton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
/* =========================================================
💳 PAIEMENT - COPIER LES CODES MOMO
========================================================= */

/*
Cette fonction permet au visiteur de cliquer sur
"Copier le code" pour copier automatiquement le
numéro de l'opérateur.

⚠️ Les numéros eux-mêmes sont à modifier dans
index.html et NON dans cette partie.
*/

function copyPaymentCode(codeId, button) {

/* -----------------------------------------------------
   Récupération du code
   ----------------------------------------------------- */

const codeElement =
    document.getElementById(codeId);


/* -----------------------------------------------------
   Vérification
   ----------------------------------------------------- */

if (!codeElement) {

    return;

}


/* -----------------------------------------------------
   Récupération du numéro
   ----------------------------------------------------- */

const code =
    codeElement.textContent.trim();


/* -----------------------------------------------------
   Copie du numéro
   ----------------------------------------------------- */

navigator.clipboard.writeText(code)

    .then(function () {

        /* Texte actuel du bouton */
        const oldText =
            button.textContent;


        /* Confirmation */
        button.textContent =
            "✓ Code copié";


        /* Retour au texte normal après 2 secondes */

        setTimeout(function () {

            button.textContent =
                oldText;

        }, 2000);

    })


    .catch(function () {

        /*
           Si le navigateur empêche la copie,
           on affiche simplement le code.
        */

        alert(
            "Code de paiement : " + code
        );

    });

}