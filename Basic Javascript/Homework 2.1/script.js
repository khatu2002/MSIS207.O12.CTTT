function playDrumSound() {
    var audio = document.getElementById('drumSound');
    var drumButton = document.querySelector('.w.drum');
    drumButton.classList.add('blinking');
    audio.play();
    setTimeout(function () {
        drumButton.classList.remove('blinking');
    }, 2000);


}

document.addEventListener('keypress', function (event) {
    if (event.key === 'w') {
        playDrumSound();
    }
});