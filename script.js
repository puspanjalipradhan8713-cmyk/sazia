function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen' + id).classList.add('active');
}

function startCountdown() {
  show(2);
  let num = 3;
  const el = document.getElementById('countdown');
  const timer = setInterval(() => {
    num--;
    if (num > 0) {
      el.textContent = num;
    } else {
      clearInterval(timer);
      show(3);
      confettiBlast();
      balloons();
    }
  }, 1000);
}

function confettiBlast() {
  const colors = ['#ffd700', '#ff6b9d', '#00d9ff', '#7cff6b', '#ff9f6b', '#c86bff'];
  for (let i = 0; i < 150; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = (Math.random() * 2 + 2) + 's';
    c.style.animationDelay = Math.random() * 0.5 + 's';
    c.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }
}

function balloons() {
  const emojis = ['🎈', '🎈', '🎈', '🎉', '🎊', '💖'];
  for (let i = 0; i < 20; i++) {
    const b = document.createElement('div');
    b.className = 'balloon';
    b.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    b.style.left = Math.random() * 100 + 'vw';
    b.style.animationDuration = (Math.random() * 4 + 4) + 's';
    b.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(b);
    setTimeout(() => b.remove(), 10000);
  }
}

function extraSurprise() {
  confettiBlast();
  balloons();
  const msg = document.createElement('p');
  msg.className = 'message';
  msg.innerHTML = '💖 Tum jaisi dost milna lucky hota hai!<br>Thank you for being you. 😊';
  document.getElementById('screen3').appendChild(msg);
}