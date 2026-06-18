// Banco de dados acadêmico
const database = {
    fatos: [
        {
            titulo: "Física Quântica",
            conteudo: "O efeito túnel quântico permite que partículas atravessem barreiras que classicamente seriam intransponíveis. Este fenômeno é crucial para o funcionamento de dispositivos semicondutores e para a fusão nuclear nas estrelas.",
            fonte: "Princípios de Mecânica Quântica - Dirac"
        },
        {
            titulo: "Biologia Molecular",
            conteudo: "O DNA humano contém aproximadamente 3 bilhões de pares de bases. Se desenrolado, o DNA de uma única célula humana teria cerca de 2 metros de comprimento.",
            fonte: "Biologia Molecular da Célula - Alberts"
        },
        {
            titulo: "Astronomia",
            conteudo: "A luz que vemos do Sol foi gerada há cerca de 8 minutos e 20 segundos. No entanto, essa energia levou entre 100.000 e 1.000.000 de anos para viajar do núcleo solar até a superfície.",
            fonte: "Astrofísica Estelar - NASA"
        },
        {
            titulo: "Matemática",
            conteudo: "O número π (pi) é uma constante matemática irracional que representa a razão entre a circunferência e o diâmetro de um círculo. Já foi calculado com mais de 31 trilhões de dígitos.",
            fonte: "História da Matemática - Boyer"
        },
        {
            titulo: "Química",
            conteudo: "A água é uma das poucas substâncias que se expande quando congela. Isso ocorre devido à estrutura cristalina hexagonal que as moléculas formam no estado sólido.",
            fonte: "Química Geral - Atkins"
        }
    ],
    curiosidades: [
        {
            titulo: "Curiosidade Científica",
            conteudo: "Os coalas têm impressões digitais tão similares às humanas que podem confundir investigadores forenses. Mesmo sob microscópio eletrônico, é quase impossível distinguir as duas.",
            fonte: "Journal of Forensic Sciences"
        },
        {
            titulo: "Curiosidade Histórica",
            conteudo: "A Universidade de Bolonha, fundada em 1088, é considerada a universidade mais antiga do mundo ocidental ainda em funcionamento. Inicialmente, era uma escola de direito.",
            fonte: "Registros Históricos da Universidade de Bolonha"
        },
        {
            titulo: "Curiosidade Tecnológica",
            conteudo: "O primeiro e-mail da história foi enviado por Ray Tomlinson em 1971. Ele usou o símbolo @ para separar o nome do usuário do nome da máquina, criando o formato que usamos até hoje.",
            fonte: "História da Internet - MIT"
        },
        {
            titulo: "Curiosidade Linguística",
            conteudo: "A palavra 'set' tem o maior número de definições no dicionário Oxford English Dictionary, com mais de 430 significados diferentes como verbo, substantivo e adjetivo.",
            fonte: "Oxford English Dictionary"
        }
    ],
    citacoes: [
        {
            titulo: "Citação Filosófica",
            conteudo: "Só sei que nada sei.",
            fonte: "Sócrates (470-399 a.C.)"
        },
        {
            titulo: "Citação Científica",
            conteudo: "A imaginação é mais importante que o conhecimento. O conhecimento é limitado, enquanto a imaginação abraça o mundo inteiro.",
            fonte: "Albert Einstein"
        },
        {
            titulo: "Citação Matemática",
            conteudo: "A matemática é a rainha das ciências e a aritmética é a rainha da matemática.",
            fonte: "Carl Friedrich Gauss"
        },
        {
            titulo: "Citação Literária",
            conteudo: "A educação é a arma mais poderosa que você pode usar para mudar o mundo.",
            fonte: "Nelson Mandela"
        }
    ],
    datas: [
        {
            titulo: "Evento Histórico",
            conteudo: "Em 20 de julho de 1969, Neil Armstrong tornou-se o primeiro ser humano a pisar na Lua, marcando um dos maiores feitos da exploração espacial.",
            fonte: "NASA Historical Archives"
        },
        {
            titulo: "Descoberta Científica",
            conteudo: "Em 1928, Alexander Fleming descobriu acidentalmente a penicilina, revolucionando a medicina moderna e salvando milhões de vidas.",
            fonte: "História da Medicina - BMJ"
        },
        {
            titulo: "Marco Tecnológico",
            conteudo: "Em 1989, Tim Berners-Lee propôs a World Wide Web enquanto trabalhava no CERN, transformando fundamentalmente a comunicação global.",
            fonte: "CERN Historical Records"
        }
    ]
};

// Array de curiosidades aleatórias
const funFacts = [
    "O cérebro humano gera cerca de 70.000 pensamentos por dia.",
    "Uma nuvem pode pesar mais de 1 milhão de toneladas.",
    "O som pode viajar 4 vezes mais rápido na água do que no ar.",
    "Existem mais estrelas no universo do que grãos de areia em todas as praias da Terra.",
    "O coração de um camarão está localizado em sua cabeça.",
    "A Torre Eiffel pode crescer 15 cm durante o verão devido à expansão térmica.",
    "Os humanos compartilham 50% do DNA com as bananas."
];

let currentSection = 'fatos';
let contentCounter = 0;

// Função para obter elemento aleatório de um array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Função para gerar conteúdo baseado na seção selecionada
function generateContent() {
    const sectionData = database[currentSection];
    const randomItem = getRandomElement(sectionData);
    
    return `
        <div class="content-card">
            <h3>${randomItem.titulo}</h3>
            <p>${randomItem.conteudo}</p>
            <p class="meta">Fonte: ${randomItem.fonte}</p>
        </div>
    `;
}

// Função para atualizar o conteúdo da página
function updateContent() {
    const contentDiv = document.getElementById('random-content');
    contentDiv.innerHTML = generateContent() + generateContent() + generateContent();
    
    // Atualizar contador
    contentCounter++;
    document.getElementById('counter').textContent = contentCounter;
    
    // Atualizar curiosidade aleatória
    document.getElementById('random-fun-fact').textContent = getRandomElement(funFacts);
    
    // Atualizar data
    updateDate();
    
    // Adicionar animação
    contentDiv.style.animation = 'none';
    contentDiv.offsetHeight; // Trigger reflow
    contentDiv.style.animation = 'fadeIn 0.6s ease-out';
}

// Função para mudar a seção
function changeSection(section) {
    currentSection = section;
    
    // Atualizar botões de navegação
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Atualizar conteúdo
    updateContent();
}

// Função para atualizar a data atual
function updateDate() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    };
    document.getElementById('current-date').textContent = now.toLocaleDateString('pt-BR', options);
}

// Função para atualizar conteúdo (chamada pelo botão)
function refreshContent() {
    updateContent();
    
    // Animação no botão
    const button = document.getElementById('refresh-btn');
    button.style.animation = 'none';
    button.offsetHeight;
    button.style.animation = 'pulse 0.3s ease-out';
}

// Inicialização da página
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    updateDate();
    
    // Atualizar curiosidade aleatória a cada 30 segundos
    setInterval(() => {
        document.getElementById('random-fun-fact').textContent = getRandomElement(funFacts);
    }, 30000);
});

// Adicionar efeito de teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'r' || e.key === 'R') {
        refreshContent();
    } else if (e.key >= '1' && e.key <= '4') {
        const sections = ['fatos', 'curiosidades', 'citacoes', 'datas'];
        const index = parseInt(e.key) - 1;
        changeSection(sections[index]);
        
        // Atualizar visualmente os botões
        const buttons = document.querySelectorAll('.nav-btn');
        buttons.forEach(btn => btn.classList.remove('active'));
        buttons[index].classList.add('active');
    }
});
