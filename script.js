/*
  **Desafio**

  Principais pontos abordados nesse desafio:

  - Estrutura de dados com objetos;
  - Estrutura de repetição;
  - Criação de funções;
  - Operadores comparativos;

  Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

  - nome;
  - nota da primeira prova;
  - nota da segunda prova.

  Depois de criada a lista:

  - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
  - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let students = [
  {
    name: "Carol",
    gradeOne: 8,
    gradeTwo: 6
  },

  {
    name: "Maria",
    gradeOne: 5,
    gradeTwo: 4
  },

  {
    name: "João",
    gradeOne: 7,
    gradeTwo: 9
  },

  {
    name: "Pedro",
    gradeOne: 6,
    gradeTwo: 7
  }
]

function averageCalculate(student) {
  return (student.gradeOne + student.gradeTwo) / 2
}

function approvedChecked(student) {
  let average = averageCalculate(student) // calcula média e atribui ao 'average'
  return average >= 7.0; // retorna true
}

// forEach pra poder passar por todos os estudantes
students.forEach(student => { // para cada estudante da lista calcula-se a média:
  let average = averageCalculate(student); // calcula aqui, executando a função
  
  if (approvedChecked(student)) { // se entrar lá na função cai aqui - true
    alert(`A média do(a) aluno(a) ${student.name} é: ${average.toFixed(2)} 
  \nParabéns, ${student.name}! Você foi aprovado no concurso!`)
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é: ${average.toFixed(2)}
  \nNão foi dessa vez, ${student.name}! Tente novamente!`);
  }
})