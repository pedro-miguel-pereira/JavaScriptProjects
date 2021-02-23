window.addEventListener('load', () =>{
    const carousel = document.getElementById("change-inner");
    var movement = 0;
    const space = 60;
    
    window.setInterval(() => {
        var id =0;
        if(movement >= space*4){
            movement =0;
            carousel.style.transform = "translate(0px,0px)"
        }
        console.log(movement);
        var intervalID = window.setInterval(()=>{
            id++;
            movement +=1;
            carousel.style.transform = "translate(0px,"+ -movement + "px)";
            if(id===space){
                id =0;
                window.clearInterval(intervalID);
            }
        },15)
    }, 3000);
}); 