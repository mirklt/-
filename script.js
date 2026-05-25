/* ===== PAGE NAVIGATION ===== */
let currentPage = 'home';
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');
  currentPage = name;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (name === 'home') initScrollReveal();
  if (name === 'quiz' && !quizStarted) startQuiz();
  if (name === 'game' && !investInit) initInvestGame();
  return false;
}

/* ===== NAVBAR ===== */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});
document.getElementById('hamburger').addEventListener('click', () => {
  const menu = document.getElementById('mobile-menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});
function closeMobile() { document.getElementById('mobile-menu').style.display = 'none'; }

/* ===== TOAST ===== */
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg; t.className = 'show ' + type;
  setTimeout(() => { t.className = ''; }, 3000);
}

/* ===== THREE.JS HERO WAVE ===== */
(function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
  camera.position.set(0, 3, 8);
  camera.lookAt(0, 0, 0);

  const cols = 80, rows = 40;
  const geo = new THREE.PlaneGeometry(20, 10, cols - 1, rows - 1);
  geo.rotateX(-Math.PI / 3);

  const mat = new THREE.MeshBasicMaterial({
    color: 0x00d4ff, wireframe: true, opacity: 0.18, transparent: true
  });
  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);

  const posAttr = geo.attributes.position;
  const origY = new Float32Array(posAttr.count);
  for (let i = 0; i < posAttr.count; i++) origY[i] = posAttr.getY(i);

  function resize() {
    const w = canvas.parentElement.clientWidth, h = canvas.parentElement.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  resize(); window.addEventListener('resize', resize);

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.008;
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i), z = posAttr.getZ(i);
      posAttr.setY(i, origY[i] + Math.sin(x * 0.5 + t) * 0.3 + Math.sin(z * 0.4 + t * 1.3) * 0.2);
    }
    posAttr.needsUpdate = true;
    renderer.render(scene, camera);
  }
  animate();
})();

/* ===== SCROLL REVEAL ===== */
function initScrollReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}
initScrollReveal();

/* ===== COUNT UP ANIMATION ===== */
(function() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = +el.dataset.count;
      let cur = 0, step = target / 60;
      const timer = setInterval(() => {
        cur = Math.min(cur + step, target);
        el.textContent = Math.floor(cur).toLocaleString('ru') + (target === 100 ? '%' : target === 247 ? '' : target > 1000 ? '+' : '');
        if (cur >= target) clearInterval(timer);
      }, 20);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => obs.observe(el));
})();

/* ===== ACCORDION ===== */
function toggleAcc(btn) {
  const item = btn.closest('.accordion-item');
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

/* ===== FAQ ===== */
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

/* ===== MONEY DIARY ===== */
let transactions = [
  { id: 1, name: 'Зарплата', amount: 2000, type: 'income', cat: '💼 Работа', date: '2026-04-01' },
  { id: 2, name: 'Продукты', amount: 350, type: 'expense', cat: '🍔 Еда', date: '2026-04-02' },
  { id: 3, name: 'Транспорт', amount: 50, type: 'expense', cat: '🚌 Транспорт', date: '2026-04-03' },
];
let txType = 'income';
let txIdCounter = 10;

function setType(type) {
  txType = type;
  document.getElementById('type-income').className = 'type-btn' + (type === 'income' ? ' active-income' : '');
  document.getElementById('type-expense').className = 'type-btn' + (type === 'expense' ? ' active-expense' : '');
}
function toggleForm() {
  const f = document.getElementById('add-form');
  f.classList.toggle('open');
  if (f.classList.contains('open')) {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('tx-date').value = today;
  }
}
function addTransaction() {
  const name = document.getElementById('tx-name').value.trim();
  const amount = parseFloat(document.getElementById('tx-amount').value);
  const cat = document.getElementById('tx-cat').value;
  const date = document.getElementById('tx-date').value;
  if (!name || !amount || amount <= 0) { showToast('Заполните все поля корректно', 'error'); return; }
  transactions.unshift({ id: txIdCounter++, name, amount, type: txType, cat, date: date || new Date().toISOString().split('T')[0] });
  document.getElementById('tx-name').value = '';
  document.getElementById('tx-amount').value = '';
  renderTransactions();
  toggleForm();
  showToast(txType === 'income' ? '✅ Доход добавлен!' : '✅ Расход добавлен!', 'success');
}
function deleteTransaction(id) {
  transactions = transactions.filter(t => t.id !== id);
  renderTransactions();
}
function renderTransactions() {
  const list = document.getElementById('transactions-list');
  const empty = document.getElementById('empty-tx');
  const income = transactions.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const expense = transactions.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const balance = income - expense;

  document.getElementById('total-income').textContent = income.toLocaleString('ru') + ' с.';
  document.getElementById('total-expense').textContent = expense.toLocaleString('ru') + ' с.';
  const bd = document.getElementById('balance-display');
  bd.textContent = balance.toLocaleString('ru') + ' сомони';
  bd.className = 'balance-value' + (balance >= 0 ? ' positive' : ' negative');

  const goals = [{ target: 3000, fill: 'gf1', pct: 'gp1' }, { target: 1200, fill: 'gf2', pct: 'gp2' }, { target: 5000, fill: 'gf3', pct: 'gp3' }];
  goals.forEach(g => {
    const pct = Math.min(100, Math.round(income / g.target * 100));
    document.getElementById(g.fill).style.width = pct + '%';
    document.getElementById(g.pct).textContent = pct + '%';
  });

  empty.style.display = transactions.length === 0 ? 'block' : 'none';
  list.innerHTML = transactions.map(t => `
    <div class="transaction-item">
      <div class="tx-emoji">${t.cat.split(' ')[0]}</div>
      <div class="tx-info">
        <div class="tx-name">${t.name}</div>
        <div class="tx-cat">${t.cat}</div>
      </div>
      <div class="tx-right">
        <div class="tx-amount ${t.type === 'income' ? 'tx-income' : 'tx-expense'}">${t.type === 'income' ? '+' : '-'}${t.amount.toLocaleString('ru')} с.</div>
        <div class="tx-date">${t.date}</div>
      </div>
      <button class="tx-delete" onclick="deleteTransaction(${t.id})" aria-label="Удалить">✕</button>
    </div>
  `).join('');
}
renderTransactions();

/* ===== QUIZ ===== */
const quizData = [
  { q: 'Что такое вишинг?', opts: ['Мошенничество через телефонные звонки','Взлом банкоматов','Поддельный сайт банка','Кража карты из кошелька'], correct: 0, exp: 'Вишинг (voice+phishing) — телефонное мошенничество, когда звонят и пытаются выманить данные или деньги.' },
  { q: 'Что нельзя называть по телефону «сотруднику банка»?', opts: ['Ваш город проживания','PIN-код и CVV карты','Имя и фамилию','Номер офиса банка'], correct: 1, exp: 'PIN-код, CVV, коды из SMS — секретные данные. Ни один настоящий банк никогда их не попросит.' },
  { q: 'Вы получили SMS «Ваша карта заблокирована, перейдите по ссылке». Ваши действия?', opts: ['Перейти по ссылке и ввести данные','Позвонить по номеру из SMS','Позвонить в банк по официальному номеру с карты','Переслать SMS родственникам'], correct: 2, exp: 'Всегда звоните в банк по номеру, указанному на карте или официальном сайте — не по контактам из SMS.' },
  { q: 'Что такое смишинг?', opts: ['Мошенничество через SMS','Взлом смартфона','Кража через банкомат','Поддельное приложение'], correct: 0, exp: 'Смишинг (SMS+phishing) — мошенничество через SMS-сообщения с вредоносными ссылками.' },
  { q: 'Работодатель при видеособеседовании просит включить «демонстрацию экрана». Что делать?', opts: ['Включить — это стандартная практика','Отказаться — это опасно','Сначала спросить причину, потом решить','Согласиться, но закрыть банковские приложения'], correct: 1, exp: 'Мошенники используют демонстрацию экрана чтобы видеть SMS-коды и получить доступ к вашему банку. Всегда отказывайтесь.' },
  { q: 'На сайте появилась «капча» и просит открыть командную строку и вставить текст. Что это?', opts: ['Обычная проверка безопасности','Обновление браузера','Мошенническая схема Fake CAPTCHA','Проверка Cloudflare'], correct: 2, exp: 'Ни один легитимный сервис не просит открывать командную строку. Это мошенническая схема для установки вируса.' },
  { q: 'Мошенники оформили кредит на ваше имя. Что делать в первую очередь?', opts: ['Начать выплачивать кредит','Уведомить банк и написать заявление о непричастности','Подождать, может само решится','Взять ещё один кредит для погашения'], correct: 1, exp: 'Немедленно уведомите банк и напишите заявление о непричастности к сделке. Также обратитесь в полицию.' },
  { q: 'С карты списали деньги без вашего ведома. Сколько времени есть для подачи заявления в банк?', opts: ['7 дней','30 дней','1 сутки','6 месяцев'], correct: 2, exp: 'Заявление о несогласии с операцией (чарджбэк) нужно подать в течение суток для максимальных шансов возврата.' },
  { q: 'Какой вид мошенничества использует поддельные сайты-клоны настоящих банков?', opts: ['Вишинг','Смишинг','Фишинг','Джоб-фишинг'], correct: 2, exp: 'Фишинг — создание поддельных сайтов, имитирующих банки и сервисы, для кражи логинов и паролей.' },
  { q: 'Что такое двухфакторная аутентификация (2FA)?', opts: ['Два пароля от карты','Дополнительное подтверждение входа (SMS-код + пароль)','Два банковских счёта','Двойной лимит на снятие'], correct: 1, exp: '2FA — дополнительный уровень защиты: помимо пароля нужен одноразовый код из SMS или приложения.' },
];
let quizStarted = false, quizCurrent = 0, quizScore = 0, quizAnswered = false;

function startQuiz() {
  quizStarted = true; quizCurrent = 0; quizScore = 0; quizAnswered = false;
  document.getElementById('quiz-result').classList.remove('visible');
  renderQuiz();
}
function renderQuiz() {
  if (quizCurrent >= quizData.length) { showQuizResult(); return; }
  const q = quizData[quizCurrent];
  const pct = (quizCurrent / quizData.length) * 100;
  document.getElementById('quiz-progress-bar').style.width = pct + '%';
  document.getElementById('quiz-progress-text').textContent = quizCurrent + ' / ' + quizData.length;
  const letters = ['A', 'B', 'C', 'D'];
  document.getElementById('quiz-area').innerHTML = `
    <div class="quiz-card">
      <div class="quiz-q-num">Вопрос ${quizCurrent + 1} из ${quizData.length}</div>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-options">
        ${q.opts.map((o, i) => `<button class="quiz-option" data-letter="${letters[i]}" data-idx="${i}" onclick="answerQuiz(this, ${i}, ${q.correct})">${o}</button>`).join('')}
      </div>
      <div class="quiz-explanation" id="quiz-exp">${q.exp}</div>
    </div>
    <button class="quiz-next" id="quiz-next" onclick="nextQuestion()">Следующий вопрос →</button>
  `;
  quizAnswered = false;
}
function answerQuiz(btn, idx, correct) {
  if (quizAnswered) return;
  quizAnswered = true;
  document.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
  if (idx === correct) { btn.classList.add('correct'); quizScore++; showToast('✅ Правильно!', 'success'); }
  else {
    btn.classList.add('wrong');
    document.querySelectorAll('.quiz-option')[correct].classList.add('correct');
    showToast('❌ Неверно', 'error');
  }
  document.getElementById('quiz-exp').classList.add('visible');
  document.getElementById('quiz-next').classList.add('visible');
}
function nextQuestion() { quizCurrent++; renderQuiz(); }
function showQuizResult() {
  document.getElementById('quiz-area').innerHTML = '';
  document.getElementById('quiz-progress-bar').style.width = '100%';
  document.getElementById('quiz-progress-text').textContent = '10 / 10';
  const r = document.getElementById('quiz-result');
  const pct = quizScore / quizData.length;
  document.getElementById('result-score').textContent = quizScore + ' / ' + quizData.length;
  if (pct >= 0.9) { document.getElementById('result-medal').textContent = '🥇'; document.getElementById('result-msg').textContent = 'Отлично! Вы отлично разбираетесь в финансовой безопасности. Ваши средства под надёжной защитой!'; }
  else if (pct >= 0.6) { document.getElementById('result-medal').textContent = '🥈'; document.getElementById('result-msg').textContent = 'Хороший результат! Несколько пробелов в знаниях ещё есть. Прочитайте раздел «Частые вопросы».'; }
  else { document.getElementById('result-medal').textContent = '🥉'; document.getElementById('result-msg').textContent = 'Есть над чем поработать. Изучите наш справочник — это поможет защитить свои деньги!'; }
  r.classList.add('visible');
}

/* ===== FRAUD CATCHER GAME ===== */
let fraudGameActive = false, fraudScore = 0, fraudLives = 3, fraudTimer = 30, fraudLevel = 1;
let fraudInterval, fraudTimerInterval;
let fraudTargets = [];

function startFraudGame() {
  document.getElementById('fraud-overlay').style.display = 'none';
  fraudScore = 0; fraudLives = 3; fraudTimer = 30; fraudLevel = 1; fraudTargets = [];
  updateFraudHUD();
  fraudGameActive = true;
  runFraudGame();
  fraudTimerInterval = setInterval(() => {
    fraudTimer--;
    updateFraudHUD();
    if (fraudTimer <= 0) endFraudGame();
  }, 1000);
}

function updateFraudHUD() {
  document.getElementById('fraud-score').textContent = fraudScore;
  document.getElementById('fraud-lives').textContent = '❤️'.repeat(fraudLives) + '🖤'.repeat(Math.max(0, 3 - fraudLives));
  document.getElementById('fraud-timer').textContent = fraudTimer;
  document.getElementById('fraud-level').textContent = fraudLevel;
}

function runFraudGame() {
  const canvas = document.getElementById('fraud-canvas');
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;

  let spawnInterval = setInterval(() => {
    if (!fraudGameActive) { clearInterval(spawnInterval); return; }
    const isFraud = Math.random() > 0.4;
    fraudTargets.push({
      x: Math.random() * (W - 80) + 40,
      y: Math.random() * (H - 80) + 40,
      r: 28 + Math.random() * 10,
      isFraud,
      life: 1.8 - fraudLevel * 0.1,
      born: Date.now(),
      pulse: 0
    });
  }, Math.max(400, 1000 - fraudLevel * 80));

  function draw() {
    if (!fraudGameActive) return;
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, W, H);

    // Grid bg
    ctx.strokeStyle = 'rgba(0,212,255,0.04)';
    ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
    for (let y = 0; y < H; y += 40) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }

    const now = Date.now();
    fraudTargets = fraudTargets.filter(t => (now - t.born) / 1000 < t.life);

    fraudTargets.forEach(t => {
      const age = (now - t.born) / 1000;
      const alpha = age < 0.2 ? age / 0.2 : 1 - (age - (t.life - 0.3)) / 0.3;
      t.pulse = (t.pulse + 0.15) % (Math.PI * 2);
      const pr = t.r + Math.sin(t.pulse) * 4;

      // Outer glow
      const grad = ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, pr + 16);
      if (t.isFraud) {
        grad.addColorStop(0, `rgba(255,0,80,${alpha * 0.5})`);
        grad.addColorStop(1, 'rgba(255,0,80,0)');
      } else {
        grad.addColorStop(0, `rgba(0,212,255,${alpha * 0.3})`);
        grad.addColorStop(1, 'rgba(0,212,255,0)');
      }
      ctx.beginPath(); ctx.arc(t.x, t.y, pr + 16, 0, Math.PI * 2);
      ctx.fillStyle = grad; ctx.fill();

      // Circle
      ctx.beginPath(); ctx.arc(t.x, t.y, pr, 0, Math.PI * 2);
      ctx.fillStyle = t.isFraud ? `rgba(255,40,80,${alpha * 0.85})` : `rgba(10,80,180,${alpha * 0.85})`;
      ctx.fill();
      ctx.strokeStyle = t.isFraud ? `rgba(255,100,120,${alpha})` : `rgba(0,180,255,${alpha})`;
      ctx.lineWidth = 2; ctx.stroke();

      // Emoji
      ctx.globalAlpha = alpha;
      ctx.font = `${Math.round(pr * 0.9)}px serif`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(t.isFraud ? '🦹' : '👤', t.x, t.y);
      ctx.globalAlpha = 1;
    });

    // Level up check
    if (fraudScore > 0 && fraudScore % 10 === 0 && fraudLevel < 10) {
      fraudLevel = Math.min(10, 1 + Math.floor(fraudScore / 10));
    }
  }
  draw();

  canvas.onclick = function(e) {
    if (!fraudGameActive) return;
    const rect = canvas.getBoundingClientRect();
    const sx = canvas.width / rect.width, sy = canvas.height / rect.height;
    const mx = (e.clientX - rect.left) * sx, my = (e.clientY - rect.top) * sy;

    let hit = false;
    fraudTargets = fraudTargets.filter(t => {
      const d = Math.hypot(mx - t.x, my - t.y);
      if (d < t.r + 12) {
        hit = true;
        if (t.isFraud) { fraudScore++; showToast('+1 Мошенник пойман!', 'success'); }
        else { fraudLives--; showToast('❌ Это честный гражданин!', 'error'); if (fraudLives <= 0) endFraudGame(); }
        updateFraudHUD();
        return false;
      }
      return true;
    });
  };
}

function endFraudGame() {
  fraudGameActive = false;
  clearInterval(fraudTimerInterval);
  const ov = document.getElementById('fraud-overlay');
  ov.style.display = 'flex';
  ov.innerHTML = `
    <div style="font-size:3rem;margin-bottom:var(--space-4)">${fraudScore >= 20 ? '🏆' : fraudScore >= 10 ? '🥇' : '😅'}</div>
    <h2 style="font-family:var(--font-display);font-size:var(--text-xl);font-weight:800;margin-bottom:var(--space-3)">Игра окончена!</h2>
    <p style="color:var(--cyan);font-size:var(--text-xl);font-weight:800;margin-bottom:var(--space-3)">${fraudScore} очков</p>
    <p style="color:var(--text-muted);margin-bottom:var(--space-8);font-size:var(--text-sm)">${fraudScore >= 20 ? 'Отличный результат! Вы бы точно не попались на мошенников!' : fraudScore >= 10 ? 'Хороший результат!' : 'Тренируйтесь — мошенников нужно уметь распознавать!'}</p>
    <button class="game-start-btn" style="max-width:240px" onclick="startFraudGame()">▶ Играть снова</button>
  `;
}

/* ===== INVEST GAME ===== */
let investInit = false;
let investCash = 1000, investRound = 1, investMaxRounds = 10;
let selectedAsset = null;
const investAssets = [
  { id: 'somoni', name: 'Сомони-депозит', emoji: '🏦', price: 100, owned: 0, history: [100], baseVol: 0.02 },
  { id: 'gold', name: 'Золото', emoji: '🥇', price: 320, owned: 0, history: [320], baseVol: 0.06 },
  { id: 'stock', name: 'Акции IT', emoji: '📊', price: 180, owned: 0, history: [180], baseVol: 0.12 },
  { id: 'crypto', name: 'Крипто', emoji: '₿', price: 450, owned: 0, history: [450], baseVol: 0.22 },
  { id: 'bond', name: 'Облигации', emoji: '📜', price: 200, owned: 0, history: [200], baseVol: 0.03 },
  { id: 'startups', name: 'Стартапы', emoji: '🚀', price: 80, owned: 0, history: [80], baseVol: 0.3 },
];

function initInvestGame() {
  investInit = true;
  investCash = 1000; investRound = 1; selectedAsset = null;
  investAssets.forEach(a => { a.price = a.history[0]; a.owned = 0; a.history = [a.history[0]]; });
  renderInvestGame();
  drawMarketChart();
}

function renderInvestGame() {
  document.getElementById('invest-round').textContent = `Раунд ${investRound} / ${investMaxRounds}`;
  const grid = document.getElementById('assets-grid');
  grid.innerHTML = investAssets.map(a => {
    const prev = a.history.length > 1 ? a.history[a.history.length - 2] : a.price;
    const change = ((a.price - prev) / prev * 100).toFixed(1);
    const up = a.price >= prev;
    return `<div class="asset-card${a.owned > 0 ? ' owned' : ''}" onclick="selectAsset('${a.id}')">
      <div class="asset-emoji">${a.emoji}</div>
      <div class="asset-name">${a.name}</div>
      <div class="asset-price">${a.price.toFixed(0)} с.</div>
      <div class="asset-change ${up ? 'change-up' : 'change-down'}">${up ? '▲' : '▼'} ${Math.abs(change)}%</div>
      ${a.owned > 0 ? `<div style="font-size:var(--text-xs);color:var(--green);margin-top:4px">×${a.owned}</div>` : ''}
    </div>`;
  }).join('');
  renderPortfolio();
}

function selectAsset(id) {
  selectedAsset = investAssets.find(a => a.id === id);
  const el = document.getElementById('selected-asset-info');
  el.style.display = 'block';
  document.getElementById('selected-name').textContent = selectedAsset.emoji + ' ' + selectedAsset.name;
  document.getElementById('selected-detail').textContent = `Цена: ${selectedAsset.price.toFixed(0)} сомони · У вас: ${selectedAsset.owned} шт.`;
}

function investBuy() {
  if (!selectedAsset) { showToast('Выберите актив!', 'warn'); return; }
  if (investCash < selectedAsset.price) { showToast('Недостаточно средств', 'error'); return; }
  investCash -= selectedAsset.price;
  selectedAsset.owned++;
  showToast(`Куплен: ${selectedAsset.emoji} ${selectedAsset.name}`, 'success');
  selectAsset(selectedAsset.id);
  renderInvestGame();
}

function investSell() {
  if (!selectedAsset) { showToast('Выберите актив!', 'warn'); return; }
  if (selectedAsset.owned <= 0) { showToast('Нет этого актива в портфеле', 'error'); return; }
  investCash += selectedAsset.price;
  selectedAsset.owned--;
  showToast(`Продан: ${selectedAsset.emoji} ${selectedAsset.name}`, 'success');
  selectAsset(selectedAsset.id);
  renderInvestGame();
}

function investNextRound() {
  if (investRound >= investMaxRounds) { showInvestResult(); return; }
  investRound++;
  investAssets.forEach(a => {
    const change = (Math.random() * 2 - 0.85) * a.baseVol;
    a.price = Math.max(10, a.price * (1 + change));
    a.history.push(a.price);
  });
  renderInvestGame();
  drawMarketChart();
}

function renderPortfolio() {
  const rows = document.getElementById('portfolio-rows');
  const owned = investAssets.filter(a => a.owned > 0);
  const portfolioVal = owned.reduce((s, a) => s + a.price * a.owned, 0);
  const total = investCash + portfolioVal;

  document.getElementById('portfolio-total').textContent = total.toFixed(0) + ' сомони';
  document.getElementById('cash-val').textContent = investCash.toFixed(0) + ' сомони';

  const ownedRows = owned.map(a => `
    <div class="portfolio-row">
      <span class="pr-name">${a.emoji} ${a.name} ×${a.owned}</span>
      <span class="pr-val">${(a.price * a.owned).toFixed(0)} с.</span>
    </div>
  `).join('');
  rows.innerHTML = `<div class="portfolio-row"><span class="pr-name">💵 Наличные</span><span class="pr-val" id="cash-val">${investCash.toFixed(0)} сомони</span></div>${ownedRows}`;

  // profit indicator
  const startCash = 1000;
  const profit = total - startCash;
  const pctChange = (profit / startCash * 100).toFixed(1);
  const color = profit >= 0 ? 'var(--green)' : '#ff6b6b';
  document.getElementById('portfolio-total').style.color = color;
}

function drawMarketChart() {
  const canvas = document.getElementById('market-chart-canvas');
  const ctx = canvas.getContext('2d');
  const W = canvas.offsetWidth || 600, H = 160;
  canvas.width = W; canvas.height = H;
  ctx.clearRect(0, 0, W, H);

  const colors = ['#00d4ff', '#ffd700', '#7c3aed', '#ff6b6b', '#00ff88', '#ff9500'];
  const displayAssets = investAssets.slice(0, 4);

  displayAssets.forEach((a, ai) => {
    if (a.history.length < 2) return;
    const maxH = a.history.length;
    const minP = Math.min(...a.history), maxP = Math.max(...a.history);
    const range = maxP - minP || 1;

    ctx.beginPath();
    a.history.forEach((p, i) => {
      const x = (i / (maxH - 1)) * (W - 40) + 20;
      const y = H - 20 - ((p - minP) / range) * (H - 40);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.strokeStyle = colors[ai]; ctx.lineWidth = 2; ctx.stroke();

    // label
    const lastX = W - 20, lastY = H - 20 - ((a.history[a.history.length - 1] - minP) / range) * (H - 40);
    ctx.fillStyle = colors[ai]; ctx.font = '10px Inter'; ctx.fillText(a.emoji, lastX - 24, lastY + 4);
  });
}

function showInvestResult() {
  const total = investCash + investAssets.reduce((s, a) => s + a.price * a.owned, 0);
  const profit = total - 1000;
  const pct = (profit / 1000 * 100).toFixed(1);
  showToast(`Игра окончена! Итог: ${total.toFixed(0)} сомони (${profit >= 0 ? '+' : ''}${pct}%)`, profit >= 0 ? 'success' : 'error');
  setTimeout(() => {
    if (confirm(`Игра окончена!\n\nНачальный капитал: 1 000 сомони\nКонечный капитал: ${total.toFixed(0)} сомони\nПрибыль/убыток: ${profit >= 0 ? '+' : ''}${profit.toFixed(0)} сомони (${pct}%)\n\nСыграть снова?`)) {
      initInvestGame();
    }
  }, 500);
}

function switchGame(name) {
  document.querySelectorAll('.game-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.game-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('game-' + name).classList.add('active');
  document.getElementById('tab-' + name).classList.add('active');
  if (name === 'invest' && !investInit) initInvestGame();
}

/* ===== INIT ===== */
document.getElementById('nav-home').classList.add('active');