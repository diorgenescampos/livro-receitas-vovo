
/*==================================================
CADERNO DE RECEITAS DA VOVÓ
JavaScript principal
==================================================*/


// ANIMAÇÃO AO ROLAR A PÁGINA

const elementos = document.querySelectorAll(
    '.card, .receita, .depoimento, .section-title'
);



const observar = new IntersectionObserver(
    
(entries)=>{


entries.forEach((entrada)=>{


if(entrada.isIntersecting){


entrada.target.classList.add('show');


}


});


},

{

threshold:0.15

}


);



elementos.forEach((elemento)=>{


elemento.classList.add('fade');

observar.observe(elemento);


});





// ANO AUTOMÁTICO NO RODAPÉ

const ano = document.querySelector('.footer p:last-child');


if(ano){

ano.innerHTML =
`© ${new Date().getFullYear()} - Todos os direitos reservados.`;

}
