/* =====================================================
   SCRIPT.JS V3 PREMIUM FINAL
   Kit Digital Receitas da Vovó
====================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* META PIXEL - VIEW CONTENT */
    if(typeof fbq === "function"){
        fbq('track','ViewContent',{
            content_name:"Kit Digital Receitas da Vovó",
            content_category:"Ebook de Receitas",
            value:11.90,
            currency:"BRL"
        });
        console.log("Meta Pixel: ViewContent enviado");
    }

    /* SCROLL SUAVE */
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link=>{
        link.addEventListener("click",function(e){
            const destino = document.querySelector(this.getAttribute("href"));
            if(destino){
                e.preventDefault();
                destino.scrollIntoView({behavior:"smooth", block:"start"});
            }
        });
    });

/* =====================================================
   FAQ (ACORDEÃO)
====================================================== */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const item = question.parentElement;

        // Fecha os outros
        document.querySelectorAll(".faq-item").forEach((faq) => {
            if (faq !== item) {
                faq.classList.remove("active");
            }
        });

        // Abre ou fecha o clicado
        item.classList.toggle("active");

    });

});

    /* BOTÃO VOLTAR AO TOPO */
    const backTop = document.querySelector(".back-top");
    if(backTop){
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 500){
                backTop.classList.add("show");
            }else{
                backTop.classList.remove("show");
            }
        });
        backTop.addEventListener("click",()=>{
            window.scrollTo({top:0, behavior:"smooth"});
        });
    }

    /* ANIMAÇÃO AO ROLAR */
    const elementos = document.querySelectorAll(
        ".benefit-card, .number-card, .learn-card, .recipe-card, .bonus-card"
    );
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },{threshold:0.15});
    elementos.forEach(el=>{ observer.observe(el); });

    /* META PIXEL - INITIATE CHECKOUT */
    const botoesCompra = document.querySelectorAll(
        '.btn-primary, .floating-buy, .btn-menu, .offer-content a'
    );
    botoesCompra.forEach(botao=>{
        botao.addEventListener("click",()=>{
            if(typeof fbq === "function"){
                fbq('track','InitiateCheckout',{
                    content_name:"Kit Digital Receitas da Vovó",
                    value:11.90,
                    currency:"BRL"
                });
            }
            console.log("Meta Pixel: InitiateCheckout enviado");
        });
    });

    /* CONTADOR DE OFERTA */
    function iniciarContador(){
        let fim = localStorage.getItem("ofertaReceitas");
        if(!fim){
            fim = Date.now() + (24*60*60*1000);
            localStorage.setItem("ofertaReceitas", fim);
        }
    }
    iniciarContador();

    /* LAZY LOAD IMAGENS */
    const imagens = document.querySelectorAll("img");
    imagens.forEach(img=>{
        if(!img.hasAttribute("loading")){
            img.setAttribute("loading","lazy");
        }
    });

    console.log(
        "%c🍰 Receitas da Vovó V3 Premium carregado!",
        "color:#8b4513;font-size:16px;font-weight:bold;"
    );

});

/* HEADER SCROLL EFFECT */
const header = document.querySelector("header");
if(header){
    window.addEventListener("scroll",()=>{
        if(window.scrollY > 50){
            header.classList.add("scrolled");
        }else{
            header.classList.remove("scrolled");
        }
    });
}

/* AJUSTE DINÂMICO DO HEADER (evita sobrepor a barra de oferta
   quando ela quebra em mais de uma linha em telas pequenas) */
function ajustarPosicaoHeader(){
    const barraOferta = document.querySelector(".top-offer");
    const headerEl = document.querySelector("header");
    if(barraOferta && headerEl){
        headerEl.style.top = barraOferta.offsetHeight + "px";
    }
}
ajustarPosicaoHeader();
window.addEventListener("load", ajustarPosicaoHeader);
window.addEventListener("resize", ajustarPosicaoHeader);
