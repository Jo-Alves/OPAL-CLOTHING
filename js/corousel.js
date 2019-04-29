function Carousel(attribute){
    this.container = (typeof attribute.container === 'string') ? document.querySelector(attribute.container) : attribute.container;

    this.itens = (typeof attribute.itens === "string") ? this.container.querySelectorAll(attribute.itens) : attribute.itens;

    this.btSel1 = (typeof attribute.btSel1 === "string") ? document.querySelector(attribute.btSel1) : attribute.btSel1;

    this.btSel2 = (typeof attribute.btSel2 === "string") ? document.querySelector(attribute.btSel2) : attribute.btSel2;

    this.btSel3 = (typeof attribute.btSel3 === "string") ? document.querySelector(attribute.btSel3) : attribute.btSel3;

    this.btSel4 = (typeof attribute.btSel4 === "string") ? document.querySelector(attribute.btSel4) : attribute.btSel4;

    this.btnPrev = (typeof attribute.btnPrev === "string") ? document.querySelector(attribute.btnPrev) : attribute.btnPrev;

    this.btnNext = (typeof attribute.btnNext === "string") ? document.querySelector(attribute.btnNext) : attribute.btnNext;

    var _this = this;

    
 }