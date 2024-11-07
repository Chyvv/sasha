document.getElementById('no1').addEventListener('mouseover', moveButton);

function moveButton() {
    const button = document.getElementById('no1');
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Определяем размеры и координаты области перемещения
    const areaWidth = 300; // Ширина области перемещения
    const areaHeight = 200; // Высота области перемещения

    // Определяем центр области перемещения
    const areaCenterX = window.innerWidth / 2;
    const areaCenterY = window.innerHeight / 2;

    // Определяем границы области перемещения
    const minX = areaCenterX - areaWidth / 2;
    const maxX = areaCenterX + areaWidth / 2 - buttonWidth;
    const minY = areaCenterY - areaHeight / 2;
    const maxY = areaCenterY + areaHeight / 2 - buttonHeight;

    // Генерируем случайные координаты в пределах области перемещения
    const randomX = Math.random() * 0.5 * (maxX - minX) + minX;
    const randomY = Math.random() * 0.5 * (maxY - minY) + minY;

    // Применяем новое положение кнопки "Нет"
    button.style.position = 'absolute'; // Убедитесь, что кнопка имеет абсолютное позиционирование
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

function goToPage(pageNumber) {
    document.querySelectorAll('div[id^="page"], #welcomePage').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById('page' + pageNumber).classList.remove('hidden');
}

function hideNoButton() {
    document.getElementById('no2').classList.add('hidden');
}

function showOnlyYes() {
    document.getElementById('yes3').classList.remove('hidden');
    document.getElementById('no3').classList.add('hidden');
    document.getElementById('finalMessage').classList.remove('hidden');
}

function showFinalMessage() {
    document.getElementById('finalMessage').classList.remove('hidden');
    document.getElementById('yes3').classList.add('hidden');
}

function showFinalGif() {
    document.querySelectorAll('div[id^="page"], #finalMessage').forEach(page => {
        page.classList.add('hidden');
    });
    document.getElementById('finalGif').classList.remove('hidden');
}
