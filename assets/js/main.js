/* =====================================================
   SCRIPT.JS V3 PREMIUM
   Kit Digital Receitas da Vovó
====================================================== */

document.addEventListener("DOMContentLoaded", function () {


/* =====================================================
   SCROLL SUAVE
====================================================== */

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

    link.addEventListener("click", function(e){

        const destino = document.querySelector(
            this.getAttribute("href")
        );

        if(destino){

            e.preventDefault();

            destino.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });

        }

    });

});



/* =====================================================
   FAQ ACCORDION PREMIUM
====================================================== */

const faqButtons = document.querySelectorAll(".faq-question");


faqButtons.forEach(button => {

    button.addEventListener("click", function(){

        const item = this.parentElement;

        const answer = item.querySelector(".faq-answer");


        document
        .querySelectorAll(".faq-item")
        .forEach(other => {

            if(other !== item){

                other.classList.remove("active");

                const otherAnswer =
                other.querySelector(".faq-answer");

                if(otherAnswer){

                    otherAnswer.style.maxHeight = null;

                }

            }

        });


        item.classList.toggle("active");


        if(item.classList.contains("active")){

            answer.style.maxHeight =
            answer.scrollHeight + "px";

        }else{

            answer.style.maxHeight = null;

        }


    });

});



/* =====================================================
   BOTÃO VOLTAR AO TOPO
====================================================== */

const backTop =
document.querySelector(".back-top");


if(backTop){


window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){

        backTop.classList.add("show");

    }else{

        backTop.classList.remove("show");

    }


});


backTop.addEventListener("click",()=>{


window.scrollTo({

    top:0,

    behavior:"smooth"

});


});


}



/* =====================================================
   ANIMAÇÃO AO ROLAR
====================================================== */


const elementos =
document.querySelectorAll(
".benefit-card, .number-card, .learn-card, .recipe-card, .bonus-card"
);



const observer =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.classList.add("visible");

observer.unobserve(entry.target);

}


});


},{
threshold:0.15
});



elementos.forEach(el=>{

observer.observe(el);

});



/* =====================================================
   TRACKING BOTÕES DE COMPRA
   Preparado para Meta Pixel
====================================================== */


const botoesCompra =
document.querySelectorAll(
'.btn-primary, .floating-buy, .btn-menu, .offer-content a'
);



botoesCompra.forEach(botao=>{


botao.addEventListener("click",()=>{


console.log(
"Evento: InitiateCheckout"
);



/*

META PIXEL

Quando instalar o Pixel:

fbq('track',
'InitiateCheckout');

*/


});


});



/* =====================================================
   CONTADOR DE OFERTA
   24 HORAS RENOVÁVEL
====================================================== */


function iniciarContador(){


let fim =
localStorage.getItem(
"ofertaReceitas"
);



if(!fim){


fim =
Date.now()
+
(24*60*60*1000);


localStorage.setItem(
"ofertaReceitas",
fim
);


}



const atualizar = ()=>{


let restante =
fim - Date.now();



if(restante <=0){

localStorage.removeItem(
"ofertaReceitas"
);

return;

}



};



atualizar();



}



iniciarContador();




/* =====================================================
   LAZY LOAD EXTRA
====================================================== */


const imagens =
document.querySelectorAll("img");


imagens.forEach(img=>{


if(!img.hasAttribute("loading")){

img.setAttribute(
"loading",
"lazy"
);

}


});



/* =====================================================
   CONSOLE BRAND
====================================================== */


console.log(
"%c🍰 Receitas da Vovó carregado com sucesso!",
"color:#8b4513;font-size:16px;font-weight:bold;"
);



});
