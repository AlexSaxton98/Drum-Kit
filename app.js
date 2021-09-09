// function keyCode(event){
    
//     let eventKeyCode = event.which
//     let eventCode = event.code
    
//     console.log("event key - ", eventKey)
//     console.log("event key code - ", eventKeyCode)
//     console.log("event code - ", eventCode)
// }
 

const drum = document.getElementsByClassName("drum");

const bassDrum = document.getElementById("bassDrum");
const clapCymbal = document.getElementById("clapCymbal");
const hiHatCymbal = document.getElementById("hiHat");
const kickDrum = document.getElementById("kickDrum");
const openHat = document.getElementById("openHat");
const rideCymbal = document.getElementById("rideCymbal");
const snareDrum = document.getElementById("snareDrum");
const woodDrum = document.getElementById("woodDrum");
const tomDrum = document.getElementById("tomDrum");




let boom = new Audio("sounds/boom.wav");
let clap = new Audio("sounds/clap.wav");
let hihat = new Audio("sounds/hihat.wav");
let kick = new Audio("sounds/kick.wav");
let openhat = new Audio("sounds/openhat.wav");
let ride = new Audio("sounds/ride.wav");
let snare = new Audio("sounds/snare.wav");
let tink = new Audio("sounds/tink.wav");
let tom = new Audio("sounds/tom.wav");


function drumKey(event){ //set other parameters to account for capitalised letters as well
    let eventKey = event.key
    if(eventKey == "a" || eventKey == "A"){
        boom.pause();
        boom.currentTime = 0
        boom.play();
            document.getElementById("bassDrum").classList.remove("drumAnimation");
            window.setTimeout(()=>{
            document.getElementById("bassDrum").classList.add("drumAnimation");
        }, 1);

    } else if(eventKey == "s" || eventKey == "S"){
        clap.pause();
        clap.currentTime = 0
        clap.play();
            document.getElementById("clapCymbal").classList.remove("drumAnimation");
            window.setTimeout(()=>{
            document.getElementById("clapCymbal").classList.add("drumAnimation");
        }, 1);
        

    } else if(eventKey == "d" || eventKey == "D"){
        hihat.pause();
        hihat.currentTime = 0
        hihat.play();
            document.getElementById("hiHat").classList.remove("drumAnimation");
            window.setTimeout(()=>{
            document.getElementById("hiHat").classList.add("drumAnimation");
        }, 1);
    } else if(eventKey == "f" || eventKey == "F"){
        kick.pause();
        kick.currentTime = 0
        kick.play();
            document.getElementById("kickDrum").classList.remove("drumAnimation");
            window.setTimeout(()=>{
            document.getElementById("kickDrum").classList.add("drumAnimation");
        }, 1);
    } else if(eventKey == "g" || eventKey == "G"){
        openhat.pause();
        openhat.currentTime = 0
        openhat.play();
            document.getElementById("openHat").classList.remove("drumAnimation");
            window.setTimeout(()=>{
            document.getElementById("openHat").classList.add("drumAnimation");
        }, 1);
    } else if(eventKey == "h" || eventKey == "H"){
        ride.pause();
        ride.currentTime = 0
        ride.play(); 
            document.getElementById("rideCymbal").classList.remove("drumAnimation");
            window.setTimeout(()=>{
            document.getElementById("rideCymbal").classList.add("drumAnimation");
        }, 1);  
    } else if(eventKey == "j" || eventKey == "J"){
        snare.pause();
        snare.currentTime = 0
        snare.play();
            document.getElementById("snareDrum").classList.remove("drumAnimation");
            window.setTimeout(()=>{
            document.getElementById("snareDrum").classList.add("drumAnimation");
        }, 1);
    } else if(eventKey == "k" || eventKey == "K"){
        tink.pause();
        tink.currentTime = 0
        tink.play();
            document.getElementById("woodDrum").classList.remove("drumAnimation");
            window.setTimeout(()=>{
            document.getElementById("woodDrum").classList.add("drumAnimation");
        }, 1);
    } else if(eventKey == "l" || eventKey == "L"){
        tom.pause();
        tom.currentTime = 0
        tom.play();
            document.getElementById("tomDrum").classList.remove("drumAnimation");
            window.setTimeout(()=>{
            document.getElementById("tomDrum").classList.add("drumAnimation");
        }, 1);
    }
    console.log(eventKey);
    console.log(event);
}

function drumClick(event){
    if(event.target.outerHTML == "<img src=\"images/bassDrum_small.png\" class=\"drumImg\">"){
        boom.pause();
        boom.currentTime = 0
        boom.play();
            document.getElementById("bassDrum").classList.remove("drumAnimation");
             window.setTimeout(()=>{
            document.getElementById("bassDrum").classList.add("drumAnimation");
        }, 1);
        
    } else if(event.target.outerHTML == "<img src=\"images/clapCymbal_small.png\" class=\"drumImg\">"){
        clap.pause();
        clap.currentTime = 0
        clap.play();
            document.getElementById("clapCymbal").classList.remove("drumAnimation");
            window.setTimeout(()=>{
            document.getElementById("clapCymbal").classList.add("drumAnimation");
        }, 1);
  
    } else if(event.target.outerHTML == "<img src=\"images/hiHat.png\" class=\"drumImg\">"){
        hihat.pause();
        hihat.currentTime = 0
        hihat.play();
            document.getElementById("hiHat").classList.remove("drumAnimation");
            window.setTimeout(()=>{
            document.getElementById("hiHat").classList.add("drumAnimation");
        }, 1);
    } else if(event.target.outerHTML== "<img src=\"images/kickDrum.png\" class=\"drumImg\">"){
        kick.pause();
        kick.currentTime = 0
        kick.play();
            document.getElementById("kickDrum").classList.remove("drumAnimation");
            window.setTimeout(()=>{
            document.getElementById("kickDrum").classList.add("drumAnimation");
        }, 1);
    } else if(event.target.outerHTML== "<img src=\"images/openHat.png\" class=\"drumImg\">"){
        openhat.pause();
        openhat.currentTime = 0
        openhat.play();
            document.getElementById("openHat").classList.remove("drumAnimation");
            window.setTimeout(()=>{
            document.getElementById("openHat").classList.add("drumAnimation");
        }, 1);
    } else if(event.target.outerHTML== "<img src=\"images/rideCymbal.png\" class=\"drumImg\">"){
        ride.pause();
        ride.currentTime = 0
        ride.play(); 
            document.getElementById("rideCymbal").classList.remove("drumAnimation");
            window.setTimeout(()=>{
            document.getElementById("rideCymbal").classList.add("drumAnimation");
        }, 1);
    } else if(event.target.outerHTML == "<img src=\"images/snare.png\" class=\"drumImg\">"){
        snare.pause();
        snare.currentTime = 0
        snare.play();
            document.getElementById("snareDrum").classList.remove("drumAnimation");
            window.setTimeout(()=>{
            document.getElementById("snareDrum").classList.add("drumAnimation");
        }, 1);
    } else if(event.target.outerHTML== "<img src=\"images/woodPercussion.png\" class=\"drumImg\">"){
        tink.pause();
        tink.currentTime = 0
        tink.play();
            document.getElementById("woodDrum").classList.remove("drumAnimation");
            window.setTimeout(()=>{
            document.getElementById("woodDrum").classList.add("drumAnimation");
        }, 1);
    } else if(event.target.outerHTML== "<img src=\"images/tomDrum.png\" class=\"drumImg\">"){
        tom.pause();
        tom.currentTime = 0
        tom.play();
            document.getElementById("tomDrum").classList.remove("drumAnimation");
            window.setTimeout(()=>{
            document.getElementById("tomDrum").classList.add("drumAnimation");
        }, 1);
    } 
    console.log(event)
}















// clapCymbal.addEventListener("click", () =>{
//     document.getElementById("clapCymbal").classList.remove("drumAnimation");
//     window.setTimeout(()=>{
//         document.getElementById("clapCymbal").classList.add("drumAnimation");
//     }, 1);
// })

// hiHatCymbal.addEventListener("click", () =>{
//     document.getElementById("hiHat").classList.remove("drumAnimation");
//     window.setTimeout(()=>{
//         document.getElementById("hiHat").classList.add("drumAnimation");
//     }, 1);
// })

// kickDrum.addEventListener("click", () =>{
//     document.getElementById("kickDrum").classList.remove("drumAnimation");
//     window.setTimeout(()=>{
//         document.getElementById("kickDrum").classList.add("drumAnimation");
//     }, 1);
// })

// openHat.addEventListener("click", () =>{
//         document.getElementById("openHat").classList.remove("drumAnimation");
//         window.setTimeout(()=>{
//         document.getElementById("openHat").classList.add("drumAnimation");
//     }, 1);
// })

// rideCymbal.addEventListener("click", () =>{
//         document.getElementById("rideCymbal").classList.remove("drumAnimation");
//         window.setTimeout(()=>{
//         document.getElementById("rideCymbal").classList.add("drumAnimation");
//     }, 1);
// })

// snareDrum.addEventListener("click", () =>{
//         document.getElementById("snareDrum").classList.remove("drumAnimation");
//         window.setTimeout(()=>{
//         document.getElementById("snareDrum").classList.add("drumAnimation");
//     }, 1);
// })

// woodDrum.addEventListener("click", () =>{
//         document.getElementById("woodDrum").classList.remove("drumAnimation");
//         window.setTimeout(()=>{
//         document.getElementById("woodDrum").classList.add("drumAnimation");
//     }, 1);
// })

// tomDrum.addEventListener("click", () =>{
//         document.getElementById("tomDrum").classList.remove("drumAnimation");
//         window.setTimeout(()=>{
//         document.getElementById("tomDrum").classList.add("drumAnimation");
//     }, 1);
// })


