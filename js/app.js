//console.log("Hola mundo desde app");
const BASE_URL=window.location.href


if(navigator.serviceWorker){
    // console.log("Bien");
    let url=''
    const BASE_URL=window.location.href
    BASE_URL.startsWith('https:')?url='/FLGJ-PWA-U2-P1/sw.js':url="/sw.js"
    navigator.serviceWorker.register(url)
    
}else{
    console.log("No funciona");
}


let btn = document.querySelector('#btn-fetch')

const lanzarFetch = async() => {
    document.getElementById("btn-fetch").disabled = true;
    document.getElementById('img-show').style.display = 'block';
    const {answer, image} =  await fetch('https://yesno.wtf/api').then(res => res.json())
    console.log(image);
    document.getElementById("img-fetch").src=image
    document.getElementById("btn-fetch").disabled = false;
}