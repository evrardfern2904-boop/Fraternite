// Message de bienvenue
window.addEventListener("load", function () {
    console.log("Bienvenue sur le site de l'École Fraternité");
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
