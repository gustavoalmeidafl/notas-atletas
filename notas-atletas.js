let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

function calcularMediaValida(notas) {
  const ordenadas = [...notas].sort((a, b) => a - b);
  const computadas = ordenadas.slice(1, 4)
  const soma = computadas.reduce((acc, val) => acc + val, 0);
  return soma /computadas.length
}

function mostrarResultado(atletas) {
  for (let i = 0; i < atletas.length; i++) {
    const atletas = atletas[i]
    const mediaValida = calcularMediaValida(atletas.notas);

    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(',')}`);
    console.log(`Média Válida: ${mediaValida}`);
    console.log('');
  }
}
