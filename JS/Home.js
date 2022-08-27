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

//  barra de pesquisa         /////////
let pesquisa = document.getElementById("search-bar");
function procura() {
    let palavraDigitada = pesquisa.value;

    return pesquisa;
};
procura();

// carregamento dinamico do carrossel-produtos   //////
const carouselItems = [
    {
        imagem: "./Img/clientes/pc-gamer-grande.png",
        link: "menuTotal.html",
        linkTitle: "Pc-Gamer",
        title: "Tudo para você compor aquele",
        paragrafo: "Jogar com seus amigos é muito bom!! Com os equipamentos certos então a diversão fica completa!! Veja os novos produtos .."
    },
    {
        imagem: "./Img/clientes/noteBook Grande.png",
        link: "menuTotal.html",
        linkTitle: "Aqui",
        title: "Trabalho, Estudo...acesse ..",
        paragrafo: "E veja as diversas opções desse equipamento fundamental para o seu dia a dia!!."
    },
    {
        imagem: "./Img/clientes/oculos jogos Grande.png",
        link: "menuTotal.html",
        linkTitle: " Ingresse  ",
        title: "Diversão e novidades..acesse e ..",
        paragrafo: "Veja o que há de mais novo.. do que está em alta .. e os queridinhos do mundo Gamer!!.."

    }
]

function renderizacaoCarouselItems() {
    let items = document.getElementById('#carousel-produtos')
    let template = "";

    for (let index = 0; index < carouselItems.length; index++) {
        const elemento = carouselItems[index];

        template += `   <div class="carousel-item active">
        <img ${elemento.imagem}>
        <div class="carousel-caption d-none d-md-block">
            <h5>${elemento.title}</h5> <a ${elemento.link}>${elemento.linkTitle} </a></h5>
            <p>${elemento.paragrafo}</p>
        </div>`

    }
    items.innerHTML = template;
}

// carregamento dinamico de jogos-online ///////
const jogosOnline = [
    {
        imagem: "./Img/PUBG-Battlegrounds-900x503 1.png",
        link: "https://na.battlegrounds.pubg.com",
        descricao: "- é um jogo do gênero battle royale, uma mistura de sobrevivência e exploração de territórios.",
    },
    {
        imagem: "./Img/minecraft.png",
        link: "https://www.minecraft.net/pt-pt",
        descricao: "- A ideia básica desse jogo que conquista multidões é a construção por blocos. Os competidores precisam recolher recursos para que possam sobreviver, criando ambientes de maneira criativa.",
    },
    {
        imagem: "./Img/Fortinite.png",
        link: "https://www.epicgames.com/fortnite/pt-BR/home",
        descricao: " - Um dos jogos mais populares e celebrados em todo o mundo, Fortnite foi lançado em 2017 e atraiu 125 milhões de jogadores somente no seu primeiro ano de estreia.",
    },
    {
        imagem: "./Img/leagueOflegends.png",
        link: "https://www.leagueoflegends.com/pt-br/",
        descricao: "Conhecido como LOL - é o favorito entre os gamers, uma verdadeira febre no mundo dos jogos online! - O League of Legends conta com competições internacionais enormes, reunindo fãs de todos os lugares do mundo.",

    },

];

function rendenizarJogosOnline() {
    let jogosNet = document.getElementsById("#jogos-online")
    template = "";

    for (let index = 0; index < jogosOnline.length; index++) {
        const jogos = jogosOnline[index];

        template += `<div class="item obj-1">
        <img ${jogos.imagem}>
        <p><a ${jogos.link}</a> ${jogos.descricao}</p></div>`

    }
    jogosNet.innerHTML = template;
}


// cadastro email ///////
let email = document.getElementById("campo-email");
function sendEmail() {
    let emailDigitado = email.value;
    console.log(emailDigitado);
}
sendEmail();