/* ===== PAGE NAVIGATION ===== */
let currentPage = 'home';
function showPage(name, opts) {
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
  markProgress(name);
  if (opts?.faq) setTimeout(() => openFaqById(opts.faq), 120);
  if (opts?.game) setTimeout(() => switchGame(opts.game), 120);
  return false;
}

/* ===== NAVBAR ===== */
function updateNavbarScroll() {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
}
window.addEventListener('scroll', updateNavbarScroll, { passive: true });
updateNavbarScroll();
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
    color: 0x5888e8, wireframe: true, opacity: 0.18, transparent: true
  });
  window.__heroMeshMat = mat;
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
  markProgress('diary');
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
let quizStarted = false, quizCurrent = 0, quizScore = 0, quizAnswered = false, quizWrongTopics = [];

function startQuiz() {
  quizStarted = true; quizCurrent = 0; quizScore = 0; quizAnswered = false; quizWrongTopics = [];
  document.getElementById('quiz-result').classList.remove('visible');
  renderQuiz();
}
function renderQuiz() {
  const quizData = getQuizData();
  if (quizCurrent >= quizData.length) { showQuizResult(); return; }
  const q = quizData[quizCurrent];
  const pct = (quizCurrent / quizData.length) * 100;
  document.getElementById('quiz-progress-bar').style.width = pct + '%';
  document.getElementById('quiz-progress-text').textContent = quizCurrent + ' / ' + quizData.length;
  const letters = ['A', 'B', 'C', 'D'];
  document.getElementById('quiz-area').innerHTML = `
    <div class="quiz-card">
      <div class="quiz-q-num">${contentT('quiz.qNum', { n: quizCurrent + 1, total: quizData.length })}</div>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-options">
        ${q.opts.map((o, i) => `<button class="quiz-option" data-letter="${letters[i]}" data-idx="${i}" onclick="answerQuiz(this, ${i}, ${q.correct})">${o}</button>`).join('')}
      </div>
      <div class="quiz-explanation" id="quiz-exp">${q.exp}${q.faq ? `<button type="button" class="quiz-faq-link" onclick="showPage('faq', { faq: '${q.faq}' })">→ ${q.faqLabel}</button>` : ''}</div>
    </div>
    <button class="quiz-next" id="quiz-next" onclick="nextQuestion()">${contentT('quiz.next')}</button>
  `;
  quizAnswered = false;
}
function answerQuiz(btn, idx, correct) {
  if (quizAnswered) return;
  quizAnswered = true;
  const quizData = getQuizData();
  document.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
  if (idx === correct) { btn.classList.add('correct'); quizScore++; showToast(contentT('quiz.correct'), 'success'); }
  else {
    btn.classList.add('wrong');
    document.querySelectorAll('.quiz-option')[correct].classList.add('correct');
    showToast(contentT('quiz.wrong'), 'error');
    const q = quizData[quizCurrent];
    if (q.faq && !quizWrongTopics.includes(q.faq)) quizWrongTopics.push(q.faq);
  }
  document.getElementById('quiz-exp').classList.add('visible');
  document.getElementById('quiz-next').classList.add('visible');
}
function nextQuestion() { quizCurrent++; renderQuiz(); }
function showQuizResult() {
  const quizData = getQuizData();
  document.getElementById('quiz-area').innerHTML = '';
  document.getElementById('quiz-progress-bar').style.width = '100%';
  document.getElementById('quiz-progress-text').textContent = quizScore + ' / ' + quizData.length;
  const r = document.getElementById('quiz-result');
  const pct = quizScore / quizData.length;
  document.getElementById('result-score').textContent = quizScore + ' / ' + quizData.length;
  if (pct >= 0.9) { document.getElementById('result-medal').textContent = '🥇'; document.getElementById('result-msg').textContent = contentT('quiz.resultGold'); }
  else if (pct >= 0.6) { document.getElementById('result-medal').textContent = '🥈'; document.getElementById('result-msg').textContent = contentT('quiz.resultSilver'); }
  else { document.getElementById('result-medal').textContent = '🥉'; document.getElementById('result-msg').textContent = contentT('quiz.resultBronze'); }
  if (quizWrongTopics.length) {
    const links = quizWrongTopics.slice(0, 3).map(id => {
      const el = document.getElementById(id);
      const label = el ? el.querySelector('.faq-q-text')?.textContent.replace(/^[^\s]+\s/, '') : id;
      return `<button type="button" class="quiz-faq-link" onclick="showPage('faq', { faq: '${id}' })">→ ${label}</button>`;
    }).join('');
    document.getElementById('result-msg').innerHTML += `<div style="margin-top:var(--space-4);display:flex;flex-direction:column;gap:var(--space-2);align-items:flex-start">${links}</div>`;
  }
  markProgress('quizDone');
  r.classList.add('visible');
}

/* ===== FRAUD CATCHER GAME ===== */
let fraudGameActive = false, fraudScore = 0, fraudLives = 3, fraudTimer = 30, fraudLevel = 1;
let fraudInterval, fraudTimerInterval;
let fraudTargets = [];

function startFraudGame() {
  markProgress('game');
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
    ctx.fillStyle = colors[ai]; ctx.font = `10px ${currentLang === 'tg' ? '"Times New Roman TJ", "Times New Roman", Times, serif' : 'Inter'}`; ctx.fillText(a.emoji, lastX - 24, lastY + 4);
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

/* ===== SCAM OR SAFE GAME ===== */
let scamActive = false, scamIdx = 0, scamScoreVal = 0, scamStreakVal = 0, scamTimeLeft = 12, scamTimerId;

function startScamGame() {
  scamActive = true; scamIdx = 0; scamScoreVal = 0; scamStreakVal = 0;
  document.getElementById('scam-feedback').className = 'scam-feedback';
  renderScamRound();
}

function renderScamRound() {
  const scamData = getScamData();
  if (scamIdx >= scamData.length) { endScamGame(); return; }
  const s = scamData[scamIdx];
  document.getElementById('scam-icon').textContent = s.icon;
  document.getElementById('scam-text').textContent = s.text;
  document.getElementById('scam-score').textContent = scamScoreVal;
  document.getElementById('scam-round').textContent = (scamIdx + 1) + ' / ' + scamData.length;
  document.getElementById('scam-streak').textContent = scamStreakVal;
  document.getElementById('scam-feedback').className = 'scam-feedback';
  document.getElementById('scam-actions').innerHTML = `
    <button class="scam-btn scam-btn-fraud" onclick="answerScam(true)">${contentT('game.scam.scamBtn')}</button>
    <button class="scam-btn scam-btn-safe" onclick="answerScam(false)">${contentT('game.scam.safeBtn')}</button>
  `;
  scamTimeLeft = 12;
  document.getElementById('scam-timer').textContent = scamTimeLeft;
  clearInterval(scamTimerId);
  scamTimerId = setInterval(() => {
    if (!scamActive) return;
    scamTimeLeft--;
    document.getElementById('scam-timer').textContent = scamTimeLeft;
    if (scamTimeLeft <= 0) answerScam(null);
  }, 1000);
}

function answerScam(pickedScam) {
  if (!scamActive) return;
  clearInterval(scamTimerId);
  const scamData = getScamData();
  const s = scamData[scamIdx];
  const correct = pickedScam === s.isScam;
  const fb = document.getElementById('scam-feedback');
  fb.className = 'scam-feedback visible ' + (correct ? 'ok' : 'bad');
  if (pickedScam === null) {
    fb.textContent = contentT('scam.timeUp') + ' ' + s.exp;
    scamStreakVal = 0;
  } else if (correct) {
    scamStreakVal++;
    const bonus = scamStreakVal >= 3 ? 3 : scamStreakVal >= 2 ? 2 : 1;
    scamScoreVal += bonus;
    fb.textContent = contentT('scam.correct') + ' ' + s.exp;
    showToast(contentT('scam.points', { n: bonus }), 'success');
  } else {
    scamStreakVal = 0;
    fb.textContent = contentT('scam.wrong') + ' ' + s.exp;
    showToast(contentT('scam.wrongAnswer'), 'error');
  }
  document.getElementById('scam-score').textContent = scamScoreVal;
  document.getElementById('scam-streak').textContent = scamStreakVal;
  document.getElementById('scam-actions').innerHTML = `<button class="game-start-btn" onclick="scamNext()">${contentT('game.scam.next')}</button>`;
}

function scamNext() {
  scamIdx++;
  renderScamRound();
}

function endScamGame() {
  scamActive = false;
  clearInterval(scamTimerId);
  const scamData = getScamData();
  const maxScore = scamData.length * 3;
  document.getElementById('scam-icon').textContent = scamScoreVal >= 12 ? '🏆' : scamScoreVal >= 8 ? '🥇' : '📚';
  const tail = scamScoreVal >= 12 ? contentT('scam.endGreat') : scamScoreVal >= 8 ? contentT('scam.endGood') : contentT('scam.endTry');
  document.getElementById('scam-text').textContent = contentT('scam.endScore', { score: scamScoreVal, max: maxScore }) + ' ' + tail;
  document.getElementById('scam-feedback').className = 'scam-feedback';
  document.getElementById('scam-actions').innerHTML = `<button class="game-start-btn" onclick="startScamGame()">${contentT('game.scam.restart')}</button>`;
}

/* ===== PHISH HUNT GAME ===== */
function getPhishRounds() { return getPhishData(currentLang); }
let phishActive = false, phishIdx = 0, phishScoreVal = 0, phishMissVal = 0;

function startPhishGame() {
  phishActive = true; phishIdx = 0; phishScoreVal = 0; phishMissVal = 0;
  document.getElementById('phish-start-btn').style.display = 'none';
  document.getElementById('phish-hint').textContent = '';
  updatePhishHUD();
  renderPhishRound();
}

function updatePhishHUD() {
  const rounds = getPhishRounds();
  document.getElementById('phish-score').textContent = phishScoreVal;
  document.getElementById('phish-round').textContent = Math.min(phishIdx + 1, rounds.length) + ' / ' + rounds.length;
  document.getElementById('phish-miss').textContent = phishMissVal + ' / 3';
}

function renderPhishRound() {
  const phishData = getPhishRounds();
  if (phishIdx >= phishData.length) { endPhishGame(true); return; }
  const round = phishData[phishIdx];
  document.getElementById('phish-prompt').textContent = t('phish.round', { n: phishIdx + 1 });
  document.getElementById('phish-hint').textContent = '';
  const grid = document.getElementById('phish-url-grid');
  grid.innerHTML = round.urls.map((url, i) =>
    `<button class="phish-url-btn" onclick="pickPhish(${i})">${url}</button>`
  ).join('');
  updatePhishHUD();
}

function pickPhish(idx) {
  if (!phishActive) return;
  const phishData = getPhishRounds();
  const round = phishData[phishIdx];
  const buttons = document.querySelectorAll('.phish-url-btn');
  buttons.forEach(b => b.disabled = true);
  if (idx === round.fake) {
    buttons[idx].classList.add('correct');
    phishScoreVal += 2;
    document.getElementById('phish-hint').textContent = '✅ ' + round.hint;
    showToast('Фишинг найден! +2', 'success');
    phishIdx++;
    setTimeout(() => renderPhishRound(), 1800);
  } else {
    buttons[idx].classList.add('wrong');
    buttons[round.fake].classList.add('correct');
    phishMissVal++;
    document.getElementById('phish-hint').textContent = '❌ ' + round.hint;
    showToast('Это не фишинг', 'error');
    if (phishMissVal >= 3) setTimeout(() => endPhishGame(false), 1800);
    else { phishIdx++; setTimeout(() => renderPhishRound(), 1800); }
  }
  updatePhishHUD();
}

function endPhishGame(won) {
  phishActive = false;
  document.getElementById('phish-prompt').textContent = won
    ? `🎉 Все раунды пройдены! Счёт: ${phishScoreVal}. Вы умеете замечать поддельные ссылки.`
    : `Игра окончена. Счёт: ${phishScoreVal}. Тренируйтесь проверять каждый символ в URL!`;
  document.getElementById('phish-url-grid').innerHTML = '';
  document.getElementById('phish-hint').textContent = '';
  document.getElementById('phish-start-btn').style.display = 'block';
  document.getElementById('phish-start-btn').textContent = t('phish.restart');
}

/* ===== PYRAMID GAME ===== */
let pyrActive = false, pyrBalance = 1000, pyrRoundNum = 0, pyrRisk = 0, pyrYieldPct = 0;

function startPyramidGame() {
  pyrActive = true; pyrBalance = 1000; pyrRoundNum = 0; pyrRisk = 5; pyrYieldPct = 0;
  document.getElementById('pyramid-log').innerHTML = '';
  document.getElementById('pyramid-visual').classList.remove('shake');
  updatePyramidHUD();
  logPyramid('Вы вложили 1 000 сомони в «супер-проект» с обещанием 15% в месяц…');
  showPyramidActions();
}

function updatePyramidHUD() {
  document.getElementById('pyr-balance').textContent = pyrBalance.toLocaleString('ru') + ' с.';
  document.getElementById('pyr-round').textContent = pyrRoundNum;
  document.getElementById('pyr-yield').textContent = pyrYieldPct ? '+' + pyrYieldPct + '%' : '—';
  document.getElementById('pyr-risk').textContent = pyrRisk + '%';
  document.getElementById('pyr-pct').textContent = pyrYieldPct;
  const riskEl = document.getElementById('pyr-risk');
  riskEl.style.color = pyrRisk >= 60 ? '#ff2850' : pyrRisk >= 35 ? '#ff9500' : 'var(--cyan)';
}

function logPyramid(msg) {
  const log = document.getElementById('pyramid-log');
  log.innerHTML = `<div>• ${msg}</div>` + log.innerHTML;
}

function showPyramidActions() {
  document.getElementById('pyramid-desc').textContent = pyrRoundNum === 0
    ? 'Проект обещает быстрый доход. Можно реинвестировать или вывести деньги, пока пирамида не рухнула.'
    : `Раунд ${pyrRoundNum}: баланс вырос, но риск обвала — ${pyrRisk}%. Вывести сейчас или рискнуть дальше?`;
  document.getElementById('pyramid-actions').innerHTML = `
    <button class="pyr-btn pyr-btn-invest" onclick="pyramidInvest()">📈 Реинвестировать</button>
    <button class="pyr-btn pyr-btn-cashout" onclick="pyramidCashout()">💵 Вывести деньги</button>
  `;
}

function pyramidInvest() {
  if (!pyrActive) return;
  pyrRoundNum++;
  pyrYieldPct = 8 + Math.floor(Math.random() * 12) + pyrRoundNum * 2;
  pyrBalance = Math.round(pyrBalance * (1 + pyrYieldPct / 100));
  pyrRisk = Math.min(95, pyrRisk + 12 + pyrRoundNum * 3);
  logPyramid(`Раунд ${pyrRoundNum}: +${pyrYieldPct}% → баланс ${pyrBalance.toLocaleString('ru')} с. Риск обвала: ${pyrRisk}%.`);
  updatePyramidHUD();

  if (Math.random() * 100 < pyrRisk) {
    pyramidCollapse();
    return;
  }
  document.getElementById('pyramid-visual').classList.add('shake');
  setTimeout(() => document.getElementById('pyramid-visual').classList.remove('shake'), 500);
  showPyramidActions();
}

function pyramidCashout() {
  if (!pyrActive) return;
  pyrActive = false;
  const profit = pyrBalance - 1000;
  logPyramid(`Вы вывели ${pyrBalance.toLocaleString('ru')} сомони вовремя! ${profit >= 0 ? 'Прибыль: +' + profit : 'Убыток: ' + profit} с.`);
  document.getElementById('pyramid-desc').textContent = profit >= 500
    ? `🏆 Отлично! Вы вовремя поняли, что это пирамида, и забрали ${pyrBalance.toLocaleString('ru')} сомони.`
    : `Вы вывели ${pyrBalance.toLocaleString('ru')} сомони. В реальности такие проекты часто блокируют вывод.`;
  document.getElementById('pyramid-actions').innerHTML = `<button class="game-start-btn" onclick="startPyramidGame()">▶ Играть снова</button>`;
  showToast('Деньги выведены!', 'success');
}

function pyramidCollapse() {
  pyrActive = false;
  document.getElementById('pyramid-visual').classList.add('shake');
  logPyramid('💥 Пирамида рухнула! Проект закрылся, вывод заблокирован. Баланс обнулён.');
  document.getElementById('pyr-balance').textContent = '0 с.';
  document.getElementById('pyramid-desc').textContent = 'Пирамида обрушилась — так заканчиваются схемы Понци. Первым платят, последним не платят никогда. Не гонитесь за «гарантированным» доходом!';
  document.getElementById('pyramid-actions').innerHTML = `<button class="game-start-btn" onclick="startPyramidGame()">▶ Попробовать снова</button>`;
  showToast('Пирамида рухнула!', 'error');
  markProgress('game');
}

/* ===== PRODUCT UX: PROGRESS, SEARCH, EMERGENCY, NEWS ===== */
const PROGRESS_KEY = 'sm_progress';
const PROGRESS_SECTIONS = ['kodeks', 'faq', 'diary', 'quizDone', 'game'];

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; } catch { return {}; }
}
function saveProgress(data) { localStorage.setItem(PROGRESS_KEY, JSON.stringify(data)); }

function markProgress(section) {
  const p = loadProgress();
  if (section === 'quiz') p.quizStarted = true;
  else if (section === 'quizDone') { p.quizDone = true; p.quizStarted = true; }
  else if (section === 'diary') p.diary = true;
  else if (section === 'game') p.game = true;
  else if (['kodeks', 'faq', 'news', 'home'].includes(section)) p[section] = true;
  saveProgress(p);
  renderProgressStrip();
}

function renderProgressStrip() {
  const p = loadProgress();
  const done = PROGRESS_SECTIONS.filter(k => p[k]).length;
  const el = document.getElementById('progress-fill');
  const label = document.getElementById('progress-label');
  if (!el || !label) return;
  const pct = Math.round(done / PROGRESS_SECTIONS.length * 100);
  el.style.width = pct + '%';
  label.textContent = t('home.progress', { n: done, total: PROGRESS_SECTIONS.length });
}

function openFaqById(id) {
  const item = document.getElementById(id);
  if (!item) return;
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  item.classList.add('open');
  item.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

const emergencyKeys = ['sms', 'transfer', 'app', 'card'];

function openEmergency() {
  document.getElementById('emergency-modal-title').textContent = t('modal.emergency.title');
  document.getElementById('emergency-modal-intro').textContent = t('modal.emergency.intro');
  document.getElementById('emergency-steps').innerHTML = '';
  document.getElementById('emergency-actions').innerHTML = emergencyKeys.map(k => {
    const s = getEmergencyScenario(k);
    return `<button class="emergency-btn emergency-btn-modal" type="button" onclick="openEmergencyScenario('${k}')"><span class="emergency-btn-icon">⚡</span><span class="emergency-btn-text">${s.short}</span></button>`;
  }).join('');
  document.getElementById('emergency-modal').classList.add('open');
}
function closeEmergency() { document.getElementById('emergency-modal').classList.remove('open'); }

function openEmergencyScenario(key) {
  const s = getEmergencyScenario(key);
  if (!s) return;
  document.getElementById('emergency-modal-title').textContent = s.title;
  document.getElementById('emergency-modal-intro').textContent = s.intro;
  document.getElementById('emergency-steps').innerHTML = s.steps.map((step, i) =>
    `<li><span class="step-n">${i + 1}</span><span>${step}</span></li>`
  ).join('');
  document.getElementById('emergency-actions').innerHTML = `
    <button class="btn-primary btn-sm modal-action-btn" type="button" onclick="closeEmergency();showPage('faq', { faq: '${s.faq}' })">${s.faqLabel}</button>
    <button class="btn-secondary btn-sm modal-action-btn" type="button" onclick="closeEmergency();showPage('kodeks')">${t('em.kodeks')}</button>
  `;
  document.getElementById('emergency-modal').classList.add('open');
}

let riskIdx = 0, riskPoints = 0;

function openRiskCheck() {
  riskIdx = 0; riskPoints = 0;
  document.getElementById('risk-modal').classList.add('open');
  renderRiskQuestion();
}
function closeRiskCheck() { document.getElementById('risk-modal').classList.remove('open'); }

function renderRiskQuestion() {
  const body = document.getElementById('risk-check-body');
  const riskQuestions = getRiskQuestions();
  if (riskIdx >= riskQuestions.length) {
    const level = riskPoints >= 3 ? 'high' : riskPoints >= 1 ? 'mid' : 'low';
    const titles = { low: contentT('risk.lowTitle'), mid: contentT('risk.midTitle'), high: contentT('risk.highTitle') };
    const msgs = { low: contentT('risk.lowMsg'), mid: contentT('risk.midMsg'), high: contentT('risk.highMsg') };
    body.innerHTML = `
      <div class="risk-result ${level}"><strong>${titles[level]}</strong><br>${msgs[level]}</div>
      <div style="display:flex;flex-wrap:wrap;gap:var(--space-3);margin-top:var(--space-5)">
        <button class="btn-primary btn-sm" type="button" onclick="closeRiskCheck();showPage('quiz')">${contentT('risk.btnQuiz')}</button>
        <button class="btn-secondary btn-sm" type="button" onclick="closeRiskCheck();openEmergency()">${contentT('risk.btnEmergency')}</button>
        <button class="btn-secondary btn-sm" type="button" onclick="closeRiskCheck();showPage('faq')">${contentT('risk.btnFaq')}</button>
      </div>`;
    return;
  }
  const rq = riskQuestions[riskIdx];
  body.innerHTML = `
    <p class="risk-q">${riskIdx + 1}. ${rq.q}</p>
    <div class="risk-options">${rq.opts.map((o, i) =>
      `<button type="button" class="risk-opt" onclick="answerRisk(${i})">${o}</button>`
    ).join('')}</div>`;
}

function answerRisk(idx) {
  const riskQuestions = getRiskQuestions();
  if (riskQuestions[riskIdx].risky.includes(idx)) riskPoints++;
  riskIdx++;
  renderRiskQuestion();
}

let searchIndex = [];
function buildSearchIndex() {
  searchIndex = [];
  document.querySelectorAll('.faq-item').forEach(el => {
    searchIndex.push({
      type: 'FAQ',
      title: el.querySelector('.faq-q-text')?.textContent || '',
      text: el.dataset.search || el.textContent,
      action: () => showPage('faq', { faq: el.id })
    });
  });
  document.querySelectorAll('.news-card').forEach(el => {
    searchIndex.push({
      type: 'Новость',
      title: el.querySelector('.news-title')?.textContent || '',
      text: el.querySelector('.news-desc')?.textContent || '',
      action: () => showPage('news')
    });
  });
  searchIndex.push(
    { type: 'Кодекс', title: 'Статья 247. Мошенничество', text: 'уголовная ответственность обман доверие', action: () => showPage('kodeks') },
    { type: 'Квиз', title: 'Проверь себя', text: 'тест финансовая безопасность', action: () => showPage('quiz') },
    { type: 'Игра', title: 'Мини-игры', text: 'мошенник фишинг пирамида', action: () => showPage('game') }
  );
}

function openSearch() {
  buildSearchIndex();
  document.getElementById('search-modal').classList.add('open');
  const input = document.getElementById('global-search-input');
  input.value = '';
  document.getElementById('search-results').innerHTML = '';
  setTimeout(() => input.focus(), 100);
  input.oninput = () => runSearch(input.value);
}
function closeSearch() { document.getElementById('search-modal').classList.remove('open'); }

function runSearch(q) {
  const results = document.getElementById('search-results');
  if (!q.trim()) { results.innerHTML = ''; return; }
  const terms = q.toLowerCase().split(/\s+/);
  const hits = searchIndex.filter(item => {
    const hay = (item.title + ' ' + item.text).toLowerCase();
    return terms.every(t => hay.includes(t));
  }).slice(0, 12);
  results.innerHTML = hits.length
    ? hits.map((h, i) => `<button type="button" class="search-result-item" data-idx="${i}"><div class="search-result-type">${h.type}</div><div class="search-result-title">${h.title}</div></button>`).join('')
    : '<p style="color:var(--text-muted);font-size:var(--text-sm);padding:var(--space-4)">Ничего не найдено</p>';
  results.querySelectorAll('.search-result-item').forEach((btn, i) => {
    btn.onclick = () => { closeSearch(); hits[i].action(); };
  });
}

function categorizeNewsCard(card) {
  const text = card.textContent.toLowerCase();
  const cats = [];
  if (/telegram|аккаунт|соц|tinder|мессендж/.test(text)) cats.push('social');
  if (/sms|смс|домофон|код|push/.test(text)) cats.push('sms');
  if (/звон|телефон|вишинг|доброт|голос/.test(text)) cats.push('calls');
  if (/банк|кредит|карт|депозит|сбер|амонат|сомони/.test(text)) cats.push('banks');
  if (/работ|ваканс|собесед|джоб/.test(text)) cats.push('jobs');
  if (!cats.length) cats.push('general');
  card.dataset.category = cats.join(' ');
  if (/осторожно|🚨|атака|мошенн|ловуш/.test(text)) {
    card.dataset.important = 'true';
    card.classList.add('important-news');
  }
  const dateEl = card.querySelector('.news-date');
  if (dateEl) {
    const m = dateEl.textContent.match(/(\d{1,2})\s*(мая|февр|янв)/i);
    if (m) card.dataset.sort = String(20260000 + (['янв','февр','мая'].indexOf(m[2].slice(0,3)) + 1) * 100 + parseInt(m[1]));
    else card.dataset.sort = '0';
  }
}

function initNewsFilters() {
  const grid = document.getElementById('news-grid');
  if (!grid) return;
  grid.querySelectorAll('.news-card').forEach(categorizeNewsCard);
  document.querySelectorAll('.news-filter').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('.news-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyNewsFilter(btn.dataset.filter);
    };
  });
  document.getElementById('news-sort')?.addEventListener('change', () => applyNewsFilter(document.querySelector('.news-filter.active')?.dataset.filter || 'all'));
}

function applyNewsFilter(filter) {
  const grid = document.getElementById('news-grid');
  const sort = document.getElementById('news-sort')?.value || 'new';
  const cards = [...grid.querySelectorAll('.news-card')];
  cards.forEach(card => {
    const cats = card.dataset.category || '';
    const show = filter === 'all' || cats.includes(filter);
    card.dataset.hidden = show ? 'false' : 'true';
  });
  if (sort === 'important') {
    cards.sort((a, b) => (b.dataset.important === 'true') - (a.dataset.important === 'true'));
  } else {
    cards.sort((a, b) => (parseInt(b.dataset.sort) || 0) - (parseInt(a.dataset.sort) || 0));
  }
  cards.forEach(c => grid.appendChild(c));
}

function syncThemeAccent() {
  const light = document.documentElement.dataset.theme === 'light';
  if (window.__heroMeshMat) window.__heroMeshMat.color.setHex(light ? 0xc026d3 : 0x5888e8);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeSearch(); closeEmergency(); closeRiskCheck(); }
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
});

/* ===== INIT ===== */
document.getElementById('nav-home').classList.add('active');
initTheme();
syncThemeAccent();
setLanguage(localStorage.getItem('sm_lang') || 'ru');
renderProgressStrip();
initNewsFilters();