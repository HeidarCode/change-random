const big =  document.getElementById("big")
const medium =  document.getElementById("medium")
const small =  document.getElementById("small")
const Ck =  document.getElementById("Click")
alert("please press button every two seconds")

function setColor_1 (color_1){
    big.style.backgroundColor = color_1
    
}
function setColor_2(color_2){
    medium.style.backgroundColor = color_2
}

Ck.onclick = function (e){
    const colors = new Array("#001219" , "#005F73" , "#0A9396" , "#DC8101" , "#CA6702")

    const BGColor = colors[(Math.floor(Math.random() * colors.length))]

    
    console.log(BGColor)
    setColor_1(BGColor)




    const color = new Array( "#E9D8A6" , "#BB3E03" , "#B52F0B" , "#B52F0B" ,"#AE2012")

    let BGColor_2 = color[(Math.floor(Math.random() * color.length))]

    
    
    setColor_2(BGColor_2)
    const Animate_1 = ["animate__bounce" , "animate__flash" , "animate__pulse" , "animate__rubberBand" , "animate__shakeX" , "animate__headShake" , "animate__swing" , "animate__tada" , "animate__wobble" , "animate__jello"]
    let sentens = Animate_1[(Math.floor(Math.random() * Animate_1.length))]
    
    
    const Animated = "animate__animated"
   
    
    const p = document.getElementById("text")
    
    p.classList.add(Animated , sentens)
    
    setTimeout(function() {
        p.classList.remove(Animated , sentens)
    }, 2000)
    
}

 

