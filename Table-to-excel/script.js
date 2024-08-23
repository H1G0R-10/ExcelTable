function adicionarItem(){
    // Obter os valores digitados pelo usuario
    var nome = document.getElementById("nome").value 
    var valor = document.getElementById("valor").value 
    var quantidade = document.getElementById("quantidade").value
    
    if(!nome || !valor || !quantidade){
        alert("Insira todos os valores!!!")
        return
    }
   
    // Criar uma lçinha na tabela
    var tabela = document.getElementById("tabela").getElementsByTagName("tbody")[0]
    var novalinha = tabela.insertRow(tabela.rows.length)
    var celulaNome = novalinha.insertCell(0)
    var celulaValor = novalinha.insertCell(1)
    var celulaQuantidade = novalinha.insertCell(2)

    // Preencher as célular com os valores
    celulaNome.innerHTML = nome
    celulaValor.innerHTML = valor
    celulaQuantidade.innerHTML = quantidade

    // Limpar os campos
    document.getElementById("nome").value = ""
    document.getElementById("valor").value = ""
    document.getElementById("quantidade").value = ""
}

function exportarParaExcel(){
    var tabela = document.getElementById("tabela")
    var nomeArquivo = "tabela_produtos.xlsx"
    var wb = XLSX.utils.table_to_book(tabela, {sheet: "Tabela de Produtos"})
    XLSX.writeFile(wb, nomeArquivo)
}

// const exportarParaExcel = () => {XLSX.writeFile( XLSX.utils.table_to_book(document.getElementById("tabela"), {sheet: "Tabela de Produtos"}), "tabela_produtos.xlsx")}