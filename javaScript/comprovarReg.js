const psw1 = document.getElementById("contrasenya");
const psw2 = document.getElementById("c-contrasenya");
const boto = document.getElementById("boto-reg");

boto.addEventListener("click", function(event) {
    if (psw1.value !== psw2.value) {
        alert("Les contrasenyes no coincideixen!");
        event.preventDefault();
    }
});