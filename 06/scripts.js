const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

function encontrarDono(pet) {
    for (const usuario of usuarios) {
        if (usuario.pets.includes(pet)) {
            return console.log(`O dono(a) do(a) ${pet} é o(a) ${usuario.nome}`);
        }
    }
    console.log(`Que pena ${pet}, não encontramos seu dono(a)`);
}

encontrarDono('Naninha')