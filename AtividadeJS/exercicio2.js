function calcularSalario(horasTrabalhadas, valorHora) {
    const salario = horasTrabalhadas * valorHora;

    const salarioFormatado = salario.toFixed(2);
    return `Salário igual a R$ ${salarioFormatado}`;
}
console.log(calcularSalario(160,35));

