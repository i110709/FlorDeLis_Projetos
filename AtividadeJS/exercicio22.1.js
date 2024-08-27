function contarCaractere(caractere, string) {
    return string.split(caractere).length - 1;
  }
  
  console.log(contarCaractere("a", "amora"));