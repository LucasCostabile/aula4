// Função para receber números do usuário
function pegaNumbero() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
  
    return [num1, num2];
  }
  
  // Função para verificar se um número é múltiplo do outro
  function ehMultiplo(num1, num2) {
    return num1 % num2 === 0 || num2 % num1 === 0;
  }
  
  // Função para exibir o resultado
  function exibeResultado(result) {
    if (result) {
      console.log("Os números são múltiplos um do outro.");
    } else {
      console.log("Os números não são múltiplos um do outro.");
    }
  }
  
  // Fluxo principal do programa
  function princial() {
    const [num1, num2] = pegaNumbero();
    const result = ehMultiplo(num1, num2);
    exibeResultado(result);
  }
  
  // Chama a função principal para iniciar o programa
princial();