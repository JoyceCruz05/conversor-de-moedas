document.addEventListener("DOMContentLoaded", function () {
  const converterBtn = document.getElementById("converterBtn");
  const resultadoDiv = document.createElement("div");
  resultadoDiv.id = "resultado";
  document.querySelector(".content").appendChild(resultadoDiv);

  converterBtn.addEventListener("click", function () {
    let taxaCambioDolar = 5.95;
    let taxaCambioEuro = 6.5;
    let taxaCambioWon = 0.004;

    let moeda = prompt(
      "Escolha uma moeda para converter em Reais: 'won', 'dolar' ou 'euro':"
    ).toLowerCase();

    if (moeda === "won" || moeda === "dolar" || moeda === "euro") {
      let valor = parseFloat(prompt(`Digite um valor em ${moeda}:`));

      if (!isNaN(valor)) {
        let valorReais;
        if (moeda === "won") {
          valorReais = valor * taxaCambioWon;
        } else if (moeda === "dolar") {
          valorReais = valor * taxaCambioDolar;
        } else {
          valorReais = valor * taxaCambioEuro;
        }
        resultadoDiv.textContent = `O valor em Reais é: R$ ${valorReais.toLocaleString(
          "pt-BR",
          { minimumFractionDigits: 2, maximumFractionDigits: 2 }
        )}`;
      } else {
        resultadoDiv.textContent = "Valor inválido! Digite um número.";
      }
    } else {
      resultadoDiv.textContent =
        "Moeda inválida! Por favor, escolha 'won', 'dolar' ou 'euro'.";
    }
  });
});