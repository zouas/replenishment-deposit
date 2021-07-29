'use strict';

function handleSubmit(evt){
    evt.preventDefault(); //отменяем поведение по умолчанию

totalEl.textContent = '';
profitEl.textContent = '';
percentEl.textContent = '';

}

const formEl = document.getElementById('deposit-form');
formEl.addEventListener('submit', handleSubmit,true);

formEl.onclick = handleSubmit;

const amountInputEl = document.getElementById('amount-input');
const periodInputEl = document.getElementById('period-input');
const totalEl = document.getElementById('total');
const profitEl = document.getElementById('profit');
const percentEl = document.getElementById('percent');