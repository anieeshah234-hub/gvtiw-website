/* =====================================================
   GVTIW WEBSITE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("GVTIW Website Loaded Successfully");


    /* =================================================
       SCROLL REVEAL ANIMATION
    ================================================= */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealOnScroll = () => {

        revealElements.forEach((element) => {

            const elementTop =
                element.getBoundingClientRect().top;

            const windowHeight =
                window.innerHeight;

            if (elementTop < windowHeight - 100) {

                element.classList.add("active");

            }

        });

    };

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();


    /* =================================================
       NAVBAR SHADOW
    ================================================= */

    const navbar =
        document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.style.boxShadow =
                "0 8px 25px rgba(0,0,0,.20)";

        } else {

            navbar.style.boxShadow =
                "0 4px 15px rgba(0,0,0,.15)";

        }

    });


    /* =================================================
       SMOOTH NAVIGATION
    ================================================= */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener("click", function (e) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* =================================================
       BUTTON RIPPLE EFFECT
    ================================================= */

    document.querySelectorAll(".btn, .admission-btn, .header-btn")
        .forEach(button => {

            button.addEventListener("click", function (e) {

                const ripple =
                    document.createElement("span");

                ripple.style.position = "absolute";
                ripple.style.width = "10px";
                ripple.style.height = "10px";
                ripple.style.background = "rgba(255,255,255,.5)";
                ripple.style.borderRadius = "50%";
                ripple.style.transform = "scale(0)";
                ripple.style.animation =
                    "ripple .6s linear";

                const rect =
                    this.getBoundingClientRect();

                ripple.style.left =
                    (e.clientX - rect.left) + "px";

                ripple.style.top =
                    (e.clientY - rect.top) + "px";

                this.appendChild(ripple);

                setTimeout(() => {
                    ripple.remove();
                }, 600);

            });

        });

});


/* =====================================================
   RIPPLE ANIMATION
===================================================== */

const style =
document.createElement("style");

style.innerHTML = `

@keyframes ripple {

    to {
        transform: scale(30);
        opacity: 0;
    }

}

`;

document.head.appendChild(style);

