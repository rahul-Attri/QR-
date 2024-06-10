var input=document.getElementById("input")
var imgbox=document.getElementById("imgbox")
var qrimg=document.getElementById("qrimg")

function generator(){
    if(input.value.length>0){
        qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ input.value
        imgbox.classList.add("show-img")
    }
   else{
    alert("wirte something")
   }
}