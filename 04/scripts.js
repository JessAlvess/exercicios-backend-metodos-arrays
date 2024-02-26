const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function queue(list, type, name = 'Nome do paciente') {
    switch (type) {
        case 'atender':
            list.shift()
            return console.log(list);
            break;
    
        case 'agendar':
            list.push(`${name}`)
            return console.log(list)
            break;
    }
}

queue(pacientes, 'atender')
queue(pacientes, 'atender')
