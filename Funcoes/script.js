//exemplo functions em javascript
//pode ou não ter parametro (diferente de argumentto)
//não precisa de return nescessariamente e não tem limite de codigo     

//dif parametro e argumentos
//argumentos também podem ser funcoes (objetos)


function areaQuadrado() {
    console.log('function ativa');
}

areaQuadrado();

//ex com parametro
//como uma variavel dentro da função

function areaQuadrado(lado){
    //O VALOR DEFINIDO AQUI É O VALOR DE RETORNO DIRETO DA FUNCTIONE
    return lado * lado;
}

console.log(areaQuadrado(2));

//function sempre tem que ser executada
//quando não é executada retorna a função em si ex abaixo
function pi(){
    return 3.14;
}
var total = 5 * pi();

console.log(total);


//exemplo parametros dif de argumentos ex
            //parametros
function imc(peso, altura){
    const imc = peso / (altura ** 2);
    return imc;
}

// o que vai ser passado para executar a function são os argumentos
imc(80, 180)
imc(60, 1.70)

// exemplo de function sem parametros

function corFavorita(cor){

    if(cor === 'azul'){
        return  'Eu gosto do mar';
    }
    else if (cor === 'verde'){

        return 'Eu gosto de mato';
    }   
        else{

        return 'Eu não gosto de nada';
    }
}

corFavorita();

// função com evento ex function anonima
//ex callback function que ocorre apos ação
addEventListener('click', function(){
    console.log('Clicou ? não clicou?');
});