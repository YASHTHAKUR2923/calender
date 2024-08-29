// script.js
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentDate = new Date();

function renderCalendar(date) {
    const daysContainer = document.getElementById('days');
    const monthYearDisplay = document.getElementById('month-year');
    
    const month = date.getMonth();
    const year = date.getFullYear();
    
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    
    monthYearDisplay.innerText = `${monthNames[month]} ${year}`;
    daysContainer.innerHTML = '';

    for (let i = 0; i < firstDay; i++) {
        daysContainer.innerHTML += `<div></div>`;
    }

    for (let i = 1; i <= lastDate; i++) {
        const today = new Date().getDate();
        const isToday = i === today && month === new Date().getMonth() && year === new Date().getFullYear();
        daysContainer.innerHTML += `<div class="${isToday ? 'today' : ''}">${i}</div>`;
    }
}

document.getElementById('prev').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

document.getElementById('next').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

renderCalendar(currentDate);
