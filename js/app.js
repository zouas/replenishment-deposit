'use strict';

function calculateDeposit(amountDeposit, periodDeposit, percentDeposit) {

    const month = 1; // количество месяцев начисления процентов (в формуле по дням, у нас по месяцам)
    const totalYear = 12; //количество месяцев в году
    const profitDeposit = amountDeposit * ((1 + percentDeposit * month / totalYear / 100) ** periodDeposit - 1); //расчет суммы дохода

    const sumDeposit = Number(profitDeposit.toFixed(0));
    console.log(sumDeposit);

    const totalDeposit = sumDeposit + amountDeposit;

    return {
        totalDeposit,
        profitDeposit,
    };
}


function handleSubmit(evt) {
    evt.preventDefault(); //отменяем поведение по умолчанию

    amountErrorEl.textContent = '';
    periodErrorEl.textContent = '';
    totalEl.textContent = '';
    profitEl.textContent = '';
    percentEl.textContent = '';

    const amountDeposit = Number(amountInputEl.value);

    if (Number.isNaN(amountDeposit)) {
        amountErrorEl.textContent = `Сумма – не число: "Неверное значение. Введите число, например: 15000"`;
        return;
    }
    if (Number(amountDeposit) < 15000) {
        amountErrorEl.textContent = `Сумма меньше минимальной: "Неверное значение. Минимальная сумма: 15 000 ₽"`;
        return;
    }

    if (Number(amountDeposit) > 50000000) {
        amountErrorEl.textContent = `Сумма больше максимальной: "Неверное значение. Максимальная сумма: 50 000 000 ₽"`;
        return;
    }


    const periodDeposit = Number(periodInputEl.value);

    if (Number.isNaN(periodDeposit)) {
        periodErrorEl.textContent = `Период – не число: "Неверное значение. Введите число месяцев, например: 3"`;
        return;
    }
    if (Number(periodDeposit) < 3) {
        periodErrorEl.textContent = `Период меньше минимального: "Неверное значение. Минимальный период: 3 месяца"`;
        return;
    }

    if (Number(periodDeposit) > 18) {
        periodErrorEl.textContent = `Период больше максимального: "Неверное значение. Максимальный период: 18
месяцев"`;
        return;
    }

    // считаем ставку
    let percentDeposit = 2;

    if (periodDeposit === 3 || periodDeposit < 6) {
        percentDeposit = 2.0;
    } else if (periodDeposit === 6 || periodDeposit < 9) {
        percentDeposit = 2.2;
    } else if (periodDeposit === 9 || periodDeposit < 12) {
        percentDeposit = 2.3;
    } else if (periodDeposit === 12 || periodDeposit < 18) {
        percentDeposit = 2.6;
    } else if (periodDeposit === 18 || periodDeposit > 18) {
        percentDeposit = 2.7;
    }


    const result = calculateDeposit(amountDeposit, periodDeposit, percentDeposit);

    totalEl.textContent = result.totalDeposit;
    profitEl.textContent = result.profitDeposit.toFixed(0);
    percentEl.textContent = percentDeposit;

}

const formEl = document.getElementById('deposit-form');
formEl.addEventListener('submit', handleSubmit, true);

formEl.onclick = handleSubmit;

const amountInputEl = document.getElementById('amount-input');
const periodInputEl = document.getElementById('period-input');
const amountErrorEl = document.getElementById('amount-error');
const periodErrorEl = document.getElementById('period-error');
const totalEl = document.getElementById('total');
const profitEl = document.getElementById('profit');
const percentEl = document.getElementById('percent');
