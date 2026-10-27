
const whatsappLink = "https://api.whatsapp.com/send/?phone=5521996926512&text&type=phone_number&app_absent=0";
const emailLink = "mailto:caionabucomusic@gmail.com";
 
// Cole aqui o link do pré-save de "Boa sorte"
const preSaveLink = "https://ditto.fm/boa-sorte-caio-nabuco";
 
const whatsappBtn = document.getElementById("whatsappBtn");
const emailBtn = document.getElementById("emailBtn");
const preSaveBtn = document.getElementById("preSaveBtn");
 
whatsappBtn.href = whatsappLink;
emailBtn.href = emailLink;
 
if (preSaveLink) {
  preSaveBtn.href = preSaveLink;
} else {
  // Sem link ainda: o banner aparece em destaque, mas não é clicável
  preSaveBtn.removeAttribute("href");
  preSaveBtn.removeAttribute("target");
  preSaveBtn.classList.add("sem-link");
}
