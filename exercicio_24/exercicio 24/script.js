function inverterobjeto (obb){
    let newObject = {};
    for (let chave in obb) {
        newObject[obb[chave]] = chave;
    }
    return newObject;
}
console.log(inverterobjeto({salgadinho: 99, docinho: 10}));