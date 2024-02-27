const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 3;

const grupos = (arr, tamanho) => {
    let grupoCompleto = Math.floor(arr.length / tamanhoDoGrupo)
    let indexStart = 0

    for (let i = 0; i <= grupoCompleto; i++) {
        if (i !== grupoCompleto) { 
            console.log(`Grupo ${i+1}: ${arr.slice(indexStart,indexStart+tamanhoDoGrupo).join(', ')}.`)
            indexStart += tamanhoDoGrupo
        } else {
            if (indexStart < arr.length) {
                console.log(`Grupo ${i+1}: ${arr.slice(indexStart).join(', ')}.`)
            }
        }
    }
}

grupos(nomes, tamanhoDoGrupo)