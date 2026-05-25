/* ===== RENDER PAGE CONTENT ON LANGUAGE CHANGE ===== */

function renderFaq() {
  const section = document.getElementById('faq-section');
  if (!section || typeof FAQ_ITEMS === 'undefined') return;
  const items = FAQ_ITEMS[currentLang] || FAQ_ITEMS.ru;
  const openId = document.querySelector('.faq-item.open')?.id;
  section.innerHTML = items.map(item => `
    <div class="faq-item${openId === item.id ? ' open' : ''}" id="${item.id}" data-search="${item.search}">
      <button class="faq-q" onclick="toggleFaq(this)">
        <span class="faq-q-text">${item.title}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-body"><div class="faq-content">${item.html}</div></div>
    </div>
  `).join('');
}

function renderKodeks() {
  const wrap = document.getElementById('kodeks-parts');
  if (!wrap || typeof KODEKS_PARTS === 'undefined') return;
  const parts = KODEKS_PARTS[currentLang] || KODEKS_PARTS.ru;
  wrap.innerHTML = parts.map((p, i) => `
    <div class="accordion-item" data-acc>
      <button class="accordion-trigger" onclick="toggleAcc(this)">
        <div class="accordion-trigger-left">
          <div class="accordion-num">${i + 1}</div>
          <span class="accordion-title">${p.title}</span>
        </div>
        <div style="display:flex;align-items:center;gap:var(--space-3)">
          <span class="accordion-badge">${p.badge}</span>
          <svg class="accordion-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </button>
      <div class="accordion-body"><div class="accordion-content">${p.html}</div></div>
    </div>
  `).join('');
}

function applyContentStrings() {
  if (typeof PAGE_CONTENT === 'undefined') return;
  const c = PAGE_CONTENT[currentLang] || PAGE_CONTENT.ru;
  document.querySelectorAll('[data-content]').forEach(el => {
    const key = el.dataset.content;
    if (!c[key]) return;
    if (el.dataset.contentHtml === 'true') el.innerHTML = c[key];
    else el.textContent = c[key];
  });
}

function renderFeatures() {
  if (typeof FEATURES === 'undefined') return;
  const items = FEATURES[currentLang] || FEATURES.ru;
  document.querySelectorAll('[data-feature]').forEach((el, i) => {
    const f = items[i];
    if (!f) return;
    const title = el.querySelector('.feature-title');
    const desc = el.querySelector('.feature-desc');
    if (title) title.textContent = f.title;
    if (desc) desc.textContent = f.desc;
  });
}

function renderGameInstructions() {
  if (typeof GAME_TEXT === 'undefined') return;
  const g = GAME_TEXT[currentLang] || GAME_TEXT.ru;
  const map = [
    ['fraud-rules-title', g.fraudRulesTitle],
    ['fraud-rules-list', null, g.fraudRules],
    ['scam-rules-title', g.scamRulesTitle],
    ['scam-rules-list', null, g.scamRules],
    ['phish-rules-title', g.phishRulesTitle],
    ['phish-rules-list', null, g.phishRules],
    ['pyramid-rules-title', g.pyramidRulesTitle],
    ['pyramid-rules-list', null, g.pyramidRules],
  ];
  map.forEach(([id, title, list]) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (title) el.textContent = title;
    if (list) el.innerHTML = list.map(li => `<li>${li}</li>`).join('');
  });
  const fraudOverlay = document.getElementById('fraud-overlay');
  if (fraudOverlay && g.fraudStart) {
    const h2 = fraudOverlay.querySelector('h2');
    const p = fraudOverlay.querySelector('p');
    const btn = fraudOverlay.querySelector('button');
    if (h2) h2.textContent = g.fraudStartTitle;
    if (p) p.textContent = g.fraudStartDesc;
    if (btn) btn.textContent = g.fraudStart;
  }
}

function contentT(key, vars) {
  if (typeof PAGE_CONTENT === 'undefined') return key;
  const c = PAGE_CONTENT[currentLang] || PAGE_CONTENT.ru;
  let str = c[key] || PAGE_CONTENT.ru[key] || key;
  if (vars) Object.keys(vars).forEach(k => { str = str.replace(`{${k}}`, vars[k]); });
  return str;
}

function renderDiaryCategories() {
  const sel = document.getElementById('tx-cat');
  if (!sel || typeof DIARY_CATS === 'undefined') return;
  const cats = DIARY_CATS[currentLang] || DIARY_CATS.ru;
  const val = sel.value;
  sel.innerHTML = cats.map(c => `<option>${c}</option>`).join('');
  if (cats.includes(val)) sel.value = val;
}

function renderAllPageContent() {
  applyContentStrings();
  renderFaq();
  renderKodeks();
  renderFeatures();
  renderGameInstructions();
  renderDiaryCategories();
  document.body.classList.toggle('lang-tg', currentLang === 'tg');
  document.documentElement.lang = currentLang === 'tg' ? 'tg' : currentLang === 'uz' ? 'uz' : currentLang;
  if (typeof quizStarted !== 'undefined' && quizStarted && typeof renderQuiz === 'function') renderQuiz();
  if (typeof scamActive !== 'undefined' && scamActive && typeof renderScamRound === 'function') renderScamRound();
  if (typeof phishActive !== 'undefined' && phishActive && typeof renderPhishRound === 'function') renderPhishRound();
  if (typeof buildSearchIndex === 'function') buildSearchIndex();
  if (typeof scamActive !== 'undefined' && !scamActive) {
    const scamText = document.getElementById('scam-text');
    if (scamText) scamText.textContent = contentT('scam.intro');
    const scamStart = document.getElementById('scam-start-btn');
    if (scamStart) scamStart.textContent = contentT('game.scam.start');
  }
}

function getQuizData() { return QUIZ_I18N[currentLang] || QUIZ_I18N.ru; }
function getScamData() { return SCAM_I18N[currentLang] || SCAM_I18N.ru; }
function getRiskQuestions() { return RISK_I18N[currentLang] || RISK_I18N.ru; }
