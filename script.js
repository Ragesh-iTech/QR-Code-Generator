
const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const qrText = document.getElementById("qrText");
const qrButton = document.getElementById("qrButton");


function generateQR(){

    if (qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + qrText.value;
        qrBox.classList.add("show-img");
        qrImage.style.height = "300px";
    }
    else
    {
        qrText.classList.add("error");
        qrText.style.border = "1px solid red";
        setInterval(() =>{
            qrText.classList.remove("error");
            qrText.style.border = "1px solid blue";
        }, 1000);
    }
    

}