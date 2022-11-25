function tocaSomPom () {    
    document.querySelector('#som_tecla_pom').play();
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');
    
//contador
let contador = 0;

//Estrutura de repetição While (enquanto)
while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSomPom;
    contador = contador + 1;

    console.log(contador);
}