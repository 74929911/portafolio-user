const btn = document.getElementById("btn");
const btnMenu = document.getElementById("btnMenu");
const quien_soy = document.getElementById("quien_soy");
quien_soy.addEventListener("click",(e)=>{
    e.preventDefault();
    Swal.fire({
        title: 'Diseño en photoshop',
        text: 'Visita mi portafolio en behance.',
        imageUrl: './assets/photoshop-sweet.jpg',
        imageWidth: 250,
        imageHeight: 160,
        imageAlt: 'Custom image',
      }).then(function() {
        window.location = "https://www.behance.net/sergiorojas32";
    });
})
let i = 0;
const rootStyle = document.documentElement.style;
btn.addEventListener("click",()=>{
    if(i==0){
        btn.textContent="toggle_off";
        rootStyle.setProperty("--color-text","white");
        rootStyle.setProperty("--color-button-shadow","1px -1px 43px 0px rgba(17,117,254,0.75)");
        rootStyle.setProperty("--color-shadow","rgba(0,108,255,0.75)");
        rootStyle.setProperty("--background-todo","black");
        rootStyle.setProperty("--color-navbar","rgb(122, 122, 122)");
        i=1;
    }else{
        btn.textContent="toggle_on";
        rootStyle.setProperty("--color-text","black");
        rootStyle.setProperty("--color-button-shadow","1px -1px 20px -4px rgba(255, 43, 185, 0.99)");
        rootStyle.setProperty("--color-shadow","rgba(255, 43, 185, 0.99)");
        rootStyle.setProperty("--background-todo","white");
        rootStyle.setProperty("--color-navbar","rgb(231, 231, 231)");
        i=0;
    }
})


