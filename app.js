// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value;
    if (!nombreAmigo) {
        alert('Debes ingresar un nombre');  
        return;
    }

    nombresAmigos.push(nombreAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    mostrarAmigos();
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    nombresAmigos.forEach((nombre) => {
        let item = document.createElement('li');
        item.textContent = nombre;
        listaAmigos.appendChild(item);
    });
}
