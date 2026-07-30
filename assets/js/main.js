/* =====================================================
   LANDING PAGE V2
   RECEITAS DA VOVÓ
=====================================================*/

document.addEventListener("DOMContentLoaded", function () {

    /* ===========================================
       FAQ
    =========================================== */

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            faqItems.forEach(faq => {
                if (faq !== item) {
                    faq.classList.remove("active");
                }
            });

            item.classList.toggle("active");

        });

    });


    /* ===========================================
       SCROLL SUAVE
    =========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        });

    });


    /* ===========================================
       HEADER AO ROLAR
    =========================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.padding = "0px";

            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";

        } else {

            header.style.boxShadow = "0 3px 12px rgba(0,0,0,.08)";

        }

    });


    /* ===========================================
       ANIMAÇÕES AO APARECER
    =========================================== */

    const animated = document.querySelectorAll(

        ".card,.recipe-card,.bonus-card,.number-card,.learn-card,.offer-box,.guarantee-box"

    );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: 0.15

    });

    animated.forEach(el => {

        el.style.opacity = "0";

        el.style.transform = "translateY(40px)";

        el.style.transition = "all .7s ease";

        observer.observe(el);

    });


    /* ===========================================
       BOTÕES CTA
    =========================================== */

    const buttons = document.querySelectorAll(".btn-primary");

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-4px) scale(1.02)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "translateY(0) scale(1)";

        });

    });


    /* ===========================================
       BOTÃO VOLTAR AO TOPO
    =========================================== */

    const backTop = document.createElement("button");

    backTop.innerHTML = "⬆";

    backTop.className = "back-top";

    document.body.appendChild(backTop);

    backTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    window.addEventListener("scroll", () => {

        if (window.scrollY > 700) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

        }

    });


    /* ===========================================
       CONTADOR VISUAL DA OFERTA
    =========================================== */

    const price = document.querySelector(".big-price");

    if (price) {

        price.animate([

            { transform: "scale(1)" },

            { transform: "scale(1.05)" },

            { transform: "scale(1)" }

        ], {

            duration: 1500,

            iterations: Infinity

        });

    }


    /* ===========================================
       ANIMAÇÃO DO MOCKUP
    =========================================== */

    const mockup = document.querySelector(".hero-image img");

    if (mockup) {

        window.addEventListener("mousemove", e => {

            const x = (window.innerWidth / 2 - e.clientX) / 80;

            const y = (window.innerHeight / 2 - e.clientY) / 80;

            mockup.style.transform =

                `rotateY(${x}deg) rotateX(${-y}deg)`;

        });

    }


    /* ===========================================
       ANO AUTOMÁTICO NO RODAPÉ
    =========================================== */

    const footer = document.querySelector("footer p");

    if (footer) {

        footer.innerHTML =

            `© ${new Date().getFullYear()} Caderno de Receitas da Vovó. Todos os direitos reservados.`;

    }

});
