const schemeSvg = document.querySelector('.scheme-svg'); // Взаимодействие с
const totalPriceTag = document.querySelector('.price-total') // Для записи итоговой цены
let cost = 800; // Цена за один билет
let totalPrice = 0; // Переменная для итоговой цены
const menuButton = document.querySelector('.m-menu');
const menu = document.querySelector('.menu');
schemeSvg.addEventListener('click', (event) => { // Отследить события, что был click
    if (!event.target.classList.contains('booked')) { // Запрет клик на уже занятое место
        event.target.classList.toggle("active"); // Отметить выбранное место
        let totalSeats = schemeSvg.querySelectorAll('.active').length; // Счетчик выбранных мест
        totalPrice = totalSeats * cost; // Умножение количества выбранных мест на базовую цену
        totalPriceTag.textContent = totalPrice; // Присваивание итоговой цены
    }
});    
    menuButton.addEventListener('click', () => { // Показ меню при нажатии кнопки для меню
        menu.classList.toggle('is-open'); // Добавить и убирать класс is-open
})