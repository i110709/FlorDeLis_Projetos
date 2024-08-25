function ParesdeIndicePar (listadenumeros){
    return listadenumeros.filter((num,index)=>num % 2 ===0 && index % 2 === 0)
}
const array = [1,11,22,33,44,55,66,77]
const resultado = ParesdeIndicePar(array)
console.log(resultado)