let imput = document.getElementById("fruta")
let button = document.getElementById("button")
let lista = document.getElementById("compras")
let kilo = document.getElementById("kg")
let lista2 = document.getElementById("compras2")
let exportButton = document.getElementById("export")
let arraydecompras = []
let arraykg = []

function mostranatela() {
    let neulist = " "

    arraydecompras.forEach(tarefa => {
        neulist = neulist + `
        <li>
        <p>${tarefa}</p>
        </li>`

    })

    lista.innerHTML = neulist
}

function mostrarkg() {
    let kglist = ""

    arraykg.forEach(peso => {
        kglist = kglist + `
        <li>
        <p>${peso}</p>
        </li>`
    })

    lista2.innerHTML = kglist
}

function ListaCompra() {
    arraydecompras.push(imput.value)
    mostranatela()
    arraykg.push(kilo.value)
    mostrarkg()
}


button.addEventListener("click", ListaCompra)
mostranatela()
mostrarkg()

function exportarComoTexto() {
    let textoExportado = "Produto - Quantidade\n";
    arraydecompras.forEach((item, index) => {
        textoExportado += `${item} - ${arraykg[index]}\n`
    })
    // Criar um link de download
    let blob = new Blob([textoExportado], { type: "text/plain" })
    let url = URL.createObjectURL(blob)
    let a = document.createElement("a")
    a.href = url
    a.download = "lista_de_compras.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}


exportButton.addEventListener("click", exportarComoTexto)
