function tocaSom (idElementoAudio) {   
    const elemento = document.querySelector(idElementoAudio);

    if (elemento && elemento.localName === 'audio') {
        // && coresponde ao 'e' no caso, se o elemento não for nule E for igual a audio....
        // != operador de não igualdade - diferente 
            elemento.play();
        }
        else {
       // alert('Elemento não encontrado')
       console.log('Elemento não encontrado ou seletor invalido')
        }
        
    
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

   // console.log(contador);

   //onkeudown - evento ocorrido ao apertar a tecla
    tecla.onkeydown = function (evento) {
        //console.log(evento.code) pesquisa de codigo para as telcas

        if (evento.code === 'Space' || evento.code === 'Enter') {  //(operadores de igualdade == ou === sendo o === mais seguro) (|| faz a função de 'ou' no caso de comparar nesta função se precionar espaço OU enter)
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}



//Funções anonimas (function ()) só podem ser usadas quando são o valor de algum atributo ou armazenadas com valor fariavel