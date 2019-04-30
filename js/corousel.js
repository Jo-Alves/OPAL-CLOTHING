function Carousel(attribute){
    this.container = (typeof attribute.container === 'string') ? document.querySelector(attribute.container) : attribute.container;

    this.itens = (typeof attribute.itens === "string") ? this.container.querySelectorAll(attribute.itens) : attribute.itens;

    this.btSel1 = (typeof attribute.btSel1 === "string") ? document.querySelector(attribute.btSel1) : attribute.btSel1;

    this.btSel2 = (typeof attribute.btSel2 === "string") ? document.querySelector(attribute.btSel2) : attribute.btSel2;

    this.btSel3 = (typeof attribute.btSel3 === "string") ? document.querySelector(attribute.btSel3) : attribute.btSel3;

    this.btSel4 = (typeof attribute.btSel4 === "string") ? document.querySelector(attribute.btSel4) : attribute.btSel4;

    this.btnPrev = (typeof attribute.btnPrev === "string") ? document.querySelector(attribute.btnPrev) : attribute.btnPrev;

    this.btnNext = (typeof attribute.btnNext === "string") ? document.querySelector(attribute.btnNext) : attribute.btnNext;

    this.btnCarousel = (typeof attribute.btnCarousel === "string") ? document.querySelector(attribute.btnCarousel) : attribute.btnCarousel;

    this.img = (typeof attribute.img === "string") ? document.querySelector(attribute.img) : attribute.img;

    var _this = this;

    

    var imgs = ["image/inicio/slide-01.jpg", "image/inicio/slide-02.jpg", "image/inicio/slide-03.jpg", "image/inicio/slide-04.jpg"];
    function timeSlide(){
        var result = imgs.shift();
        imgs.push(result);

        _this.img.src = result;

        setTimeout(timeSlide, 5000);
    }

    timeSlide();

    this.btSel1.addEventListener("click", function(){
       _this.img.src = "image/inicio/slide-01.jpg";
       _this.btSel1.style.backgroundColor = "#000";
    })

    this.btSel2.addEventListener("click", function(){
      _this.img.src = "image/inicio/slide-02.jpg";
    })

    this.btSel3.addEventListener("click", function(){
      _this.img.src = "image/inicio/slide-03.jpg";
    })

    this.btSel4.addEventListener("click", function(){
      _this.img.src = "image/inicio/slide-04.jpg";
    })
}