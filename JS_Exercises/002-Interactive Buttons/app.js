window.addEventListener('load', () =>{
    const style = document.getElementsByClassName("button").style;
    const b1 = document.getElementById("but1");
    const b2 = document.getElementById("but2");
    const b3 = document.getElementById("but3");
    const b4 = document.getElementById("but4");

    b1.style.backgroundColor = "white";
    b1.style.color = "#16a085"

    b1.addEventListener("mousedown", ()=>{
        resetButtons();
        b1.style.transition = "background-color 600ms ease-out";
        b1.style.backgroundColor = "white";
        b1.style.color = "#16a085"
    })

    b2.addEventListener("mousedown", ()=>{
        resetButtons();
        b2.style.transition = "background-color 600ms ease-out";
        b2.style.backgroundColor = "white";
        b2.style.color = "#16a085"
    })

    b3.addEventListener("mousedown", ()=>{
        resetButtons();
        b3.style.transition = "background-color 600ms ease-out";
        b3.style.backgroundColor = "white";
        b3.style.color = "#16a085"
    })

    b4.addEventListener("mousedown", ()=>{
        resetButtons();
        b4.style.transition = "background-color 600ms ease-out";
        b4.style.backgroundColor = "white";
        b4.style.color = "#16a085"
    })


    function resetButtons(){
        b1.style = style;
        b2.style = style;
        b3.style = style;
        b4.style = style;
    }
});