
let btnMenu = document.getElementById("btn-menu");
let menu = document.getElementById("menu");

menu.style.right = "-250px";
btnMenu.addEventListener("click", ()=>{

    if(menu.style.right == "-250px"){
        menu.style.right = "0";
    }else{
        menu.style.right = "-250px";
    }
})

    