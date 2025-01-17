const machine_profile = "assets/mariposa.png"
const user_profile = "assets/default.png"
const sound_icon = "assets/escuchar.png"
const audio = new Audio("assets/neon.mp3")

function message(mes, user) {
    const new_mes = document.getElementById("conversation").appendChild(document.createElement("div"));
    new_mes.classList.add("full-message")
    const hear = document.createElement("img")
    hear.src = sound_icon;
    hear.classList.add("sound")
    const img = document.createElement("img")
    img.src = user ? user_profile : machine_profile
    img.className = "profile"
    const message = document.createElement("div")
    message.classList.add("message", user ? "user":"nube");
    message.innerHTML = mes;

    if(user) {
        new_mes.appendChild(message)
        new_mes.appendChild(img)
    } else {
        new_mes.appendChild(img)
        new_mes.appendChild(message)
        new_mes.appendChild(hear)
    }
}

a()
async function a() {
    await document.getElementsByClassName("s-button")[0].addEventListener("click", () => {
        audio.play()
    })
}