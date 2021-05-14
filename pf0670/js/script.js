//DECLARAÇÃO DE VARIÁVEIS E CONSTANTES
        //Diferença entre var/let/const

        //Não precisam ser tipadas, ou seja, você não precisa definir o tipo
        //Ex: int nomeVariavel = valor; <-- Não está correto este tipo de declaração
        //Ex: [var/let/const] nomeVariavel = valor; <-- Está correto.

        //Para os nomes de variáveis, utilizar a base das linguagem populares e aplicar o camelCase.
        //Ex: var var  = valor; <-- Não está correto este tipo de declaração
        //Ex: var nome = nomeVariavel = valor; <-- Está correto.

        //var = Escopo Global ou Bloco / não precisa inicialização
        var nome = "";
        //let = Escopo local / não precisa inicializalar
        let teste = "";
        //const = Escopo local / Obrigatório inicialização. <--- muito utilizada
        const exemplo = "";

        //HOYSTING = IÇAR/LEVANTAR <--- Quer dizer que as variáveis no JS vão ser carregadas ou assimiladas antes da declaração propriamente dita.
        carro = "cor";
        var carro;
        console.log("Valor de carro : " + carro);

        // ARRAYS / VETORES

        //Criando um vetor.
        var linguagens = ['java', 'c#', 'Python'];
        //Acessando as posições do vetor e apresentando os tipos de saída do console.
        console.log("Posição 0 - " + linguagens[0]);
        console.warn("Posição 1 - " + linguagens[1]);
        console.info("Posição 2 - " + linguagens[2]);
        //Causando uma exceção, acessando uma posição do array que não existe.
        console.error("Posição 3 / inexistente - " + linguagens[-1]);
        //Apresentando o conteúdo do vetor.
        console.table("Conteúdo do vetor " + linguagens);
        console.table(linguagens);

        //ITERANDO O VETOR ATRAVÉS DE LAÇOS FOR
        for (let x = 0; x < linguagens.length; x++) {
            console.log("Linguagem : " + x + " - " + linguagens[x]);
        }

        console.log("FOR-IN")
        //FOR IN - que retorna o index do vetor
        for (lingua in linguagens) {
            console.log("Linguagem : " + lingua + " - " + linguagens[lingua]);
        }
        console.log("FOR-IN");
        console.log("FOR-OF");
        for (lingua of linguagens) {
            console.log("Linguagem : " + linguagens.indexOf(lingua) + " - " + lingua);
        }
        console.log("FOR-OF");

        //DECLARAÇÃO DE VARIÁVEIS E CONSTANTES

        //Escrevendo na Tela
        document.write("Olá mundo!!")

        //IF TERNÁRIO                     TRUE    FALSE
        //var resultado = eval(12 % 3) ? "PAR" : "IMPAR";
        var resultado = eval(12 % 3) ? "PAR" : "IMPAR";
        console.log(resultado);



        //Comentário de Linhas
        /*
        ...Comentário de Bloco
        */

        //Pegando um seletor genérico
        const p1 = document.querySelector('p');
        window.name = "EXEMPLO";

        p1.textContent = window.navigator.userAgent;

        //Escutando um Evento
        p1.addEventListener('click', atualizador);

        //Função que será executada caso o EventListener escute algo
        function atualizador() {
            let nome = prompt('Digite o novo nome!');
            p1.textContent = 'Player 1 ' + nome;
        }