// Simple JS for demo interactions
const pointsBalance = document.getElementById('points-balance');
let points = 0;

document.getElementById('buy-points').addEventListener('click', () => {
    points += 10;
    pointsBalance.textContent = points;
});

document.getElementById('message-form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (points <= 0) {
        alert('Not enough points');
        return;
    }
    const input = document.getElementById('message-input');
    if (input.value.trim()) {
        const msg = document.createElement('div');
        msg.textContent = input.value;
        document.getElementById('message-list').appendChild(msg);
        points--;
        pointsBalance.textContent = points;
        input.value = '';
    }
});

document.querySelectorAll('.report-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Report submitted');
    });
});
