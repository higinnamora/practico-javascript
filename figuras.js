// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
// console.groupEnd();

// Código del triángulo
// console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Código del círculo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo mide: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("El número PI es" + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

//Area
function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
// Triángulo

function calcularTriangulo() {
  const inputAltura = document.getElementById("inputAltura");
  const inputBase = document.getElementById("inputBase");
  const inputA = document.getElementById("inputA");
  const inputB = document.getElementById("inputB");
  const resArea = document.getElementById("aResult");
  const resPerimetro = document.getElementById("pResult");
  const h = parseInt(inputAltura.value);
  const bs = parseInt(inputBase.value);
  const a = parseInt(inputA.value);
  const b = parseInt(inputB.value);
  const perimetro = perimetroTriangulo(a, b, bs);
  const area = areaTriangulo(bs, h);
  resPerimetro.innerHTML = perimetro + " cm";
  resArea.innerHTML = area + " cm";
}

// Circulo

function calcularCirculo() {
  const inputAltura = document.getElementById("inputAltura");
  const inputBase = document.getElementById("inputBase");
  const inputA = document.getElementById("inputA");
  const inputB = document.getElementById("inputB");
  const resArea = document.getElementById("aResult");
  const resPerimetro = document.getElementById("pResult");

  const h = parseInt(inputAltura.value);
  const bs = parseInt(inputBase.value);
  const a = parseInt(inputA.value);
  const b = parseInt(inputB.value);

  const perimetro = perimetroTriangulo(a, b, bs);
  const area = areaTriangulo(bs, h);
  resPerimetro.innerHTML = perimetro + " cm";
  resArea.innerHTML = area + " cm";
}
