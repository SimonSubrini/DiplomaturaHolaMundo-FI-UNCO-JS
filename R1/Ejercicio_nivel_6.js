let Users = ["pepito1307", "ggisi24", "soyMuyBueno22022"];
let IPs = ["192.168.1.0", "192.168.1.2"];
let Emails = [
    "pedrogamer2004@gmail.com",
    "whiterabbit01@gmail.com",
    "soydemasiadobueno07@outlook.com"
];

let User = prompt("Ingrese su usuario: ");
let IP = prompt("Ingrese su IP: ");
let Email = prompt("Ingrese su Email: ");

if (Users.includes(User) || IPs.includes(IP) || Emails.includes(Email)) {
    alert("Jugador tramposo encontrado!");
} else {
    alert("El jugador no esta registrado como tramposo");
}
