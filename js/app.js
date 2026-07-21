/* ---------- Seed data (refreshed by the daily scheduled sync in Cowork) ---------- */
const SYNC_META = {
  lastChannelCheck: "2026-07-21",
  lastBlogCheck: "2026-07-21"
};

const EXISTING_VIDEOS = [
  {id:"zBFMhVjlGhs", title:"Welcome to MetaSlider, the WordPress Slideshow Plugin", views:14000, category:"Overview"},
  {id:"DRJw6nwxcMY", title:"How to Display High Quality Images in MetaSlider Slideshows", views:418, category:"Image Quality"},
  {id:"sfeXeMcE41A", title:"How to Build A YouTube Carousel in WordPress", views:315, category:"Carousels"},
  {id:"pEwDLexOrq8", title:"How to Build A Video Carousel in WordPress", views:1100, category:"Carousels"},
  {id:"4Yl_s579D4w", title:"How to Create SEO Friendly Slideshows in WordPress", views:229, category:"SEO"},
  {id:"-lBr8OJmIVQ", title:"How to Create An Accessible WordPress Slideshow", views:284, category:"Accessibility"},
  {id:"Mpc0Eumfous", title:"How to Create External Video Slides in MetaSlider", views:211, category:"Video Slides"},
  {id:"v6siKZxXL60", title:"How to Create TikTok Slideshows With MetaSlider", views:317, category:"Video Slides"},
  {id:"GTMEUNxA_mk", title:"Create a Bricks Builder Slideshow with MetaSlider", views:259, category:"Page Builders"},
  {id:"akPAQXVhJAE", title:"Use VTT (Video Text Track) Captions With MetaSlider", views:144, category:"Captions"},
  {id:"UhK-1aQUeAA", title:"How to Add Captions to Video Slideshows in MetaSlider", views:185, category:"Captions"},
  {id:"3Z6D9-66Hv0", title:"How to Use Layer Slides in MetaSlider", views:563, category:"Layer Slides"},
  {id:"uLFGIjt9AUQ", title:"How to Customize Colors for MetaSlider Slideshows", views:237, category:"Themes"},
  {id:"-TsblZFVrYY", title:"Create a Hero Image Slider in MetaSlider", views:494, category:"Getting Started"},
  {id:"RWoIbUmJny0", title:"How Image Cropping Works in MetaSlider", views:462, category:"Image Quality"},
  {id:"9NWvoYmtJas", title:"How to Add Vimeo Slides in MetaSlider", views:171, category:"Video Slides"},
  {id:"kLGP0OUQSuQ", title:"How to Use the Theme Editor in MetaSlider", views:242, category:"Themes"},
  {id:"KuHzFxAhb8A", title:"Navigation Options for MetaSlider Slideshows", views:294, category:"Navigation"},
  {id:"oLmSNLPmzWg", title:"Video Slides from Your WordPress Media Library", views:285, category:"Video Slides"},
  {id:"_lCNM00ugKo", title:"How to Add Captions to MetaSlider Image Slides", views:705, category:"Captions"},
  {id:"hVBhn64y3TY", title:"How to Use Post Feed Slides in MetaSlider", views:373, category:"Post Feed"},
  {id:"g7EkDDgZpWc", title:"Build WooCommerce Sliders With MetaSlider", views:544, category:"WooCommerce"},
  {id:"MqIyZUTvYuk", title:"Create a Slideshow With ACF (Advanced Custom Fields)", views:2400, category:"Integrations"},
  {id:"ERJ-UtoZoZo", title:"Create a Slideshow With The Events Calendar", views:774, category:"Integrations"},
  {id:"y5K6RXjWCqQ", title:"How MetaSlider Slideshows Can Loop Continuously", views:256, category:"Video Features"},
  {id:"JLCtNP4Y5w0", title:"Create a Slideshow with the Full Site Editor and MetaSlider", views:182, category:"Page Builders"},
  {id:"WekELoT7T18", title:"Build a Slideshow with Visual Composer and MetaSlider", views:176, category:"Page Builders"},
  {id:"nEr1O_pQy58", title:"Create a Beaver Builder Slideshow With MetaSlider", views:712, category:"Page Builders"},
  {id:"qdtHr2qTx4s", title:"Build a Gutenberg Block Editor Slideshow With MetaSlider", views:288, category:"Page Builders"},
  {id:"nhmMNv7rBS4", title:"Build an Elementor Slideshow With MetaSlider", views:1700, category:"Page Builders"},
  {id:"AXStRhQ50F4", title:"How to Use Mobile Features in MetaSlider", views:623, category:"Responsive"},
  {id:"Gz0a4iArMc4", title:"How to Add YouTube Video Slides in MetaSlider", views:577, category:"Video Slides"},
  {id:"rrbbfOGy6Es", title:"How to Schedule Slides in MetaSlider", views:236, category:"Scheduling"},
  {id:"dj6hSYmH0fI", title:"Build an Image Carousel With Text Captions in MetaSlider", views:2500, category:"Carousels"},
  {id:"lhQbdItz1pA", title:"How to Create an Image Carousel in WordPress", views:2100, category:"Carousels"},
  {id:"yuRh0FsanaY", title:"Create Powerful, Stylish Slideshows With MetaSlider", views:25000, category:"Overview"},
  {id:"Dk6PljxWvtU", title:"How to Create a Slideshow in MetaSlider", views:15000, category:"Getting Started"}
].map(v => ({...v, url:"https://www.youtube.com/watch?v="+v.id}));

const BLOG_TOPICS = [
  "MetaSlider Gallery is Here (new standalone gallery plugin launch)",
  "How to Use Animation on WordPress Slideshows (style over flashy transitions, Ken Burns effect)",
  "MetaSlider Has Big Improvements for Vertical Slideshows",
  "How to Use Keyboard Navigation With MetaSlider Slideshows (accessibility)",
  "How to Create a Vertical Slideshow in MetaSlider",
  "How to Create a Text and Image Carousel in WordPress",
  "How to Build an Accessible WordPress Slideshow",
  "MetaSlider Gallery updates: Instagram-style filters, custom thumbnail colors, autoplay progress bar colors, Gutenberg block, Showcase layout"
];

const SEED_IDEAS = {
  date: "2026-07-21",
  version: 2,
  items: [
    {
      title: "MetaSlider Gallery Walkthrough: Build Your First WordPress Image Gallery in 5 Minutes",
      desc: "A start-to-finish setup of the brand-new MetaSlider Gallery plugin — no video on the channel covers this flagship launch yet, even though it's the biggest recent blog announcement.",
      tag: "New: Gallery Plugin",
      category: "Gallery"
    },
    {
      title: "Vertical Slideshows in MetaSlider: Full Setup + What's New",
      desc: "Show how to build a vertical (top-to-bottom) slideshow and cover the recent improvements to vertical previews and navigation the blog highlighted — this format hasn't been demoed on video.",
      tag: "New: Vertical Slideshows",
      category: "Vertical Slideshows"
    },
    {
      title: "Make Your WordPress Slideshow Accessible: Keyboard Navigation & Best Practices",
      desc: "Combine the blog's keyboard-navigation and accessibility posts into one practical tutorial on building slideshows that work for screen-reader and keyboard-only users.",
      tag: "New: Accessibility",
      category: "Accessibility"
    },
    {
      title: "Slideshow Animation Done Right: Ken Burns Effect vs. Flashy Transitions",
      desc: "Based on the blog's advice to favor style over flashy animation — compare transition effects and show how to add the subtle Ken Burns effect for a more polished look.",
      tag: "New: Animation",
      category: "Animation"
    },
    {
      title: "5 MetaSlider Gallery Customizations You're Missing (Filters, Colors & Progress Bars)",
      desc: "A rapid-fire feature tour covering the recent Gallery updates from the blog: Instagram-style filters, custom thumbnail colors, and autoplay progress bar styling.",
      tag: "New: Gallery Updates",
      category: "Gallery"
    },
    {
      title: "TikTok Slides in MetaSlider: Turn Vertical Social Clips Into a WordPress Slideshow",
      desc: "The docs quietly added a TikTok Slides type but no video explains it — show how to pull in vertical TikTok content and display it natively in a WordPress slideshow.",
      tag: "New: TikTok Slides",
      category: "Video Slides"
    },
    {
      title: "WooCommerce Product Slides: Turn Your Store's Best Sellers Into a Shoppable Slideshow",
      desc: "Based on the newly documented WooCommerce Slides feature — walk through building a product slideshow that links straight to checkout, aimed at store owners who haven't seen this yet.",
      tag: "New: WooCommerce Slides",
      category: "WooCommerce"
    },
    {
      title: "Image Folder Slides: Auto-Update Your MetaSlider Slideshow Without Re-Uploading",
      desc: "Cover the recently documented Image Folder Slides feature, which lets a slideshow refresh automatically from a folder — a practical workflow tip nobody has demoed on video yet.",
      tag: "New: Image Folder Slides",
      category: "Image Folder Slides"
    },
    {
      title: "Post Feed Slides: Turn Your Latest Blog Posts Into an Auto-Updating Slideshow",
      desc: "Walk through the documented Post Feed Slides feature, which pulls in blog posts, events, or products automatically — a practical use case no video currently covers.",
      tag: "New: Post Feed Slides",
      category: "Post Feed"
    },
    {
      title: "MetaSlider + Unsplash: Build a Free Stock Photo Slideshow in Minutes",
      desc: "Show off the built-in Unsplash integration from the docs — search and drop in free stock photos without leaving the slideshow editor, a quick win nobody has demoed yet.",
      tag: "New: Unsplash Integration",
      category: "Unsplash"
    },
    {
      title: "Full Width vs. Full Screen Slideshows: Which One Fits Your WordPress Homepage?",
      desc: "A side-by-side comparison based on the docs' full-width and full-screen slideshow options, helping viewers pick the right hero layout for their site.",
      tag: "New: Full Width/Full Screen",
      category: "Responsive"
    },
    {
      title: "Multilingual WordPress Slideshows: Translating MetaSlider with WPML",
      desc: "Based on the documented WPML integration — show how to build a slideshow that automatically displays in each visitor's language, a niche but real gap in the video library.",
      tag: "New: Multilingual/WPML",
      category: "Multilingual"
    }
  ]
};

/* ---------- State ---------- */
let todos = [];
let currentIdeas = { date: null, items: [] };
let addedTitles = new Set();
let settings = { ideasPerDay: 12 };

/* AI backend: this static site can't safely hold an API key, so AI calls go to a small
   Cloudflare Worker you deploy yourself (see README.md → "Enabling real AI on GitHub Pages").
   Paste your deployed Worker's URL below once you have it. */
const AI_ENDPOINT = "https://ramble-ventures-ai.eshunburge.workers.dev";
const AI_AVAILABLE = typeof AI_ENDPOINT === "string" && AI_ENDPOINT.length > 0 && !AI_ENDPOINT.includes("YOUR-WORKER-SUBDOMAIN");

async function callAI(prompt, data){
  const res = await fetch(AI_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt, data: data || [] })
  });
  if(!res.ok){
    const detail = await res.text().catch(() => "");
    throw new Error("AI request failed (" + res.status + "): " + detail);
  }
  const json = await res.json();
  if(json.error) throw new Error(json.error);
  return json.text || "";
}

function loadState(){
  try{ todos = JSON.parse(localStorage.getItem("rv_todos") || "[]"); }catch(e){ todos = []; }
  try{ settings = Object.assign({ideasPerDay:12}, JSON.parse(localStorage.getItem("rv_settings") || "{}")); }catch(e){ settings = {ideasPerDay:12}; }

  let stored = null;
  try{ stored = JSON.parse(localStorage.getItem("rv_ideas_state") || "null"); }catch(e){ stored = null; }

  if(stored && stored.date === SEED_IDEAS.date && stored.version === SEED_IDEAS.version){
    currentIdeas = stored;
  } else {
    currentIdeas = { date: SEED_IDEAS.date, version: SEED_IDEAS.version, items: SEED_IDEAS.items };
    localStorage.setItem("rv_ideas_state", JSON.stringify(currentIdeas));
  }
  addedTitles = new Set(todos.map(t => t.title));
}

function saveTodos(){ localStorage.setItem("rv_todos", JSON.stringify(todos)); }
function saveIdeas(){ localStorage.setItem("rv_ideas_state", JSON.stringify(currentIdeas)); }
function saveSettings(){ localStorage.setItem("rv_settings", JSON.stringify(settings)); }

/* ---------- Navigation ---------- */
const VALID_SECTIONS = ["ideas", "todo", "library"];
function showSection(name){
  if(!VALID_SECTIONS.includes(name)) name = "ideas";
  document.querySelectorAll(".rv-section").forEach(s => s.classList.toggle("active", s.id === "section-" + name));
  document.querySelectorAll(".rv-nav-item").forEach(b => b.classList.toggle("active", b.dataset.section === name));
  localStorage.setItem("rv_active_section", name);
}

/* ---------- Rendering ---------- */
function renderIdeas(){
  document.getElementById("ideas-heading").textContent = "Today's " + currentIdeas.items.length + " Video Ideas";
  document.getElementById("ideas-date-label").textContent =
    "Generated for " + new Date(currentIdeas.date+"T00:00:00").toLocaleDateString(undefined,{month:"long",day:"numeric",year:"numeric"});
  const grid = document.getElementById("ideas-grid");
  grid.innerHTML = "";
  currentIdeas.items.forEach((idea, i) => {
    const already = addedTitles.has(idea.title);
    const card = document.createElement("div");
    card.className = "rv-idea-card";
    card.innerHTML = `
      <div class="rv-idea-tags">
        <span class="rv-tag">New</span>
        ${idea.category ? `<span class="rv-idea-category">${escapeHtml(idea.category)}</span>` : ""}
      </div>
      <h3>${escapeHtml(idea.title)}</h3>
      <p>${escapeHtml(idea.desc)}</p>
      <div class="rv-idea-actions">
        <button class="${already ? "added" : ""}" onclick="addToTodo(${i})" ${already ? "disabled" : ""}>${already ? "Added" : "Add to To-Do"}</button>
        <button onclick="dismissIdea(${i})">Not for me</button>
      </div>`;
    grid.appendChild(card);
  });
}

function renderTodos(){
  const list = document.getElementById("todo-list");
  const empty = document.getElementById("todo-empty");
  list.innerHTML = "";
  if(todos.length === 0){ empty.style.display = "block"; return; }
  empty.style.display = "none";
  todos.forEach(todo => {
    const li = document.createElement("li");
    if(todo.done) li.className = "done";
    li.innerHTML = `
      <input type="checkbox" ${todo.done ? "checked" : ""} onchange="toggleTodo('${todo.id}')">
      <div class="rv-todo-text"><strong>${escapeHtml(todo.title)}</strong><p>${escapeHtml(todo.desc || "")}</p></div>
      <button class="rv-remove" onclick="removeTodo('${todo.id}')">Remove</button>`;
    list.appendChild(li);
  });
}

function populateCategoryFilter(){
  const sel = document.getElementById("lib-category");
  const cats = Array.from(new Set(EXISTING_VIDEOS.map(v => v.category))).sort();
  sel.innerHTML = '<option value="">All categories</option>' + cats.map(c => `<option value="${c}">${c}</option>`).join("");
}

function renderLibrary(){
  const search = document.getElementById("lib-search").value.toLowerCase();
  const cat = document.getElementById("lib-category").value;
  const viewRange = document.getElementById("lib-views").value;
  const sort = document.getElementById("lib-sort").value;
  let minViews = -Infinity, maxViews = Infinity;
  if(viewRange){
    const parts = viewRange.split("-");
    minViews = Number(parts[0]);
    maxViews = Number(parts[1]);
  }
  let rows = EXISTING_VIDEOS.filter(v =>
    (v.title.toLowerCase().includes(search) || v.category.toLowerCase().includes(search)) &&
    (cat === "" || v.category === cat) &&
    (v.views >= minViews && v.views <= maxViews)
  );
  rows.sort((a,b) => {
    if(sort === "views-desc") return b.views - a.views;
    if(sort === "views-asc") return a.views - b.views;
    if(sort === "title-asc") return a.title.localeCompare(b.title);
    if(sort === "category-asc") return a.category.localeCompare(b.category);
  });
  const grid = document.getElementById("library-grid");
  grid.innerHTML = rows.map(v => `
    <div class="rv-lib-card">
      <a href="${v.url}" target="_blank" rel="noopener">${escapeHtml(v.title)}</a>
      <span class="rv-lib-views">${v.views.toLocaleString()} views</span>
      <span class="rv-cat-pill">${escapeHtml(v.category)}</span>
    </div>`).join("") || `<p class="rv-empty">No videos match your filters.</p>`;
  document.getElementById("sync-note").textContent =
    rows.length + " of " + EXISTING_VIDEOS.length + " videos shown · Channel last checked " +
    new Date(SYNC_META.lastChannelCheck+"T00:00:00").toLocaleDateString() +
    " · Blog last checked " + new Date(SYNC_META.lastBlogCheck+"T00:00:00").toLocaleDateString();
}

/* ---------- Actions ---------- */
function addToTodo(index){
  const idea = currentIdeas.items[index];
  if(addedTitles.has(idea.title)) return;
  todos.unshift({ id: "t"+Date.now()+index, title: idea.title, desc: idea.desc, done:false, added: new Date().toISOString() });
  addedTitles.add(idea.title);
  saveTodos();
  renderTodos();
  renderIdeas();
}

function dismissIdea(index){
  currentIdeas.items.splice(index,1);
  saveIdeas();
  renderIdeas();
}

function toggleTodo(id){
  const t = todos.find(t => t.id === id);
  if(t){ t.done = !t.done; saveTodos(); renderTodos(); }
}

function removeTodo(id){
  const t = todos.find(t => t.id === id);
  if(t) addedTitles.delete(t.title);
  todos = todos.filter(t => t.id !== id);
  saveTodos();
  renderTodos();
  renderIdeas();
}

function clearCompletedTodos(){
  const before = todos.length;
  todos = todos.filter(t => !t.done);
  const removed = before - todos.length;
  addedTitles = new Set(todos.map(t => t.title));
  saveTodos();
  renderTodos();
  renderIdeas();
  setRegenStatus(removed > 0 ? `Cleared ${removed} completed to-do${removed === 1 ? "" : "s"}.` : "No completed to-dos to clear.");
  setTimeout(() => setRegenStatus(""), 4000);
}

function clearAllTodos(){
  if(!confirm("Remove all items from the to-do list? This can't be undone.")) return;
  todos = [];
  addedTitles = new Set();
  saveTodos();
  renderTodos();
  renderIdeas();
  setRegenStatus("To-do list cleared.");
  setTimeout(() => setRegenStatus(""), 4000);
}

const REGEN_STATUS_IDS = ["regen-status", "regen-status-todo"];
const REGEN_BUTTON_IDS = ["regen-btn"];

function setRegenStatus(text){
  REGEN_STATUS_IDS.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.textContent = text;
  });
}
function setRegenButtonsDisabled(disabled){
  REGEN_BUTTON_IDS.forEach(id => {
    const el = document.getElementById(id);
    if(el) el.disabled = disabled;
  });
}

async function regenerateIdeas(feedback){
  setRegenButtonsDisabled(true);
  setRegenStatus("Thinking...");

  if(!AI_AVAILABLE){
    setRegenStatus("AI features aren't configured yet — see README.md for setup.");
    setRegenButtonsDisabled(false);
    setTimeout(() => setRegenStatus(""), 5000);
    return;
  }

  const count = settings.ideasPerDay || 12;
  const prompt = `You are a WordPress plugin content strategist for MetaSlider (a WordPress slideshow/gallery plugin).
Generate exactly ${count} NEW YouTube video ideas for the MetaSlider channel.
Rules:
- Base ideas on the provided blog/doc topics, NOT already-made videos.
- Do not repeat or lightly rephrase anything in the "already made" list.
- Each idea needs: a punchy title, a 1-2 sentence description explaining the angle, a short "tag" (2-4 words), and a short "category" (1-3 words, e.g. "Gallery", "Accessibility", "WooCommerce").
${feedback ? "- Additional instructions from the user: " + feedback : ""}
Respond ONLY with strict JSON in this exact shape, no prose, no markdown fences:
{"items":[{"title":"...","desc":"...","tag":"...","category":"..."}, ... (${count} total)]}`;

  try{
    const res = await callAI(prompt, [
      { label: "blog_and_doc_topics", value: BLOG_TOPICS },
      { label: "videos_already_made", value: EXISTING_VIDEOS.map(v => v.title) },
      { label: "current_idea_titles", value: currentIdeas.items.map(i => i.title) }
    ]);
    const parsed = parseIdeaResponse(res, count);
    if(parsed && parsed.length){
      currentIdeas = { date: new Date().toISOString().slice(0,10), version: SEED_IDEAS.version, items: parsed };
      saveIdeas();
      renderIdeas();
      setRegenStatus(`Updated just now — ${parsed.length} new ideas ready (see the Video Ideas tab).`);
    } else {
      setRegenStatus("Couldn't parse a fresh set — kept your current ideas.");
    }
  }catch(err){
    console.error("regenerateIdeas failed", err);
    setRegenStatus("AI is unavailable right now — kept your current ideas.");
  }finally{
    setRegenButtonsDisabled(false);
    setTimeout(() => setRegenStatus(""), 6000);
  }
}

function parseIdeaResponse(res, count){
  try{
    let text = typeof res === "string" ? res : (res?.text || res?.content?.[0]?.text || res?.structuredContent || JSON.stringify(res));
    if(typeof text !== "string") text = JSON.stringify(text);
    const match = text.match(/\{[\s\S]*\}/);
    const json = JSON.parse(match ? match[0] : text);
    if(Array.isArray(json.items)) return json.items.slice(0, count || 12);
    return null;
  }catch(e){
    console.warn("Could not parse idea response", e, res);
    return null;
  }
}

/* ---------- Chat ---------- */
let chatHistory = [];
function toggleChat(){
  const panel = document.getElementById("rv-chat-panel");
  panel.classList.toggle("open");
  if(panel.classList.contains("open") && chatHistory.length === 0){
    if(AI_AVAILABLE){
      addChatMessage("system", "Ask me about today's ideas, the video library, or MetaSlider content strategy.");
    } else {
      addChatMessage("system", "AI chat isn't configured yet — see README.md for setup instructions.");
    }
  }
}
function addChatMessage(role, text){
  const wrap = document.getElementById("rv-chat-messages");
  const div = document.createElement("div");
  div.className = "rv-msg " + role;
  div.textContent = text;
  wrap.appendChild(div);
  wrap.scrollTop = wrap.scrollHeight;
}
async function sendChat(){
  const input = document.getElementById("chat-input");
  const text = input.value.trim();
  if(!text) return;
  input.value = "";
  addChatMessage("user", text);
  chatHistory.push({role:"user", text});

  if(!AI_AVAILABLE){
    addChatMessage("ai", "AI chat isn't configured yet — see README.md for setup instructions.");
    return;
  }

  addChatMessage("ai", "...");
  try{
    const prompt = `You are the Ramble Ventures Marketing AI assistant helping plan MetaSlider (WordPress slideshow/gallery plugin) content.
Answer the user's message conversationally and concisely (2-5 sentences unless a list is clearly needed).
User message: ${text}`;
    const reply = await callAI(prompt, [
      { label: "todays_ideas", value: currentIdeas.items },
      { label: "todo_list", value: todos },
      { label: "video_library", value: EXISTING_VIDEOS },
      { label: "blog_topics", value: BLOG_TOPICS }
    ]);
    document.getElementById("rv-chat-messages").lastChild.textContent = reply || "Sorry, I didn't get a response back.";
  }catch(err){
    console.error("chat failed", err);
    document.getElementById("rv-chat-messages").lastChild.textContent = "Sorry, I couldn't reach the AI just now. Try again in a moment.";
  }
}

function escapeHtml(str){
  const d = document.createElement("div");
  d.textContent = str == null ? "" : String(str);
  return d.innerHTML;
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  loadState();
  populateCategoryFilter();
  renderIdeas();
  renderTodos();
  renderLibrary();
  showSection(localStorage.getItem("rv_active_section") || "ideas");

  document.getElementById("rv-nav").addEventListener("click", e => {
    const btn = e.target.closest(".rv-nav-item");
    if(btn) showSection(btn.dataset.section);
  });

  if(!AI_AVAILABLE){
    document.querySelectorAll(".rv-ai-notice").forEach(el => el.classList.add("show"));
  }
});
