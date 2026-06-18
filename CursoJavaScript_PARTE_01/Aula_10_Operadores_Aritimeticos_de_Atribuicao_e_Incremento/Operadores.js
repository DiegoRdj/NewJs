/**
    Artimeticos
    =======================
    + Adição / Concatenação
  -
  * || ** = POTENCIAÇÃO
  /
  % = RESTO DE DIVISÃO
  ============================
  Precendencia dos aritimeticos
  ============================
  ()
  **
   * | / |  %
   + | -
  =====================
  INCREMENTO -> ++
  DECREMENTO -> --
  ===========================
    Operadores de Atribuição
  ===========================


 */

const num1 = 5;
const num2 = 10;
const num3 = 3
console.log(num1 + num2 * num3);

//==============================
//   Incremento / Decremento 
//==============================
//Sempre usar let 
let contador = 0;
contador++;
contador++;
contador++;
contador++;
contador++;
contador++;
console.log(++contador) // Vai imprimir com o incremento
console.log(contador++) // VAi imprimir, porem nao vai mostrar o novo numero, mas tera adicionado mais um
// nao é recomendado isso aq de cima

const passo = 2
contador += passo;
console.log(contador)
contador -= passo;      
console.log(contador)
contador *= passo;
console.log(contador)

//====================

const nume1 = 10;
const nume2 = parseInt('5'); //CONVERTER PARA INTEIRO - converte para inteiro
const nume3 = parseFloat('2.5'); //CONVERTER PARA FLOAT - converte para double / float
const nume4 = Number("23.23") // ELE CONVERTE PARA QUALQUER UM DOS 2, ELE MUDA DE STRING PARA NUMERO SEMPRE
console.log(num1 * num2 + nume3 - nume4)
console.log(typeof nume2)
