(function(){
    var $body = document.querySelector("body");
    $body.classList.toggle("js");

    var menu = new Menu({        
        body: $body,
        btnMenu: ".btnMenu",
        btnFechar: ".btnFechar",
        navMenu: ".js .dv-menuFlex",
        Menu: ".nav-menu",
        min_width: 681
    })


})()