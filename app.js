const cuerpo = document.querySelector(".contenido");
const nodos = document.querySelectorAll(".cuerpo")

const hammertime = new Hammer(cuerpo);
let contador = 0;
hammertime.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

// hammertime.on("pan",function(e){
//     console.log(e);
//     e.preventDefault();
//     cuerpo.textContent = e.type;
// })

hammertime.on("swipeleft",function(e){
    
    if(nodos.length-1 > contador){
        contador+=1;
        nodos[contador-1].classList.remove("active")
        nodos[contador].classList.add("active");
        if(contador == 1){
            nodos[contador].style.background = "lime";
        }
        if(contador == 2){
            nodos[contador].style.background = "aqua";
       }
    }
    console.log(contador);
})

hammertime.on("swiperight",function(e){
    if(contador > 0){
        contador-=1;
        nodos[contador+1].classList.remove("active")
        nodos[contador].classList.add("active")
        if(contador == 1){
            nodos[contador].style.background = "lime";
        }
        if(contador == 2){
            nodos[contador].style.background = "aqua";
       }
       
    }
    console.log(contador);
    // console.log(e.type);
    // cuerpo.style.background = "green";
    // // cuerpo.textContent = e.type;
    // cuerpo.firstChild.nextSibling;
})
console.log(nodos.length)