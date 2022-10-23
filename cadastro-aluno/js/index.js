const Nome = prompt('Nome do aluno: ')
const course = prompt('Curso: ')
const period = prompt('Período: ')
const birth = prompt('Data de nascimento: ')

alert (
    "O aluno foi cadastrado com sucesso!\n " +
    "\n Nome do aluno: " + Nome +
    "\n Curso: " + course +
    "\n Periodo: " + period +
    "\n Idade: " + (2022 - birth)
)