window.addEventListener('load', () =>{
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const margin = 100;
    const marginTop = 30;

    canvas.style.marginTop = marginTop + "px";
    canvas.style.marginRight = "auto";
    canvas.style.marginLeft = "auto";

    canvas.height = window.innerHeight-margin-marginTop;
    canvas.width = window.innerWidth-margin;

    let painting = false;

    function startPainting(e){
        painting = true;
        paint(e);
    }

    function finishedPainting(){
        painting = false;
        ctx.beginPath();
    }

    function paint(e){
        if(!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX-margin/2,e.clientY-marginTop*2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX-margin/2,e.clientY-marginTop*2);
    }

    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", finishedPainting);
    canvas.addEventListener("mouseout", finishedPainting )
    canvas.addEventListener("mousemove", paint);

    const clear = document.getElementById("clear");
    clear.addEventListener("mousedown", () => {ctx.clearRect(0,0,canvas.Width,canvas.height);})
});
