//   menu-hamburguer  /////
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);

    }
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            console.log(index / 7 + 0.3);
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s')
        })
    }
    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
        this.activeClass.contains('active')
        this.currentTarget.setAttribute('aria-expanded', active);
        if (active) {
            this.currentTarget.setAttribute('aria-label', 'Fechar Menu')
        } else {
            this.currentTarget.setAttribute('aria-label', 'Abrir Menu')
        }

    }

    addClickEvent() {

        this.mobileMenu.addEventListener("click", this.handleClick);

    }
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
)
mobileNavbar.init()

// ----barra de pesquisa -----------//
let pesquisa = document.getElementById("search-bar");
function procura() {
    let palavraDigitada = pesquisa.value;
    console.log(palavraDigitada);
    return pesquisa;
};
procura();

// ------  carregamento dinamico da secao novidades   -------- ///////
const produtosNovos = [
    {
        imagem: "./Img/produtos/fifa-22-new-features.png",
        descricaoImg: 'Imagem Jogo Fifa 2022',
        link: "https://www.ea.com/pt-br/games/fifa/fifa-23",
        name: 'EletronicArts (EA)',
        descricao: 'comunicou encerramento de pareceria com a FIFA, com isso a desenvolvedora oficializou que o novo nome da marca será mesmo EASportsFC, novidades mais concretas em 2023... Enquanto isso curtam o lançamento do FIFA 2022.'
    },
    {
        imagem: "./Img/produtos/callDuty.png",
        descricaoImg: 'Imagem Capa Jogo Call of Duty',
        link: "https://www.callofduty.com/br/pt",
        name: 'Call of Duty',
        descricao: ': Modern Warfare II - novo jogo popular da franquia em primeira pessoa da Actvision chega em 28 de outubro para PlayStation 5 e 4, Xbox Series X/S e One, e para PC via os serviços de Battle.net e Steam. ( No Brasil será vendido exclusivamente em formato digital.)'
    },
]

function rendenizacaoNovosProdutos() {
    let novosProdutos = document.getElementById('novos-produtos');
    template_B = "";

    for (let index = 0; index < produtosNovos.length; index++) {
        const produtos = produtosNovos[index];

        template_B += `<div class="new item${index + 1}" >
        <img src="${produtos.imagem}" alt="${produtos.descricaoImg}">
        <p id='novidades'><a href="${produtos.link}" target="_blank">${produtos.name}</a> ${produtos.descricao}</p>
    </div>`
    }
    console.log(template_B)
    novosProdutos.innerHTML = template_B
}
rendenizacaoNovosProdutos()

// ------ carregamento dinamico de jogos-online  --------- ///////
const jogosOnline = [
    {
        imagem: "./Img/PUBG-Battlegrounds-900x503 1.png",
        link: "https://na.battlegrounds.pubg.com",
        name: 'Battlegrounds(PUBG)',
        descricao: "- é um jogo do gênero battle royale, uma mistura de sobrevivência e exploração de territórios.",
    },
    {
        imagem: "./Img/minecraft.png",
        link: "https://www.minecraft.net/pt-pt",
        name: 'MineCraft',
        descricao: "- A ideia básica desse jogo que conquista multidões é a construção por blocos. Os competidores precisam recolher recursos para que possam sobreviver, criando ambientes de maneira criativa.",
    },
    {
        imagem: "./Img/Fortinite.png",
        link: "https://www.epicgames.com/fortnite/pt-BR/home",
        name: 'Fortinite',
        descricao: " - Um dos jogos mais populares e celebrados em todo o mundo, Fortnite foi lançado em 2017 e atraiu 125 milhões de jogadores somente no seu primeiro ano de estreia.",
    },
    {
        imagem: "./Img/leagueOflegends.png",
        link: "https://www.leagueoflegends.com/pt-br/",
        name: 'League of Legends',
        descricao: "Conhecido como LOL - é o favorito entre os gamers, uma verdadeira febre no mundo dos jogos online! - O League of Legends conta com competições internacionais enormes, reunindo fãs de todos os lugares do mundo.",

    },
];

function rendenizarJogosOnline() {
    let jogosNet = document.getElementById("jogos-online-list")
    template_C = "";

    for (let index = 0; index < jogosOnline.length; index++) {
        const jogos = jogosOnline[index];

        template_C += `<div class="item obj-${index + 1}">
        <img src="${jogos.imagem}">
        <p><a href="${jogos.link}" target="_blank">${jogos.name}</a>${jogos.descricao}</p></div>`

    }
    console.log(template_C)
    jogosNet.innerHTML = template_C
}
rendenizarJogosOnline()

// ------ cadastro email  ---------------- ///////
let email = document.getElementById("campo-email");
function sendEmail() {
    let emailDigitado = email.value;
    console.log(emailDigitado);
}
sendEmail();