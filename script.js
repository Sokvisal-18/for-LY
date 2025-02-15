document.addEventListener("DOMContentLoaded", () => { // Ensure DOM is fully loaded
    const wrapper = document.querySelector(".wrapper");
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");

    yesBtn.addEventListener("click", () => {
        question.innerHTML = "You are my girlfriend now!";
        gif.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3N2cGF6Z3NpbHkxMnV1bTN6cWNkdDYyZjkyaGJjeXJkbjZ6cmNudiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ifB1v1W3Db0GIW7uTA/giphy.gif";
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
