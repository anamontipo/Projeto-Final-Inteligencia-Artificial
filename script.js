const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Moda Outono-Inverno: seu guia de tendências para a temporada!",
        alternativas: [
            {
                texto: "Conjuntos de alfaiataria",
                afirmacao:"Tendência na temporada,peças estruturadas que oferecem um visual mais elegante e sofisticado.. "
            {
                texto: "Trench coat",
                afirmacao: "O sobretudo queridinho da moda inverno volta a brilhar nos looks de outono"
            }
        ]
    },
    {
        enunciado: "Descobrir seu estilo é uma forma de autoconhecimento. É a expressão de quem você é, das suas paixões e personalidade. E isso muda com as fases da vida, o humor e com os planetas.",
        alternativas: [
            {
                texto: "Preste atenção no que gosta e crie seu estilo próprio, não se limite a rótulos. Procurar inspirações e testar novas combinações pode ser um ótimo caminho.",
                afirmacao: "Ter criatividade em criar novos looks."
            },
            {
                texto: "Seguir tendências ou seguir um estilo?",
                afirmacao: "As tendências servem para dar um twist no seu estilo. "
            }
        ]
    },
    {
        enunciado: "Seguir tendências ou seguir um estilo?",
        alternativas: [
            {
                texto: "Gosto de acompanhar o que está em alta e adicionar no meu armário o que me chama a atenção ou o que combina com meu estilo.",
                afirmacao: "Gosta de acompanhar a moda e comprar apenas oque chama sua atenção."
            },
            {
                texto: "Tentar novas combinações com as tendências e incorporá-las ao seu estilo próprio é o que faz da moda algo tão divertido",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
