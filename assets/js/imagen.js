let boderactivo = 1

function resaltar(){
    border = document.querySelector("#imagen");
    if (boderactivo == 1){
        border.style.borderStyle = "solid"
        border.style.borderColor = "#E74C3C";
        border.style.borderWidth = "2px";
        border.style.borderRadius = "50%";
        boderactivo = 0
        

    } else {
        boderactivo = 1
        border.style.borderStyle = "none"
        border.style.borderRadius = "0%";

    }
    
}