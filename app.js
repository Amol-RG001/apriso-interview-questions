// app.js — UI rendering and interaction logic

/* ─── State ─────────────────────────────────────────────── */
const state = {
  filter: 'all',
  search: ''
};

/* ─── Helpers ───────────────────────────────────────────── */
function getLevelLabel(level) {
  const map = { easy: 'Beginner', medium: 'Intermediate', hard: 'Advanced' };
  return map[level] || level;
}

function pad(n) {
  return String(n).padStart(2, '0');
}

/* ─── Build a single question card ─────────────────────── */
function buildCard(question, index) {
  const { q, a, level } = question;
  const label = getLevelLabel(level);

  const card = document.createElement('div');
  card.className = 'q-card';
  card.dataset.level = level;
  card.dataset.text  = q.toLowerCase();

  card.innerHTML = `
    <div class="q-top">
      <span class="q-num">${pad(index + 1)}</span>
      <span class="q-text">${q}</span>
      <div class="q-tags">
        <span class="tag tag-${level}">${label}</span>
      </div>
      <span class="q-chevron">&#9662;</span>
    </div>
    <div class="q-answer">${a}</div>
  `;

  card.addEventListener('click', () => card.classList.toggle('open'));
  return card;
}

/* ─── Render all sections ───────────────────────────────── */
function renderSections() {
  SECTIONS_META.forEach(meta => {
    const { id, title, icon, color } = meta;
    const questions = SECTIONS_DATA[id] || [];

    // Create section wrapper
    const section = document.createElement('section');
    section.className = 'section';

    // Header
    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = `
      <div class="section-icon" style="background:${color}">${icon}</div>
      <span class="section-title">${title}</span>
      <span class="section-count" id="count-${id}">${questions.length} questions</span>
    `;

    // Grid
    const grid = document.createElement('div');
    grid.className = 'q-grid';
    grid.id = `grid-${id}`;

    questions.forEach((q, i) => grid.appendChild(buildCard(q, i)));

    section.appendChild(header);
    section.appendChild(grid);
    document.getElementById('sections-root').appendChild(section);
  });
}

/* ─── Apply current filter + search ────────────────────── */
function applyFilters() {
  document.querySelectorAll('.q-card').forEach(card => {
    const levelMatch  = state.filter === 'all' || card.dataset.level === state.filter;
    const searchMatch = !state.search || card.dataset.text.includes(state.search);
    card.classList.toggle('hidden', !(levelMatch && searchMatch));
  });
}

/* ─── Filter button listeners ───────────────────────────── */
function initFilterButtons() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filter = btn.dataset.filter;
      applyFilters();
    });
  });
}

/* ─── Search listener ───────────────────────────────────── */
function initSearch() {
  const input = document.getElementById('searchInput');
  input.addEventListener('input', e => {
    state.search = e.target.value.toLowerCase().trim();
    applyFilters();
  });
}

/* ─── Bootstrap ─────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderSections();
  initFilterButtons();
  initSearch();
});
