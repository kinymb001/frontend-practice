    const btn = document.querySelector(".manu-bar");
    const menu = document.querySelector(".btn-menu-header");
    const btnClose = document.querySelector("#btnCloseHeader");

    btn.onclick = function(){
        menu.style.display = "block";
    }

    btnClose.onclick = function(){
        menu.style.display = "none";
    }
