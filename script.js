var crsr =document.querySelector("#cursor")
var crsr_blur =document.querySelector("#cursor-blur")


document.addEventListener("mousemove", function (dets) {
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    crsr_blur.style.left=dets.x - 250 +"px"
    crsr_blur.style.top=dets.y -250 +"px"
});

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseover",function(){
        crsr.style.scale =5
        // crsr.style.border = "1px solid #fff";
        crsr.style.boxShadow = "inset 0 0 1px #fff";
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseout",function(){
        crsr.style.scale =1
        // crsr.style.border = "1px solid #fff";
        crsr.style.boxShadow = "none"; // or crsr.style.boxShadow = "";
        crsr.style.backgroundColor="#95c11e"
    })
})

gsap.to("#nav", {
    height: "110px",
    backgroundColor: "#000",
    scrollTrigger:{
        target:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
        duration: 0.5,
    }
});    

gsap.to("#main",{ 
    backgroundColor:"#000",   
    scrollTrigger:{
        target:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
        
    }
});

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body" ,
        // markers:true,
        start:"top 70%",
        end: "top 65%",
        scrub:1

    }
})

gsap.from(".card",{
    scale:0.3,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body" ,
        // markers:true,
        start:"top 70%",
        end: "top 65%",
        scrub:2

    }
})

gsap.from("#colon1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4

    }
})

gsap.from("#colon2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4

    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:2
    }
})

