function Menu(Atributos){
    this.body = (typeof Atributos.body === 'string' ) ?
                document.querySelector(Atributos.body) : Atributos.body;
    
    this.btnMenu = (typeof Atributos.btnMenu === 'string' ) ?
                document.querySelector(Atributos.btnMenu) : Atributos.btnMenu;
    
    this.navMenu = (typeof Atributos.navMenu === 'string' ) ?
                document.querySelector(Atributos.navMenu) : Atributos.navMenu;
                
    this.btnFechar = (typeof Atributos.btnFechar === 'string' ) ?
                document.querySelector(Atributos.btnFechar) : Atributos.btnFechar;
    
    this.Menu = (typeof Atributos.Menu === 'string' ) ?
                document.querySelector(Atributos.Menu) : Atributos.Menu;
                
    
    this.min_width = Atributos.min_width;

    var _this = this;

    this.btnMenu.removeAttribute("style");

   this.btnMenu.addEventListener("click", MostrarMenu);
   this.btnFechar.addEventListener("click", FecharMenu);
   _this.btnFechar.addEventListener("mouseover", function(){
        _this.btnFechar.style.animation = "rotDireita .2s ease 1";
   });

   _this.btnFechar.addEventListener("mouseout", function(){
    _this.btnFechar.style.animation = "rotEsquerda .2s ease 1";
});

    function MostrarMenu(){
        // this.navMenu.style.display = "none";
        // _this.navMenu.style.width = '300px';
        // _this.navMenu.style.height = '120vh';
        // _this.navMenu.style.position = 'absolute';
        // _this.navMenu.style.right = '-300px';
        // _this.navMenu.style.backgroundColor = "rgb(238, 226, 226)";



        _this.body.style.transform = "translateX(-300px)";
        _this.body.style.transition = ".5s ease";
        _this.body.style.overflowY = "hidden";
        // _this.navMenu.style.display = "none";
        
        _this.navMenu.style.display = "block";
        _this.navMenu.style.transition = "width .5s ease";
      

        _this.btnFechar.style.display = "block";               

        _this.Menu.style.display = "block";
    }

    function FecharMenu(){
        _this.body.style.transform = "translateX(0)";
        _this.body.style.transition = ".3s ease";
        _this.body.style.overflowY = "auto";
        
        //_this.navMenu.style.display = "none";
        // _this.navMenu.style.transition = "width .5s ease";

        // _this.btnFechar.style.display = "none";
        // _this.Menu.style.display = "none";
    }

    addEventListener("resize", function(){
        FecharMenu();
    });
}