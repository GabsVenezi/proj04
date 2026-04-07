let valor = Number(prompt("Insira o valor da compra:"))
let valorComDesconto = Number(valor -(valor*0.1))

if (valor >= 100) {
    alert(`Você ganhou um desconto de 10%. O valor final de sua compra é R$ ${valorComDesconto}`)
} else { 
    alert("Você não tem direito ao desconto.")
}