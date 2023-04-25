let contador = 0

const contaClique = () => {
    contador += 1
    console.log(`O botão foi clicado ${contador} vezes.`)
}

//OUITRA OPÇÃO

function contaClique(){
    contador +=1

    const frase = `O botão foi clicado ${contador} vezes.`

    console.log(frase)
}