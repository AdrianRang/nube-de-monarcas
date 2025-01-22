const machine_profile = "assets/mariposa.png"
const user_profile = "assets/default.png"
const sound_icon = "assets/escuchar.png"
const audio = new Audio("assets/neon.mp3")
let json;
fetch('./responses.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        json = data;
        message(json.messages[0], false)
    })
    .catch(error => console.error('Error fetching JSON:', error));


function message(obj) {
    let mes = obj.message
    const new_mes = document.getElementById("conversation").appendChild(document.createElement("div"));
    new_mes.classList.add("full-message")
    let sbutton = document.createElement("button");
    sbutton.classList.add("s-button")
    let hear = document.createElement("img")
    hear.src = sound_icon;
    hear.classList.add("sound")
    sbutton.appendChild(hear);
    const img = document.createElement("img")
    img.src = machine_profile
    img.className = "profile"
    const new_message = document.createElement("div")
    new_message.classList.add("message", "nube");
    new_message.innerHTML = mes;

    new_mes.appendChild(img)
    new_mes.appendChild(new_message)
    new_mes.appendChild(sbutton)

    let options = obj.responses;
    console.log("options: " + options)
    options.forEach(element => {
        const button = document.createElement("button");
        button.innerHTML = element.option;
        button.onclick = () => {
            document.getElementById("response").innerHTML ="";
            message_user(element.option);
            message(json.messages[element.sendTo])    
        }
        document.getElementById("response").appendChild(button)
    });
    document.getElementById("response").scrollIntoView();

    sbutton.addEventListener("click", () => {
        let audio = new Audio(obj.audio)
        audio.play()
    })
}

function message_user(mes) {
    const new_mes = document.getElementById("conversation").appendChild(document.createElement("div"));
    new_mes.classList.add("full-message")
    const img = document.createElement("img")
    img.src = user_profile
    img.className = "profile"
    const new_message = document.createElement("div")
    new_message.classList.add("message", "user");
    new_message.innerHTML = mes;

    new_mes.appendChild(new_message)
    new_mes.appendChild(img)
}


document.addEventListener("DOMContentLoaded", ()=>{
    message(json.messages[0])
})