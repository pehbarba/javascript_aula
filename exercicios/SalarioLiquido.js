let leia = require('readline-sync')

let salarioBruto = 2000.00;

let adicionalNoturno = leia.questionFloat("Insira o dcional noturno: ");

let horasExtras = leia.questionFloat("Insira as horas extras: ");

let desconto = leia.questionFloat("Insira o desconto: ");

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras*5) - desconto;

console.log(salarioLiquido);