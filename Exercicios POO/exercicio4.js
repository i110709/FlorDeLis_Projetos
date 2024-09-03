class Retangulo {
    constructor(base, altura) {
      this._base = base;
      this._altura = altura;
    }
  
    calcularArea() {
      return this._base * this._altura;
    }
  
    calcularPerimetro() {
      return 2 * (this._base + this._altura);
    }
  
      get base() {
      return this._base;
    }
  
    set base(value) {
      if (value > 0) {
        this._base = value;
      } else {
        console.error("A base deve ser um valor positivo.");
      }
    }
  
    get altura() {
      return this._altura;
    }
  
    set altura(value) {
      if (value > 0) {
        this._altura = value;
      } else {
        console.error("A altura deve ser um valor positivo.");
      }
    }
  }
  
  const retangulo = new Retangulo(5, 10);
  console.log('Área:', retangulo.calcularArea()); 
  console.log('Perímetro:', retangulo.calcularPerimetro());
  