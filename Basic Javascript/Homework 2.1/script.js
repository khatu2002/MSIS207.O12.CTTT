function playDrumSound(key) {
    var audio = document.getElementById('drumSound-' + key);
    var drumButton = document.querySelector('.' + key + '.drum');
    drumButton.classList.add('blinking');
    audio.play();
    setTimeout(function () {
        drumButton.classList.remove('blinking');
    }, 2000);
}

document.addEventListener('keypress', function (event) {
    var key = event.key.toLowerCase();
    if (key === 'w' || key === 'a' || key === 's' || key === 'd' || key === 'j' || key === 'k' || key === 'l') {
        playDrumSound(key);
    }
});