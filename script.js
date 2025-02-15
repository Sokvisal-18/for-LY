document.addEventListener("DOMContentLoaded", () => { // Ensure DOM is fully loaded
    const wrapper = document.querySelector(".wrapper");
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");

    yesBtn.addEventListener("click", () => {
        question.innerHTML = "You are my girlfriend now!";
        gif.src = "https://pic.funnygifsbox.com/uploads/2021/01/funnygifsbox.com-2021-01-31-08-40-50-91.gif";
    });

    noBtn.addEventListener("mouseover", () => {
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.position = "absolute"; // Ensure noBtn can move freely
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });

    noBtn.addEventListener("click", () => {
        question.innerHTML = "Why not? 😢";
    });
});
