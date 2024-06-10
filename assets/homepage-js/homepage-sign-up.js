const signIn = document.querySelector("#signInButton");
const signUp = document.querySelector("#signUpButton");
const signInForm = document.querySelector(".sign-pop-up-container .sign-in-form");
const signUpForm = document.querySelector(".sign-pop-up-container .sign-up-form");
const overlay_container = document.querySelector(
    ".sign-pop-up-container .overlay-sign-pop-up-container"
);
const overlay = document.querySelector(
    ".sign-pop-up-container .overlay-sign-pop-up-container .overlay"
);

signIn.addEventListener("click", () => {
    overlay_container.style.transform = "translateX(100%)";
    overlay.style.transform = "translateX(-50%)";
    signInForm.classList.add("active");
    signUpForm.classList.remove("active");
});
signUp.addEventListener("click", () => {
    overlay_container.style.transform = "translateX(0)";
    overlay.style.transform = "translateX(0)";
    signUpForm.classList.add("active");
    signInForm.classList.remove("active");
});


const logIn = document.querySelector(".log-in-container");
const signUpHomepage = document.querySelector(".sign-up-button");
const closeBtn = document.querySelector(".close-pop-up");
const popUp = document.querySelector(".pop-up-container");

logIn.addEventListener("click", () => {
    overlay_container.style.transform = "translateX(100%)";
    overlay.style.transform = "translateX(-50%)";
    signInForm.classList.add("active");
    signUpForm.classList.remove("active");
    popUp.classList.add('show');
});

signUpHomepage.addEventListener("click", () => {
    popUp.classList.add('show');
    overlay_container.style.transform = "translateX(0)";
    overlay.style.transform = "translateX(0)";
    signUpForm.classList.add("active");
    signInForm.classList.remove("active");
});

closeBtn.addEventListener("click", () => {
    popUp.classList.remove('show');
});




if (window.innerWidth <= 768) {
    signIn.addEventListener("click", () => {
        overlay_container.style.transform = "translateX(0%)";
        overlay.style.transform = "translateX(-50%)";
        signInForm.classList.add("active");
        signUpForm.classList.remove("active");
    });
    signUp.addEventListener("click", () => {
        overlay_container.style.transform = "translateX(0)";
        overlay.style.transform = "translateX(0)";
        signUpForm.classList.add("active");
        signInForm.classList.remove("active");
    });



    logIn.addEventListener("click", () => {
        popUp.classList.add('show');
        overlay_container.style.transform = "translateX(0%)";
        overlay.style.transform = "translateX(-50%)";
        signInForm.classList.add("active");
        signUpForm.classList.remove("active");
    });
    
    signUpHomepage.addEventListener("click", () => {
        popUp.classList.add('show');
        overlay_container.style.transform = "translateX(0)";
        overlay.style.transform = "translateX(0)";
        signUpForm.classList.add("active");
        signInForm.classList.remove("active");
    });

    closeBtn.addEventListener("click", () => {
        popUp.classList.remove('show');
    });
}