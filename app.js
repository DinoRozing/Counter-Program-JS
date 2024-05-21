let count = 0;

const descreaseBtn = document.getElementById('descrease-btn');
const resetBtn = document.getElementById('reset-btn');
const increaseBtn = document.getElementById('increase-btn');
const countLabel = document.getElementById('count-label');

descreaseBtn.onclick = function(){
    count--;

    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;

    countLabel.textContent = count;
}

increaseBtn.onclick = function(){
    count++;

    countLabel.textContent = count;
}