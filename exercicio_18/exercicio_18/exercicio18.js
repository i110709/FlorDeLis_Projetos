function AreaTriangulo(base, altura) {
    const area = (base * altura) / 2;
    return area.toFixed(2);
}
const base = 100;
const altura = 5;
const area = AreaTriangulo(base, altura);
console.log(area);