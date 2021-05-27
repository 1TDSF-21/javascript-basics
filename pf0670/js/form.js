
function validaCamposForm(){
    //ARRAY DE ELEMENTOS
    const listaDeInputs = document.querySelectorAll('input');

    //CRIANDO VARIÁVEL DE CONTROLE
    let controle = true;

    //ITERAR A LISTA DE INPUTS
    for (elemento of listaDeInputs) {
        if(elemento.value == '' ){
            elemento.style.border = '2px solid #ff0000';
            controle = false;   
        }else{
            elemento.style.border = '1px solid #000000';
        }
    }
    return controle;
}

