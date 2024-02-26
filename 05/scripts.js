const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(arr, paciente) {
    arr.push(paciente)
    return arr.join(', ')
}

console.log(agendarPaciente(pacientes, 'Jessé'));

function atenderPaciente(arr, paciente) {
    arr.shift()
    return arr.join(', ')
}

console.log(atenderPaciente(pacientes));


function cancelarAtendimento(arr, paciente) {
    arr.splice(arr.indexOf(paciente), 1)
    return arr.join(', ')
}

console.log(cancelarAtendimento(pacientes, 'Maria'));
