class Triangulo {
    constructor(ladoA, ladoB, ladoC) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    get ladoA() {
        return this._ladoA;
    }

    get ladoB() {
        return this._ladoB;
    }

    get ladoC() {
        return this._ladoC;
    }

    set ladoA(newLadoA) {
        if (newLadoA <= 0) {
            throw new Error("Lado A inválido");
        } else {
            this._ladoA = newLadoA;
        }
    }

    set ladoB(newLadoB) {
        if (newLadoB <= 0) {
            throw new Error("Lado B inválido");
        } else {
            this._ladoB = newLadoB;
        }
    }

    set ladoC(newLadoC) {
        if (newLadoC <= 0) {
            throw new Error("Lado C inválido");
        } else {
            this._ladoC = newLadoC;
        }
    }

    perimetro() {
        let p = (this.ladoA + this.ladoB + this.ladoC);
        return p;
    }

    area() {
        let s = this.perimetro() / 2;
        let a = Math.sqrt(s * (s - this.ladoA) * (s - this.ladoB) * (s - this.ladoC));
        return a;
    }

}
try {
    let lado = new Triangulo(3, -4, 5);
    console.log(lado.perimetro());
    console.log(lado.area());
} catch (error) {
    console.error("Ocorreu um erro: ", error.message);
}