const tarotDeck = [
  { id: "00-fool", name: "愚者", en: "The Fool", image: "./assets/cards/00-fool.jpg" },
  { id: "01-magician", name: "魔术师", en: "The Magician", image: "./assets/cards/01-magician.jpg" },
  { id: "02-high-priestess", name: "女祭司", en: "The High Priestess", image: "./assets/cards/02-high-priestess.jpg" },
  { id: "03-empress", name: "女皇", en: "The Empress", image: "./assets/cards/03-empress.jpg" },
  { id: "04-emperor", name: "皇帝", en: "The Emperor", image: "./assets/cards/04-emperor.jpg" },
  { id: "05-hierophant", name: "教皇", en: "The Hierophant", image: "./assets/cards/05-hierophant.jpg" },
  { id: "06-lovers", name: "恋人", en: "The Lovers", image: "./assets/cards/06-lovers.jpg" },
  { id: "07-chariot", name: "战车", en: "The Chariot", image: "./assets/cards/07-chariot.jpg" },
  { id: "08-strength", name: "力量", en: "Strength", image: "./assets/cards/08-strength.jpg" },
  { id: "09-hermit", name: "隐士", en: "The Hermit", image: "./assets/cards/09-hermit.jpg" },
  { id: "10-wheel-of-fortune", name: "命运之轮", en: "Wheel of Fortune", image: "./assets/cards/10-wheel-of-fortune.jpg" },
  { id: "11-justice", name: "正义", en: "Justice", image: "./assets/cards/11-justice.jpg" },
  { id: "12-hanged-man", name: "倒吊人", en: "The Hanged Man", image: "./assets/cards/12-hanged-man.jpg" },
  { id: "13-death", name: "死神", en: "Death", image: "./assets/cards/13-death.jpg" },
  { id: "14-temperance", name: "节制", en: "Temperance", image: "./assets/cards/14-temperance.jpg" },
  { id: "15-devil", name: "恶魔", en: "The Devil", image: "./assets/cards/15-devil.jpg" },
  { id: "16-tower", name: "高塔", en: "The Tower", image: "./assets/cards/16-tower.jpg" },
  { id: "17-star", name: "星星", en: "The Star", image: "./assets/cards/17-star.jpg" },
  { id: "18-moon", name: "月亮", en: "The Moon", image: "./assets/cards/18-moon.jpg" },
  { id: "19-sun", name: "太阳", en: "The Sun", image: "./assets/cards/19-sun.jpg" },
  { id: "20-judgement", name: "审判", en: "Judgement", image: "./assets/cards/20-judgement.jpg" },
  { id: "21-world", name: "世界", en: "The World", image: "./assets/cards/21-world.jpg" },
  { id: "cups01", name: "圣杯一", en: "Ace of Cups", image: "./assets/cards/cups01.jpg" },
  { id: "cups02", name: "圣杯二", en: "Two of Cups", image: "./assets/cards/cups02.jpg" },
  { id: "cups03", name: "圣杯三", en: "Three of Cups", image: "./assets/cards/cups03.jpg" },
  { id: "cups04", name: "圣杯四", en: "Four of Cups", image: "./assets/cards/cups04.jpg" },
  { id: "cups05", name: "圣杯五", en: "Five of Cups", image: "./assets/cards/cups05.jpg" },
  { id: "cups06", name: "圣杯六", en: "Six of Cups", image: "./assets/cards/cups06.jpg" },
  { id: "cups07", name: "圣杯七", en: "Seven of Cups", image: "./assets/cards/cups07.jpg" },
  { id: "cups08", name: "圣杯八", en: "Eight of Cups", image: "./assets/cards/cups08.jpg" },
  { id: "cups09", name: "圣杯九", en: "Nine of Cups", image: "./assets/cards/cups09.jpg" },
  { id: "cups10", name: "圣杯十", en: "Ten of Cups", image: "./assets/cards/cups10.jpg" },
  { id: "cups11", name: "圣杯侍从", en: "Page of Cups", image: "./assets/cards/cups11.jpg" },
  { id: "cups12", name: "圣杯骑士", en: "Knight of Cups", image: "./assets/cards/cups12.jpg" },
  { id: "cups13", name: "圣杯王后", en: "Queen of Cups", image: "./assets/cards/cups13.jpg" },
  { id: "cups14", name: "圣杯国王", en: "King of Cups", image: "./assets/cards/cups14.jpg" },
  { id: "pentacles01", name: "星币一", en: "Ace of Pentacles", image: "./assets/cards/pentacles01.jpg" },
  { id: "pentacles02", name: "星币二", en: "Two of Pentacles", image: "./assets/cards/pentacles02.jpg" },
  { id: "pentacles03", name: "星币三", en: "Three of Pentacles", image: "./assets/cards/pentacles03.jpg" },
  { id: "pentacles04", name: "星币四", en: "Four of Pentacles", image: "./assets/cards/pentacles04.jpg" },
  { id: "pentacles05", name: "星币五", en: "Five of Pentacles", image: "./assets/cards/pentacles05.jpg" },
  { id: "pentacles06", name: "星币六", en: "Six of Pentacles", image: "./assets/cards/pentacles06.jpg" },
  { id: "pentacles07", name: "星币七", en: "Seven of Pentacles", image: "./assets/cards/pentacles07.jpg" },
  { id: "pentacles08", name: "星币八", en: "Eight of Pentacles", image: "./assets/cards/pentacles08.jpg" },
  { id: "pentacles09", name: "星币九", en: "Nine of Pentacles", image: "./assets/cards/pentacles09.jpg" },
  { id: "pentacles10", name: "星币十", en: "Ten of Pentacles", image: "./assets/cards/pentacles10.jpg" },
  { id: "pentacles11", name: "星币侍从", en: "Page of Pentacles", image: "./assets/cards/pentacles11.jpg" },
  { id: "pentacles12", name: "星币骑士", en: "Knight of Pentacles", image: "./assets/cards/pentacles12.jpg" },
  { id: "pentacles13", name: "星币王后", en: "Queen of Pentacles", image: "./assets/cards/pentacles13.jpg" },
  { id: "pentacles14", name: "星币国王", en: "King of Pentacles", image: "./assets/cards/pentacles14.jpg" },
  { id: "swords01", name: "宝剑一", en: "Ace of Swords", image: "./assets/cards/swords01.jpg" },
  { id: "swords02", name: "宝剑二", en: "Two of Swords", image: "./assets/cards/swords02.jpg" },
  { id: "swords03", name: "宝剑三", en: "Three of Swords", image: "./assets/cards/swords03.jpg" },
  { id: "swords04", name: "宝剑四", en: "Four of Swords", image: "./assets/cards/swords04.jpg" },
  { id: "swords05", name: "宝剑五", en: "Five of Swords", image: "./assets/cards/swords05.jpg" },
  { id: "swords06", name: "宝剑六", en: "Six of Swords", image: "./assets/cards/swords06.jpg" },
  { id: "swords07", name: "宝剑七", en: "Seven of Swords", image: "./assets/cards/swords07.jpg" },
  { id: "swords08", name: "宝剑八", en: "Eight of Swords", image: "./assets/cards/swords08.jpg" },
  { id: "swords09", name: "宝剑九", en: "Nine of Swords", image: "./assets/cards/swords09.jpg" },
  { id: "swords10", name: "宝剑十", en: "Ten of Swords", image: "./assets/cards/swords10.jpg" },
  { id: "swords11", name: "宝剑侍从", en: "Page of Swords", image: "./assets/cards/swords11.jpg" },
  { id: "swords12", name: "宝剑骑士", en: "Knight of Swords", image: "./assets/cards/swords12.jpg" },
  { id: "swords13", name: "宝剑王后", en: "Queen of Swords", image: "./assets/cards/swords13.jpg" },
  { id: "swords14", name: "宝剑国王", en: "King of Swords", image: "./assets/cards/swords14.jpg" },
  { id: "wands01", name: "权杖一", en: "Ace of Wands", image: "./assets/cards/wands01.jpg" },
  { id: "wands02", name: "权杖二", en: "Two of Wands", image: "./assets/cards/wands02.jpg" },
  { id: "wands03", name: "权杖三", en: "Three of Wands", image: "./assets/cards/wands03.jpg" },
  { id: "wands04", name: "权杖四", en: "Four of Wands", image: "./assets/cards/wands04.jpg" },
  { id: "wands05", name: "权杖五", en: "Five of Wands", image: "./assets/cards/wands05.jpg" },
  { id: "wands06", name: "权杖六", en: "Six of Wands", image: "./assets/cards/wands06.jpg" },
  { id: "wands07", name: "权杖七", en: "Seven of Wands", image: "./assets/cards/wands07.jpg" },
  { id: "wands08", name: "权杖八", en: "Eight of Wands", image: "./assets/cards/wands08.jpg" },
  { id: "wands09", name: "权杖九", en: "Nine of Wands", image: "./assets/cards/wands09.jpg" },
  { id: "wands10", name: "权杖十", en: "Ten of Wands", image: "./assets/cards/wands10.jpg" },
  { id: "wands11", name: "权杖侍从", en: "Page of Wands", image: "./assets/cards/wands11.jpg" },
  { id: "wands12", name: "权杖骑士", en: "Knight of Wands", image: "./assets/cards/wands12.jpg" },
  { id: "wands13", name: "权杖王后", en: "Queen of Wands", image: "./assets/cards/wands13.jpg" },
  { id: "wands14", name: "权杖国王", en: "King of Wands", image: "./assets/cards/wands14.jpg" },
];

const services = [
  {
    id: "two",
    mode: "spread",
    category: "classic",
    title: "Two Cards",
    name: "双牌组合",
    label: "2 张牌",
    description: "日常问卜",
    promptSystem: "塔罗卡牌",
    promptSpread: "2 张组合（由左至右）",
    positions: ["当下", "建议"],
    placeholder: "例如：我现在应该如何推进这件事？",
  },
  {
    id: "three",
    mode: "spread",
    category: "classic",
    title: "Three Cards",
    name: "三张牌",
    label: "3 张牌",
    description: "快速厘清方向",
    promptSystem: "塔罗卡牌",
    promptSpread: "3 张组合（由左至右）",
    positions: ["过去", "现在", "未来"],
    placeholder: "例如：我接下来三个月的感情发展如何？",
    featured: true,
  },
  {
    id: "five",
    mode: "spread",
    category: "classic",
    title: "Five Cards",
    name: "五张牌",
    label: "5 张牌",
    description: "详细状况分析",
    promptSystem: "塔罗卡牌",
    promptSpread: "5 张组合（由左至右）",
    positions: ["根源", "阻碍", "机会", "行动", "结果"],
    placeholder: "例如：这件事目前的整体局势是什么？",
  },
  {
    id: "daily-fortune",
    mode: "daily",
    category: "daily",
    title: "Daily Fortune",
    name: "每日运势",
    label: "每日运势",
    description: "抽三张，看看今天整体的能量走向",
    promptSystem: "塔罗日常占卜卡牌",
    promptSpread: "每日运势 3 张（由左至右）",
    positions: ["清晨能量", "白天提醒", "夜晚收束"],
    count: 3,
    noQuestion: true,
    featured: true,
  },
  {
    id: "choice",
    mode: "choice",
    category: "daily",
    title: "A or B",
    name: "二选一",
    label: "二选一",
    description: "在 A、B 两个选项间比较、抉择",
    promptSystem: "塔罗二选一卡牌",
    promptSpread: "A、B 各 3 张（由左至右）",
    positions: ["第一张", "第二张", "第三张"],
  },
  {
    id: "yesno",
    mode: "yesno",
    category: "daily",
    title: "Yes / No",
    name: "决定行动",
    label: "决定行动",
    description: "要不要这么做",
    promptSystem: "塔罗是非占卜卡牌",
    promptSpread: "Yes / No 判断牌",
    placeholder: "请静心，将你想问的事情写下来……",
  },
];

const polarity = {
  "00-fool": "neutral",
  "01-magician": "positive",
  "02-high-priestess": "neutral",
  "03-empress": "positive",
  "04-emperor": "positive",
  "05-hierophant": "neutral",
  "06-lovers": "positive",
  "07-chariot": "positive",
  "08-strength": "positive",
  "09-hermit": "neutral",
  "10-wheel-of-fortune": "neutral",
  "11-justice": "neutral",
  "12-hanged-man": "neutral",
  "13-death": "negative",
  "14-temperance": "positive",
  "15-devil": "negative",
  "16-tower": "negative",
  "17-star": "positive",
  "18-moon": "neutral",
  "19-sun": "positive",
  "20-judgement": "positive",
  "21-world": "positive",
  cups01: "positive",
  cups02: "positive",
  cups03: "positive",
  cups04: "neutral",
  cups05: "negative",
  cups06: "positive",
  cups07: "neutral",
  cups08: "negative",
  cups09: "positive",
  cups10: "positive",
  cups11: "positive",
  cups12: "positive",
  cups13: "positive",
  cups14: "positive",
  pentacles01: "positive",
  pentacles02: "neutral",
  pentacles03: "positive",
  pentacles04: "neutral",
  pentacles05: "negative",
  pentacles06: "positive",
  pentacles07: "neutral",
  pentacles08: "positive",
  pentacles09: "positive",
  pentacles10: "positive",
  pentacles11: "positive",
  pentacles12: "positive",
  pentacles13: "positive",
  pentacles14: "positive",
  swords01: "positive",
  swords02: "neutral",
  swords03: "negative",
  swords04: "neutral",
  swords05: "negative",
  swords06: "positive",
  swords07: "negative",
  swords08: "negative",
  swords09: "negative",
  swords10: "negative",
  swords11: "neutral",
  swords12: "neutral",
  swords13: "neutral",
  swords14: "neutral",
  wands01: "positive",
  wands02: "positive",
  wands03: "positive",
  wands04: "positive",
  wands05: "negative",
  wands06: "positive",
  wands07: "positive",
  wands08: "positive",
  wands09: "neutral",
  wands10: "negative",
  wands11: "positive",
  wands12: "positive",
  wands13: "positive",
  wands14: "positive",
};

const state = {
  category: "classic",
  service: services.find((service) => service.id === "three"),
  question: "",
  optionA: "",
  optionB: "",
  yesNoCount: 3,
  selectedCards: [],
  selectedA: [],
  selectedB: [],
  revealed: [],
  savedKey: "",
};

const screens = document.querySelectorAll("[data-screen]");
const menu = document.querySelector("[data-menu]");
const categoryEyebrow = document.querySelector("#categoryEyebrow");
const spreadGrid = document.querySelector("#spreadGrid");
const normalQuestionBox = document.querySelector("#normalQuestionBox");
const normalCounter = document.querySelector("#normalCounter");
const questionInput = document.querySelector("#questionInput");
const questionHeading = document.querySelector("#questionHeading");
const charCount = document.querySelector("#charCount");
const choiceFields = document.querySelector("#choiceFields");
const optionAInput = document.querySelector("#optionAInput");
const optionBInput = document.querySelector("#optionBInput");
const optionACount = document.querySelector("#optionACount");
const optionBCount = document.querySelector("#optionBCount");
const yesNoCount = document.querySelector("#yesNoCount");
const startButton = document.querySelector('[data-action="start-reading"]');
const spreadCount = document.querySelector("[data-spread-count]");
const resultEyebrow = document.querySelector("#resultEyebrow");
const questionTitle = document.querySelector("#questionTitle");
const cardsRow = document.querySelector("#cardsRow");
const deckTools = document.querySelector(".deck-tools");
const deckCount = document.querySelector("#deckCount");
const drawHint = document.querySelector("[data-draw-hint]");
const resultSummary = document.querySelector("#resultSummary");
const toneField = document.querySelector("[data-tone-field]");
const historyModal = document.querySelector("#historyModal");
const historyList = document.querySelector("#historyList");
const toast = document.querySelector("#toast");
const loadingText = document.querySelector("#loadingText");

let loadingTimer = null;
let toastTimer = null;

function showScreen(name) {
  screens.forEach((screen) => screen.classList.toggle("is-active", screen.dataset.screen === name));
  closeMenu();
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  refreshIcons();
}

function refreshIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function closeMenu() {
  menu.classList.remove("is-open");
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[target]] = [copy[target], copy[index]];
  }
  return copy;
}

function renderServices() {
  document.querySelectorAll("[data-category]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.category === state.category);
  });
  categoryEyebrow.textContent = state.category === "classic" ? "CLASSIC SPREADS" : "DAILY ORACLE";

  spreadGrid.innerHTML = services
    .filter((service) => service.category === state.category)
    .map((service, index) => {
      const featured = service.featured ? " is-featured" : "";
      return `
        <button class="spread-option${featured}" data-spread="${service.id}" style="--item-delay: ${index * 90}ms">
          <span>${service.title}</span>
          <i></i>
          <strong>${service.label}</strong>
          <em>${service.description}</em>
        </button>
      `;
    })
    .join("");
}

function setCategory(category) {
  state.category = category;
  renderServices();
}

function setService(serviceId) {
  state.service = services.find((service) => service.id === serviceId) || state.service;
  resetInputs();

  if (state.service.noQuestion) {
    state.question = "今日整体运势";
    loadingText.textContent = "为今天，留给自己一个安静的片刻";
    startLoading();
    return;
  }

  configureQuestionScreen();
  showScreen("question");
  if (state.service.mode === "choice") optionAInput.focus();
  else questionInput.focus();
}

function resetInputs() {
  questionInput.value = "";
  optionAInput.value = "";
  optionBInput.value = "";
  charCount.textContent = "0";
  optionACount.textContent = "0";
  optionBCount.textContent = "0";
  state.question = "";
  state.optionA = "";
  state.optionB = "";
  state.selectedCards = [];
  state.selectedA = [];
  state.selectedB = [];
  state.revealed = [];
}

function configureQuestionScreen() {
  const mode = state.service.mode;
  spreadCount.textContent = `${state.service.title} · ${state.service.name}`;
  questionHeading.textContent = mode === "choice" ? "二选一" : "输入你的问题";

  normalQuestionBox.hidden = mode === "choice";
  normalCounter.hidden = mode === "choice";
  choiceFields.hidden = mode !== "choice";
  yesNoCount.hidden = mode !== "yesno";

  questionInput.maxLength = 150;
  questionInput.placeholder = state.service.placeholder || "请静心，将你想问的事情写下来……";
  startButton.textContent = mode === "yesno" ? "抽牌" : "开始抽牌";
  updateQuestionState();
}

function updateQuestionState() {
  charCount.textContent = String(questionInput.value.length);
  optionACount.textContent = String(optionAInput.value.length);
  optionBCount.textContent = String(optionBInput.value.length);

  if (state.service.mode === "choice") {
    startButton.disabled = !optionAInput.value.trim() || !optionBInput.value.trim();
  } else {
    startButton.disabled = questionInput.value.trim().length === 0;
  }
}

function startReading() {
  if (state.service.mode === "choice") {
    state.optionA = optionAInput.value.trim();
    state.optionB = optionBInput.value.trim();
    if (!state.optionA || !state.optionB) {
      showToast("请先填写 A、B 两个选项。");
      return;
    }
    state.question = `A：${state.optionA} / B：${state.optionB}`;
  } else {
    state.question = questionInput.value.trim();
    if (!state.question) {
      showToast("先写下你的问题。");
      return;
    }
  }

  loadingText.textContent = `${state.service.name}正在展开`;
  startLoading();
}

function startLoading() {
  showScreen("loading");
  window.clearTimeout(loadingTimer);
  loadingTimer = window.setTimeout(() => {
    prepareReading();
    showScreen("reading");
  }, state.service.noQuestion ? 3000 : 2600);
}

function prepareReading() {
  state.savedKey = "";
  resultSummary.hidden = true;
  resultSummary.innerHTML = "";
  cardsRow.removeAttribute("data-mode");

  if (state.service.mode === "choice") {
    state.selectedA = shuffle(tarotDeck).slice(0, 3);
    state.selectedB = shuffle(tarotDeck).slice(0, 3);
    state.selectedCards = [...state.selectedA, ...state.selectedB];
    state.revealed = state.selectedCards.map(() => true);
    resultEyebrow.textContent = "A OR B";
    questionTitle.textContent = "二选一";
    drawHint.textContent = "";
    toneField.hidden = false;
    renderChoiceReading();
    saveReading(false);
  } else if (state.service.mode === "yesno") {
    state.selectedCards = shuffle(tarotDeck).slice(0, state.yesNoCount);
    state.revealed = state.selectedCards.map(() => true);
    resultEyebrow.textContent = "你的问题";
    questionTitle.textContent = state.question;
    drawHint.textContent = "";
    toneField.hidden = true;
    renderYesNoReading();
    saveReading(false);
  } else {
    const count = state.service.count || state.service.positions.length;
    state.selectedCards = shuffle(tarotDeck).slice(0, count);
    state.revealed = state.selectedCards.map(() => state.service.mode === "daily");
    resultEyebrow.textContent = state.service.mode === "daily" ? "DAILY FORTUNE" : "你的问题";
    questionTitle.textContent = state.service.mode === "daily" ? "每日运势" : state.question;
    cardsRow.style.setProperty("--card-count", String(state.selectedCards.length));
    cardsRow.dataset.count = String(state.selectedCards.length);
    drawHint.textContent = state.service.mode === "daily" ? "今日已抽 · 明日午夜后更新" : "✦ 依序点击抽牌 ✦";
    toneField.hidden = state.service.mode !== "daily";
    renderCards();
    if (state.service.mode === "daily") saveReading(false);
  }

  deckTools.hidden = state.service.mode !== "spread";
  updateReadingActions();
}

function renderCards() {
  cardsRow.innerHTML = state.selectedCards
    .map((card, index) => {
      const position = state.service.positions[index] || `第 ${index + 1} 张`;
      const revealed = state.revealed[index] ? " is-revealed" : "";
      const label = state.service.mode === "daily" ? card.name : `${position} · ${card.name}`;
      return `
        <div class="card-slot${revealed}" style="--slot-delay: ${index * 120}ms">
          <button class="tarot-card${revealed}" data-card-index="${index}" aria-label="翻开${position}位置的牌">
            <span class="tarot-card-inner">
              <span class="tarot-back" aria-hidden="true"></span>
              <span class="tarot-front"><img src="${card.image}" alt="${card.name} ${card.en}" /></span>
            </span>
          </button>
          <div class="card-label">
            <strong>${label}</strong>
            <span>${card.en}</span>
          </div>
        </div>
      `;
    })
    .join("");
  updateDeckCount();
}

function renderChoiceReading() {
  cardsRow.dataset.mode = "choice";
  cardsRow.removeAttribute("data-count");
  cardsRow.style.removeProperty("--card-count");
  cardsRow.innerHTML = `
    <section class="choice-result">
      <button class="choice-title" type="button">A <span>展开⌄</span></button>
      <p>${escapeHtml(state.optionA)}</p>
      <div class="choice-card-row">${renderStaticCards(state.selectedA)}</div>
    </section>
    <div class="versus-line"><span></span><b>VS</b><span></span></div>
    <section class="choice-result">
      <button class="choice-title" type="button">B <span>展开⌄</span></button>
      <p>${escapeHtml(state.optionB)}</p>
      <div class="choice-card-row">${renderStaticCards(state.selectedB)}</div>
    </section>
  `;
  resultSummary.hidden = false;
  resultSummary.innerHTML = "<p>※ A、B 各自独立抽牌，出现同一张牌是正常的。</p>";
}

function renderStaticCards(cards) {
  return cards
    .map(
      (card, index) => `
      <div class="card-slot is-revealed" style="--slot-delay: ${index * 110}ms">
        <button class="tarot-card is-revealed" type="button" tabindex="-1">
          <span class="tarot-card-inner">
            <span class="tarot-back" aria-hidden="true"></span>
            <span class="tarot-front"><img src="${card.image}" alt="${card.name} ${card.en}" /></span>
          </span>
        </button>
        <div class="card-label"><strong>${card.name}</strong><span>${card.en}</span></div>
      </div>
    `
    )
    .join("");
}

function renderYesNoReading() {
  cardsRow.style.setProperty("--card-count", String(state.selectedCards.length));
  cardsRow.dataset.count = String(state.selectedCards.length);
  cardsRow.dataset.mode = "yesno";
  cardsRow.innerHTML = state.selectedCards
    .map((card, index) => {
      const vote = polarity[card.id] || "neutral";
      return `
        <div class="card-slot is-revealed" style="--slot-delay: ${index * 120}ms">
          <button class="tarot-card is-revealed" type="button" tabindex="-1">
            <span class="tarot-card-inner">
              <span class="tarot-back" aria-hidden="true"></span>
              <span class="tarot-front">
                <img src="${card.image}" alt="${card.name} ${card.en}" />
                <span class="vote-mark ${vote}">${voteSymbol(vote)}</span>
              </span>
            </span>
          </button>
        </div>
      `;
    })
    .join("");

  const tally = yesNoTally();
  resultSummary.hidden = false;
  resultSummary.innerHTML = `
    <div class="yesno-answer">
      <div class="answer-mark">${voteSymbol(tally.answerType)}</div>
      <h3>${tally.answer}</h3>
      <p>正面 ${tally.positive} · 中性 ${tally.neutral} · 负面 ${tally.negative}</p>
      <p>${tally.message}</p>
    </div>
  `;
}

function voteSymbol(vote) {
  if (vote === "positive") return "▲";
  if (vote === "negative") return "▼";
  return "▬";
}

function yesNoTally() {
  const counts = { positive: 0, neutral: 0, negative: 0 };
  state.selectedCards.forEach((card) => {
    counts[polarity[card.id] || "neutral"] += 1;
  });

  if (counts.positive > counts.negative && counts.positive >= counts.neutral) {
    return {
      ...counts,
      answerType: "positive",
      answer: "Yes",
      message: "倾向可以行动，但仍要把节奏握在自己手里。",
    };
  }

  if (counts.negative > counts.positive && counts.negative >= counts.neutral) {
    return {
      ...counts,
      answerType: "negative",
      answer: "No",
      message: "现在不适合硬推，先停下来观察阻力来自哪里。",
    };
  }

  return {
    ...counts,
    answerType: "neutral",
    answer: "Unclear",
    message: "没有明确答案。换个问法，或把焦点放回你自己能决定的事，再问一次。",
  };
}

function revealCard(index) {
  if (state.service.mode !== "spread" || state.revealed[index]) return;
  const nextIndex = state.revealed.findIndex((revealed) => !revealed);
  if (index !== nextIndex) {
    showToast("请按顺序抽牌。");
    return;
  }

  state.revealed[index] = true;
  renderCards();
  updateReadingActions();
  cardsRow.children[index]?.querySelector(".tarot-card")?.focus({ preventScroll: true });

  if (allRevealed()) {
    drawHint.textContent = "牌面已经展开";
    toneField.hidden = false;
    saveReading(false);
    showToast(`${state.selectedCards.length} 张牌已经展开。`);
  }
}

function allRevealed() {
  return state.revealed.length > 0 && state.revealed.every(Boolean);
}

function updateDeckCount() {
  const drawnCount = activeCards().length;
  deckCount.textContent = String(Math.max(tarotDeck.length - drawnCount, 0));
}

function updateReadingActions() {
  const complete = allRevealed();
  const copyButton = document.querySelector('[data-action="copy-prompt"]');
  const revealButton = document.querySelector('[data-action="reveal-all"]');
  const shareButton = document.querySelector('[data-action="share-reading"]');

  copyButton.hidden = state.service.mode === "yesno";
  copyButton.disabled = !complete;
  shareButton.disabled = !complete;
  revealButton.hidden = state.service.mode !== "spread";
  revealButton.disabled = complete;
  updateDeckCount();
  refreshIcons();
}

function revealAll() {
  if (state.service.mode !== "spread") return;
  const nextIndex = state.revealed.findIndex((revealed) => !revealed);
  if (nextIndex === -1) return;
  state.revealed = state.revealed.map(() => true);
  renderCards();
  drawHint.textContent = "牌面已经展开";
  toneField.hidden = false;
  updateReadingActions();
  saveReading(false);
  showToast("已全部翻面。");
}

function getTone() {
  return document.querySelector('input[name="tone"]:checked')?.value || "预设（推荐）";
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
}

function countText(count) {
  return { 1: "一", 2: "两", 3: "三", 4: "四", 5: "五", 6: "六" }[count] || String(count);
}

function cardName(card) {
  return `${card.name} (${card.en})`;
}

function cardListForPrompt(cards = state.selectedCards) {
  return cards.map((card, index) => `${index + 1}. ${cardName(card)}`).join("\n");
}

function promptInstruction(cards = state.selectedCards, subject = "组合") {
  const count = cards.length;
  const joined = cards.map(cardName).join(" + ");
  if (count === 1) {
    return `请把这张牌当成「${subject}」的核心讯息解读，不要只列关键词。将 ${joined} 串成一句连贯的讯息，并给出整体意义。`;
  }
  return `请把这${countText(count)}张牌当成一个「${subject}」解读，不要逐张单独给牌义。将 ${joined} 串成一句连贯的讯息，并给出整体意义。`;
}

function buildPrompt() {
  if (state.service.mode === "choice") {
    return [
      `我想通过 ${state.service.promptSystem} 占卜以下选择：`,
      "",
      "【问题】我想在 A、B 两个选项间比较、抉择",
      `【选项 A】${state.optionA}`,
      `【选项 B】${state.optionB}`,
      `【占卜日期】${formatDate(new Date())}`,
      `【服务】${state.service.name}`,
      `【牌阵】${state.service.promptSpread}`,
      "【A 牌组】",
      cardListForPrompt(state.selectedA),
      "【B 牌组】",
      cardListForPrompt(state.selectedB),
      "",
      `请把 A 牌组当成一个「组合」解读：${state.selectedA.map(cardName).join(" + ")}。`,
      `请把 B 牌组当成一个「组合」解读：${state.selectedB.map(cardName).join(" + ")}。`,
      "不要逐张单独给牌义，请比较 A 与 B 两个组合的整体趋势，并给出更适合当前问题的建议。",
      `请使用「${getTone()}」风格回答。`,
    ].join("\n");
  }

  const question = state.service.mode === "daily" ? "今日整体运势" : state.question;
  const subject = state.service.mode === "daily" ? "今日整体能量" : "组合";
  return [
    `我想通过 ${state.service.promptSystem} 占卜以下问题：`,
    "",
    `【问题】${question}`,
    `【占卜日期】${formatDate(new Date())}`,
    `【服务】${state.service.name}`,
    `【牌阵】${state.service.promptSpread}`,
    cardListForPrompt(),
    "",
    promptInstruction(state.selectedCards, subject),
    `请使用「${getTone()}」风格回答。`,
  ].join("\n");
}

async function copyPrompt() {
  if (!allRevealed() || state.service.mode === "yesno") return;
  const copied = await copyText(buildPrompt());
  showToast(copied ? "提示词已复制。" : "浏览器限制复制，请手动复制文本。");
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    const result = document.execCommand("copy");
    area.remove();
    return result;
  }
}

function activeCards() {
  if (state.service.mode === "choice") return [...state.selectedA, ...state.selectedB];
  return state.selectedCards;
}

function cardPosition(index) {
  if (state.service.mode === "choice") return index < 3 ? `A-${index + 1}` : `B-${index - 2}`;
  if (state.service.mode === "yesno") return `第 ${index + 1} 张`;
  return state.service.positions[index] || `第 ${index + 1} 张`;
}

function readingSummary() {
  return activeCards()
    .map((card, index) => `${index + 1}. ${cardPosition(index)}：${card.name} / ${card.en}`)
    .join("\n");
}

function saveReading(notify = true) {
  if (!allRevealed()) {
    showToast("翻开牌后再保存。");
    return;
  }

  const key = `${state.service.id}|${state.question}|${activeCards().map((card) => card.id).join("-")}`;
  if (state.savedKey === key) {
    if (notify) showToast("这次结果已经保存。");
    return;
  }

  const records = getHistory();
  records.unshift({
    key,
    date: new Date().toISOString(),
    question: state.question,
    service: state.service.name,
    spread: state.service.label,
    cards: activeCards().map((card, index) => ({
      position: cardPosition(index),
      name: card.name,
      en: card.en,
    })),
  });

  localStorage.setItem("astral-tarot-history", JSON.stringify(records.slice(0, 12)));
  state.savedKey = key;
  if (notify) showToast("已保存到历史记录。");
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem("astral-tarot-history") || "[]");
  } catch {
    return [];
  }
}

function openHistory() {
  closeMenu();
  const records = getHistory();
  historyList.innerHTML = records.length
    ? records
        .map((record) => {
          const date = new Intl.DateTimeFormat("zh-CN", {
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          }).format(new Date(record.date));
          const cards = record.cards.map((card) => `${card.position}：${card.name}`).join(" · ");
          return `
            <article class="history-item">
              <time>${date} · ${escapeHtml(record.service || record.spread || "占卜记录")}</time>
              <p>${escapeHtml(record.question)}</p>
              <p>${escapeHtml(cards)}</p>
            </article>
          `;
        })
        .join("")
    : '<article class="history-item"><p>还没有保存的记录。</p></article>';
  historyModal.showModal();
  refreshIcons();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
}

async function shareReading() {
  if (!allRevealed()) return;
  try {
    const blob = await createReadingImage();
    const file = new File([blob], "astral-tarot-reading.png", { type: "image/png" });
    const mobileShare = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (mobileShare && navigator.share && navigator.canShare?.({ files: [file] })) {
      await navigator.share({ title: "星象塔罗占卜", text: state.question, files: [file] });
      return;
    }

    downloadBlob(blob, "astral-tarot-reading.png");
    showToast("分享图已下载。");
  } catch {
    await copyText(`星象塔罗\n${state.service.name}\n${state.question}\n${readingSummary()}`);
    showToast("分享图生成受限，已复制文字结果。");
  }
}

async function createReadingImage() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const width = 1080;
  const height = 1500;
  canvas.width = width;
  canvas.height = height;

  ctx.fillStyle = "#f4eee3";
  ctx.fillRect(0, 0, width, height);
  drawPaperTexture(ctx, width, height);

  ctx.fillStyle = "#17140f";
  ctx.textAlign = "center";
  ctx.font = "700 64px Georgia, serif";
  ctx.fillText("Astral Tarot", width / 2, 130);

  ctx.fillStyle = "#9a765e";
  ctx.font = "32px serif";
  ctx.fillText(state.service.name, width / 2, 186);

  ctx.fillStyle = "#17140f";
  ctx.font = "42px serif";
  wrapCanvasText(ctx, state.question || state.service.name, width / 2, 270, 820, 58);

  const cards = activeCards();
  const cardWidth = cards.length > 3 ? 135 : 210;
  const cardHeight = cardWidth * 1.5;
  const gap = cards.length > 3 ? 26 : 54;
  const totalWidth = cards.length * cardWidth + (cards.length - 1) * gap;
  const startX = (width - totalWidth) / 2;
  const y = 520;

  cards.forEach((card, index) => {
    const x = startX + index * (cardWidth + gap);
    drawShareCard(ctx, x, y, cardWidth, cardHeight, card);
    ctx.fillStyle = "#17140f";
    ctx.font = cards.length > 3 ? "22px serif" : "32px serif";
    ctx.fillText(`${cardPosition(index)} · ${card.name}`, x + cardWidth / 2, y + cardHeight + 48);
    ctx.fillStyle = "#7e5f49";
    ctx.font = cards.length > 3 ? "italic 19px Georgia, serif" : "italic 26px Georgia, serif";
    ctx.fillText(card.en, x + cardWidth / 2, y + cardHeight + 82);
  });

  ctx.strokeStyle = "#c8bcb0";
  ctx.beginPath();
  ctx.moveTo(160, 1185);
  ctx.lineTo(920, 1185);
  ctx.stroke();

  ctx.fillStyle = "#5d554a";
  ctx.font = "30px serif";
  wrapCanvasText(ctx, readingSummary().replace(/\n/g, "   "), width / 2, 1260, 840, 44);

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error("Canvas export failed"))), "image/png");
  });
}

function drawPaperTexture(ctx, width, height) {
  ctx.save();
  for (let i = 0; i < 250; i += 1) {
    ctx.fillStyle = `rgba(70, 54, 34, ${Math.random() * 0.08})`;
    ctx.fillRect(Math.random() * width, Math.random() * height, 1, 1);
  }
  ctx.restore();
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  const chars = Array.from(text);
  let line = "";
  let lineY = y;
  chars.forEach((char, index) => {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, lineY);
      line = char;
      lineY += lineHeight;
    } else {
      line = testLine;
    }
    if (index === chars.length - 1 && line) ctx.fillText(line, x, lineY);
  });
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function shareLookForCard(card) {
  const id = card.id || "";
  if (id.startsWith("cups")) return ["#17334a", "#9fc6d3", "C"];
  if (id.startsWith("pentacles")) return ["#31432e", "#d6b76d", "P"];
  if (id.startsWith("swords")) return ["#2b3548", "#c9d4e8", "S"];
  if (id.startsWith("wands")) return ["#5d2f22", "#e0a467", "W"];

  const majorLooks = {
    "00-fool": ["#36422d", "#d8c681", "0"],
    "01-magician": ["#743d43", "#ecd4a9", "I"],
    "02-high-priestess": ["#1c2b45", "#c8d4ef", "II"],
    "03-empress": ["#5a3c42", "#e6c1b3", "III"],
    "04-emperor": ["#5a2d24", "#d5a36d", "IV"],
    "05-hierophant": ["#3f3429", "#d8bc8a", "V"],
    "06-lovers": ["#66715f", "#f0c6c7", "VI"],
    "07-chariot": ["#24324b", "#d5d8ee", "VII"],
    "08-strength": ["#704230", "#e4b576", "VIII"],
    "09-hermit": ["#2d3138", "#d7c697", "IX"],
    "10-wheel-of-fortune": ["#3d2f50", "#dfbe78", "X"],
    "11-justice": ["#24394a", "#c9dedc", "XI"],
    "12-hanged-man": ["#2e493f", "#d5c78a", "XII"],
    "13-death": ["#20242e", "#d7d7d0", "XIII"],
    "14-temperance": ["#334e59", "#dfcfa1", "XIV"],
    "15-devil": ["#40202a", "#d19a69", "XV"],
    "16-tower": ["#2b2028", "#dfba72", "XVI"],
    "17-star": ["#111526", "#d9bb76", "XVII"],
    "18-moon": ["#172039", "#d7c1a1", "XVIII"],
    "19-sun": ["#d49f3b", "#fff0ba", "XIX"],
    "20-judgement": ["#6a493a", "#ead4a9", "XX"],
    "21-world": ["#263b35", "#d9c783", "XXI"],
  };
  return majorLooks[id] || ["#111526", "#d9bb76", "*"];
}

function drawShareCard(ctx, x, y, width, height, card) {
  const [base, accent, symbol] = shareLookForCard(card);
  roundRect(ctx, x, y, width, height, 18);
  ctx.save();
  ctx.clip();
  const gradient = ctx.createLinearGradient(x, y, x + width, y + height);
  gradient.addColorStop(0, "#f4e7cc");
  gradient.addColorStop(0.13, accent);
  gradient.addColorStop(0.14, base);
  gradient.addColorStop(1, "#191512");
  ctx.fillStyle = gradient;
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = "rgba(244, 238, 227, 0.72)";
  ctx.lineWidth = 8;
  roundRect(ctx, x + 15, y + 15, width - 30, height - 30, 12);
  ctx.stroke();
  ctx.strokeStyle = "rgba(217, 187, 118, 0.65)";
  ctx.lineWidth = 2;
  for (let i = 0; i < 18; i += 1) {
    const angle = (Math.PI * 2 * i) / 18;
    ctx.beginPath();
    ctx.moveTo(x + width / 2, y + height / 2);
    ctx.lineTo(x + width / 2 + Math.cos(angle) * width * 0.32, y + height / 2 + Math.sin(angle) * height * 0.22);
    ctx.stroke();
  }
  ctx.fillStyle = "rgba(255, 248, 230, 0.94)";
  ctx.font = `${Math.round(width * 0.42)}px Georgia, serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(symbol, x + width / 2, y + height / 2 - 12);
  ctx.fillStyle = "rgba(255, 248, 230, 0.86)";
  ctx.font = `${Math.round(width * 0.13)}px serif`;
  ctx.fillText(card.name, x + width / 2, y + height - 55);
  ctx.restore();
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function restartReading() {
  if (state.service.noQuestion) {
    startLoading();
    return;
  }

  configureQuestionScreen();
  if (state.service.mode === "choice") {
    optionAInput.value = state.optionA;
    optionBInput.value = state.optionB;
  } else {
    questionInput.value = state.question;
  }
  updateQuestionState();
  showScreen("question");
  if (state.service.mode === "choice") {
    optionAInput.focus({ preventScroll: true });
  } else {
    questionInput.focus({ preventScroll: true });
  }
}

function shuffleAgain() {
  if (!state.question && !state.service.noQuestion) return;
  prepareReading();
  showToast("已重新洗牌。");
}

document.addEventListener("click", (event) => {
  const categoryTarget = event.target.closest("[data-category]");
  const yesNoCountTarget = event.target.closest("[data-yesno-count]");
  const spreadOption = event.target.closest("[data-spread]");
  const actionTarget = event.target.closest("[data-action]");
  const cardTarget = event.target.closest("[data-card-index]");

  if (cardTarget) {
    revealCard(Number(cardTarget.dataset.cardIndex));
    return;
  }
  if (categoryTarget) {
    setCategory(categoryTarget.dataset.category);
    return;
  }
  if (yesNoCountTarget) {
    state.yesNoCount = Number(yesNoCountTarget.dataset.yesnoCount);
    yesNoCount.querySelectorAll("button").forEach((button) => {
      button.classList.toggle("is-selected", button === yesNoCountTarget);
    });
    return;
  }
  if (spreadOption) {
    setService(spreadOption.dataset.spread);
    return;
  }
  if (!actionTarget) {
    if (!event.target.closest("[data-menu]")) closeMenu();
    return;
  }

  const handlers = {
    enter: () => showScreen("spreads"),
    home: () => showScreen("splash"),
    "toggle-menu": () => menu.classList.toggle("is-open"),
    "go-spreads": () => showScreen("spreads"),
    "start-reading": startReading,
    shuffle: shuffleAgain,
    "reveal-all": revealAll,
    "copy-prompt": copyPrompt,
    "share-reading": shareReading,
    restart: restartReading,
    "save-reading": () => saveReading(true),
    "open-history": openHistory,
    "close-history": () => historyModal.close(),
  };
  handlers[actionTarget.dataset.action]?.();
});

questionInput.addEventListener("input", updateQuestionState);
optionAInput.addEventListener("input", updateQuestionState);
optionBInput.addEventListener("input", updateQuestionState);

historyModal.addEventListener("click", (event) => {
  const rect = historyModal.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) historyModal.close();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

renderServices();
refreshIcons();
