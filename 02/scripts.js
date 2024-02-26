const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

const grupos = (arr, tamanho) => {
    let grupoCompleto = Math.floor(arr.length / 4)
    let indexStart = 0

    for (let i = 0; i <= grupoCompleto; i++) {
        if (i !== grupoCompleto) { 
            console.log(`Grupo ${i+1}: ${arr.slice(indexStart,indexStart+4).join(', ')}.`)
            indexStart += 4
        } else {
            console.log(`Grupo ${i+1}: ${arr.slice(indexStart).join(', ')}.`)
        }
    }
}

grupos(nomes, tamanhoDoGrupo)