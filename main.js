function tocaSom (idElementoAudio) {   

    document.querySelector(idElementoAudio).play();
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');
    
//contador
// let contador = 0; foi declarado agora, dentro do

//Estrutura de repetição While (enquanto).While é apenas uma das estruturas de repetição possivel. A 

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];  
    const idAudio = `#som_${instrumento}`;//template string
   // console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio)
    }
    // contador = contador + 1; comentado pois com a adição do ++ no for, essa linha foi subistiduida 

    console.log(contador);
}

//Funções anonimas (function ()) só podem ser usadas quando são o valor de algum atributo ou armazenadas com valor fariavel