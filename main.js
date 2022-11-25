function tocaSom (idElementoAudio) {   

    document.querySelector(idElementoAudio).play();
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');
    
//contador
let contador = 0;

//Estrutura de repetição While (enquanto).While é apenas uma das estruturas de repetição possivel.

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;
   // console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio)
    }
    contador = contador + 1;

    //console.log(contador);
}

//Funções anonimas (function ()) só podem ser usadas quando são o valor de algum atributo ou armazenadas com valor fariavel