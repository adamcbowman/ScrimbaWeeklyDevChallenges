function playSound(e) {
    const audio = document.querySelector(`audio[id="${e.target.id}Sound"]`);
    if(!audio) return
    audio.currentTime = 0;
    audio.play();    
}

const buttons = document.querySelectorAll(".btn")
buttons.forEach(btn => btn.addEventListener("click", function (btn) {playSound(btn)}));