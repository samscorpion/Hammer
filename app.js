const cuerpo = document.querySelector(".cuerpo");

const hammertime = new Hammer(cuerpo);

hammertime.on("pan ",function(e){
    console.log(e);
    e.preventDefault();
    cuerpo.textContent = e.type;
})

hammertime.on("swipe",function(e){
    console.log(e);
    cuerpo.style.background = "red";
    cuerpo.textContent = e.type;
})