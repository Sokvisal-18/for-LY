const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', ()=>{
    question.innerHTML = "I love you too!"
    gif.src = "https://www.google.com/search?q=cute+emoji+gif&rlz=1C1CHBD_enKH1094KH1094&oq=cute+&gs_lcrp=EgZjaHJvbWUqDggAEEUYJxg7GIAEGIoFMg4IABBFGCcYOxiABBiKBTIMCAEQABhDGIAEGIoFMgYIAhBFGEAyBggDEEUYOTIMCAQQABhDGIAEGIoFMgwIBRAAGEMYgAQYigUyDAgGEAAYQxiABBiKBTIGCAcQRRg80gEIMzcyMGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#vhid=jGuqXmj6dTA6_M&vssid=l"
});
noBtn.addEventListener('mouseover',()=>{
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight = noBtnRect.height;

    const randomX = Math.floor(Math.random() *maxX);
    const randomY = Math.floor(Math.random() *maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
})