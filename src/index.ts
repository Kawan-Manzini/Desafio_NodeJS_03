

	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

import { Console } from "console";


	//#region R01
	const readline = require('readline');
	const r1 = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
 
	 r1.question(`Existem quantos alunos?\n`, (number: any) => {
	 	console.log('são ao todo ' + number + ' alunos');
	 
	//#endregion



	//#region R02 E R03
	r1.question(`Qual o nome do aluno(a)?\n`, (name : any) =>{
		console.log(`Ola ${name}`);
	r1.question(`Qual a nota do ${name}?\n`, (nota : number) => {
		console.log(`A nota do(a) ${name} é ${nota}`)



r1.question(`Qual o nome do aluno(a)?\n`, (name2 : any) =>{
		console.log(`Ola ${name2}`);
	r1.question(`Qual a nota do ${name2}?\n`, (nota2 : number) => {
		console.log(`A nota do(a) ${name2} é ${nota2}`)



r1.question(`Qual o nome do aluno(a)?\n`, (name3 : any) =>{
	console.log(`Ola ${name3}`);
r1.question(`Qual a nota do ${name3}?\n`, (nota3 : number) => {
	console.log(`A nota do(a) ${name3} é ${nota3}`)


	//#region  R04
	console.log('a maior nota é ' + Math.max(nota, nota2, nota3));
	//#endregion

});
});
});
});
});
});
});
	//#endregion


