let pagInicial = document.getElementById('pagInicial'),
    pagAddPalavra = document.getElementById('pagAddPalavra'),
    pagJogo = document.getElementById('pagJogo');

let btnAddPalavra = document.getElementById('btnAddPalavra'),
    btnComecarJogo = document.getElementById('btnComecarJogo'),
    btnSalvarComecar = document.getElementById('salvarComecar'),
    btnCancelar = document.querySelectorAll('.cancelar'),
    btnNovoJogo = document.getElementById('novoJogo'),
    keys = document.querySelectorAll('.key'),
    nAleatorio, palavraEscolhida,
    palavraDigitada = document.getElementById('palavraDigitada'),
    listaLetras = [],
    tentativas = 6,
    palavras = ['BANDEIRA','ALMOFADA','BORRACHA','PULSEIRA', 'TECLADO', 'SABONETE', 'TELEFONE','VASSOURA', 'GUITARRA','CAMISETA','COBERTOR', 'ALFINETE', 'BOLSA','FORNO', 'ARMARIO', 'CORNETA','LIXEIRA','TESOURA','SERINGA'];
    
function geraPalavra() {
    nAleatorio = Math.floor(Math.random() * palavras.length);
    return palavras[nAleatorio];
};

btnComecarJogo.addEventListener('click', function(){
    palavraEscolhida = geraPalavra();
    montaForca();
    
    pagInicial.style.display = 'none';
    pagJogo.style.display = 'flex';
    montaPalavra();
});

btnAddPalavra.addEventListener('click', function() {
    pagInicial.style.display = 'none';
    pagAddPalavra.style.display = 'flex';
});

btnCancelar[0].addEventListener('click', function() {
    location.reload();
    pagInicial.style.display = 'block';
    pagAddPalavra.style.display = 'none';
});

btnSalvarComecar.addEventListener('click', function(){
    palavras.push(palavraDigitada.value.toUpperCase());
    montaForca();
    palavraEscolhida = geraPalavra();
    pagJogo.style.display = 'flex';
    pagAddPalavra.style.display = 'none';
    montaPalavra();
    
});

btnNovoJogo.addEventListener('click', function(){ //-----------------------------
    listaLetras = [''];
    tentativas = 6;
    pincel.clearRect(0, 0, canvas.width, canvas.height);
    resultado.innerHTML = '';

    montaForca();
    keys.forEach(function(key){
        key.style.color = 'inherit';
        key.style.backgroundColor = 'inherit';
        
    });
    

    palavraEscolhida = geraPalavra();
    pagInicial.style.display = 'none';
    pagJogo.style.display = 'flex';
    montaPalavra();
});

btnCancelar[1].addEventListener('click', function() {
    location.reload();
    pagInicial.style.display = 'block';
    pagAddPalavra.style.display = 'none';
});

//página jogo

function montaPalavra() {
    let palavraSecreta = document.getElementById('palavraSecreta');
    palavraSecreta.innerHTML = '';

    for (let index = 0; index < palavraEscolhida.length; index++) {
        if(listaLetras[index] == undefined) {
            listaLetras[index] = '&nbsp';
            palavraSecreta.innerHTML += "<div class='letras'>"+ listaLetras[index] +"</div>"
        }else{
            palavraSecreta.innerHTML += "<div class='letras'>"+ listaLetras[index] +"</div>"

        }
    }
}

function verificaLetra(letra) {
    if(tentativas > 0) {
        document.getElementById('tecla-'+letra).style.color = '#ccc';
        document.getElementById('tecla-'+letra).style.backgroundColor = 'rgba(10,56,113,.8)';
        comparaListas(letra);
        montaPalavra();
    }
}

function comparaListas(letra) {
    const posicao = palavraEscolhida.indexOf(letra);
    if(posicao < 0) {
        tentativas --;
        document.getElementById('tecla-'+letra).style.backgroundColor = 'rgba(158,30,21,.8)';
        if(tentativas == 5){
            desenhaCabeca();
        }else if(tentativas == 4) {
            desenhaTronco();
        }else if(tentativas == 3){
            desenhaBracoEsq();
        }else if(tentativas == 2){
            desenhaBracoDir();
        }else if(tentativas == 1){
            desenhaPernaEsq();
        }else if(tentativas == 0){
            desenhaPernaDir();
        };
    }
    else {
        for (let index = 0; index < palavraEscolhida.length; index++) {
            if(palavraEscolhida[index] == letra) {
                listaLetras[index] = letra;
            }
        }
    }

    let vitoria = true;
    for (let index = 0; index < palavraEscolhida.length; index++) {
        if(palavraEscolhida[index] != listaLetras[index]) {
            vitoria = false;
        }
    }

    if(vitoria == true) {
        //informa ganhou
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = 'Parabéns, Você acertou!';
        resultado.style.color = 'green';
    }
    if(tentativas == 0) {
        resultado.innerHTML = 'Que pena! Você errou.';
        resultado.style.color = 'red';
    }
}
