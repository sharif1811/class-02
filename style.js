let sharif = document.querySelector(".menu");
window.onscroll=function(){
    let arif = window.scrollY;
    if(arif>=100){
        sharif.classList.add("salman")
    }else{
        sharif.classList.remove("salman")
    }
}