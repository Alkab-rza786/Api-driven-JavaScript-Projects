const input = document.getElementById("input");
const img = document.querySelector(".img")

function createQrcode() {

    if (input.value == "") {
        input.classList.add("error");
        setTimeout(() => {
            input.classList.remove("error");
        }, 1000);

    }
    else {
        img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        img.classList.add("error");
        setTimeout(() => {
            img.classList.remove("error");
        }, 1000);

    }
}