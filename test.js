// Ex1
function multiplicar(a, b, c) {
  return a * b * c;
}
console.log(multiplicar(1, 2, 3)); 
console.log(multiplicar(4, 5, 6));
console.log(multiplicar(0, 0, 8));


// Ex2
function dividir(a, b) {
  if (b === 0) {
    return "Não é possível dividir por 0";
  }
  return a / b;
}
console.log(dividir(70, 5)); 
console.log(dividir(3, 0)); 


// Ex3
function celsiusFahrenheit(c) {
  return (c * 1.8) + 32;
}

function fahrenheitCelsius(f) {
  return (f - 32) / 1.8;
}
console.log(celsiusFahrenheit(0));  
console.log(fahrenheitCelsius(32));


// Ex4 
function media(a, b, c) {
  return (a + b + c) / 3;
}
console.log(media(6, 7, 8));   
console.log(media(10, 9, 8)); 


// Ex5
function contarCaracteres(texto) {
  return texto.length;
}
console.log(contarCaracteres("senai"));
console.log(contarCaracteres("12345"));  


// Ex6 
function calculadora(a, b, operador) {
  switch (operador) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b === 0 ? "Não é possível dividir por 0" : a / b;
    default:
      return "Operador inválido";
  }
}
console.log(calculadora(10, 14 "+"));
console.log(calculadora(70, 7, "/"));
