// 1° EXERCÍCIO, FAZER UMA FUNÇÃO QUE RETORNA A SEQUENCIA FIBONACCI E AVISE SE O NUMERO INFORMADO FAZ PARTE OU NÃO DA SEQUENCIA

function fibonacci(n) {
  const fib = [0,1]; //Primeiros números da sequência

  for(let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] +fib[i - 2]
  }

  return fib
}

function isFib(num) {
  // Inicializa a sequência com os primeiros números
  let fibSeq = [0, 1];
  let i = 2;

  // Gera a sequência até o número informado ou até ultrapassá-lo
  while (fibSeq[fibSeq.length - 1] < num) {
    fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
    i++;
  }

  // Verifica se o número informado está presente na sequência gerada
  if (fibSeq.includes(num)) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  } else {
    return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
  }
}

// 2° FAZER UM PROGRAMA QUE VERIFICA SE A LETRA A ESTÁ PRESENTE EM UMA STRING

function isLetterAPresent(string) {
  const regex = /[aáàãâä]+/i // VERIFICA A PRESENÇA DA LETRA A NA STRING

  if(regex.test(string)) {
    return "A letra 'a' está presente na string!"
  } else {
    return "A letra 'a' não está presente na string!"
  }
}

console.log(isLetterAPresent("Olá mundo!"));

// 3° EXERCÍCIO: DESCOBRIR O VALOR DE SOMA

const INDICE = 12
let SOMA = 0
let K = 1

while(K < INDICE) {
  K = K + 1
  SOMA = SOMA + K
}

console.log(`O valor de SOMA é: ${SOMA}`);

/* 4° EXERCÍCIO: EXERCÍCIO DE LÓGICA
 a - 1,3,5,7,9;
 b - 2, 4, 8, 16, 32, 64, 128;
 c - 0, 1, 4, 9, 16, 25, 36, 46; 
 d - 4, 16, 36, 64, 100;
 e - 1, 1, 2, 3, 5, 8, 13;
 f - 2, 10, 12, 16, 17, 18, 19, 20  
*/

// 5° EXERCÍCIO - LAMPADAS

// Minha solução seria inicialmente ligar o primeiro interruptor e aguardar alguns minutos, para que a lampada esquente, assim que passar esses minutos, eu imediatamente iria ligar o segundo e deixar ligado, assim, caso a sala que eu fosse estivesse com a lampada acessa então será do interruptor 2, mas se estiver apagada, testaria se esta quente ou não. Assim ao fazer este teste saberei qual lampada é de qual interruptor, como seria 2 idas, posso testar 2 lampadas, então deixaria marcado em um papeç, assim fazendo com que necessariamente a terceira seja a que sobrou.