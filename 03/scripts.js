const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function print(arr, position) {
    return console.log(`${arr.slice(position, position+3).join(' - ')}`)
}

print(nomes, posicao)