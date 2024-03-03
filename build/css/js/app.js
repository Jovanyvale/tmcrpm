document.addEventListener('DOMContentLoaded', function () {
    startApp();
})

function startApp() {
    reasons()
}

function reasons() {
    const reasons = document.querySelector('.letters')
    const reasonsList = ["Me dedica todo su tiempo", "Me da mucho amor", "Está hermosa",
        "Me llama todos los días", "Tetona", "Me hace sentir bonito", "Juega conmigo", "Me hace detallitos",
        "Se queda hasta noche por mi", "Aunque esté ocupada, tiene tiempo para mí", "Me compra cositas",
        "Tiene un culote bien rico", "Ve pelis conmigo", "Tiene una voz hermosa"]

    let currentIndex = 0;

    function printReasons() {
        reasons.classList.add('transi')

        setTimeout(() => {
            reasons.textContent = reasonsList[currentIndex];
        }, 50)

        setTimeout(() => {
            reasons.classList.remove('transi')
        }, 2800)
        currentIndex = (currentIndex + 1);

        if (currentIndex >= reasonsList.length) {
            currentIndex = 0
        }
    }

    setInterval(printReasons, 3200);
}
