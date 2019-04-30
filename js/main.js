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
    });

    var corousel = new Carousel({
        container: ".carousel-slide",
        itens: "figure",
        img: ".fig-carousel img",
        btSel1: ".sel1",
        btSel2: ".sel2",
        btSel3: ".sel3",
        btSel4: ".sel4",
        btnPrev: ".prev",
        btnNext: ".next",
        btnCarousel: ".btnCarousel"
    });

})()