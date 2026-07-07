const whatsappLink = "https://api.whatsapp.com/send/?phone=5521996926512&text&type=phone_number&app_absent=0";
const emailLink = "mailto:caionabucomusic@gmail.com";

const whatsappBtn = document.getElementById("whatsappBtn");
const emailBtn = document.getElementById("emailBtn");

whatsappBtn.href = whatsappLink;
emailBtn.href = emailLink;