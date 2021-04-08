
let message = document.querySelector(".message");
let container = document.querySelector(".container");

document.addEventListener("keypress", (e) => {

    message.style.display = "none";

    container.innerHTML =
        `<div class="content">
            <small>event.key</small>
            <div class="key">${(e.key === " " ? "Space" : e.key)}</div>
        </div>

        <div class="content">
            <small>event.keyCode</small>
            <div class="key">${e.keyCode}</div>
        </div>

        <div class="content">
            <small>event.code</small>
            <div class="key">${(e.code)}</div>
        </div> `

}, true);
