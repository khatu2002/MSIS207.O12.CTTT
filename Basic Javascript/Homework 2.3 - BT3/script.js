document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        const currentDate = new Date();
        const newYearDate = new Date(currentDate.getFullYear() + 1, 0, 1);

        const timeDifference = newYearDate - currentDate;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = formatTime(days);
        document.getElementById('hours').innerText = formatTime(hours);
        document.getElementById('minutes').innerText = formatTime(minutes);
        document.getElementById('seconds').innerText = formatTime(seconds);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    updateCountdown(); // Initial call to display the countdown immediately

    setInterval(updateCountdown, 1000); // Update the countdown every second
});
