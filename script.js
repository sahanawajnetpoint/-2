// --------- Demo Content Data (আপনি প্রতিদিন এখানে নতুন লেখা যোগ করবেন) ----------
const DATA = {
  home: {
    title: "Home",
    subtitle: "সাহিত্যের জন্য একটি নির্মল আবাস।",
  },
  kobita: {
    title: "কবিতা",
    subtitle: "কাব্যের প্রহর — অনুভবের নিঃশব্দ আকাশ।",
  },
  golpo: {
    title: "গল্প",
    subtitle: "জীবনের নানা বাঁক, মানুষের নানা রূপ।",
  },
  onugolpo: {
    title: "অণুগল্প",
    subtitle: "অল্প কথায় গভীর অর্থ।",
  },
  guccho: {
    title: "গুচ্ছ কবিতা",
    subtitle: "কিছু কবিতা, একসাথে।",
  },
  onubad: {
    title: "অনুবাদ সাহিত্য",
    subtitle: "বিশ্ব সাহিত্যের বাংলা রূপ।",
  },
  dirgho: {
    title: "দীর্ঘ কবিতা",
    subtitle: "দীর্ঘ শ্বাসের মতো দীর্ঘ কবিতা।",
  },
  uponnash: {
    title: "ধারাবাহিক উপন্যাস",
    subtitle: "প্রতি পর্বে নতুন গল্পের টান।",
  },
  nijosswo: {
    title: "নিজস্ব কলমে",
    subtitle: "নিজের অনুভূতি, নিজের লেখা।",
  },
  probondho: {
    title: "প্রবন্ধ",
    subtitle: "মননশীল লেখা ও ভাবনার প্রবন্ধ।",
  },
  protidin: {
    title: "প্রাত্যহিক কবিতা",
    subtitle: "প্রতিদিনের কবিতা — রোজ নতুন।",
  },
  bishesh: {
    title: "বিশেষ রচনা",
    subtitle: "নির্বাচিত ও বিশেষ সাহিত্য।",
  },
  review: {
    title: "বুক রিভিউ",
    subtitle: "বইয়ের আলোচনায় পাঠকের দিশা।",
  },
  contact: {
    title: "যোগাযোগ",
    subtitle: "আমাদের সাথে যোগাযোগ করুন।",
  }
};

// পোস্ট (নতুন লেখা এখানে যোগ করবেন)
const POSTS = [
  {
    id: 1,
    category: "kobita",
    title: "বর্ষার গান",
    author: "সানু সরকার",
    date: "১২ জানুয়ারি ২০২৬",
    content: `বর্ষা নামে নীরব পায়ে,\nপাতা কাঁপে নদীর গায়ে,\nমেঘেরা আজ স্বপ্ন বোনে,\nভিজে ওঠে শহর কোনে।`
  },
  {
    id: 2,
    category: "golpo",
    title: "শেষ বিকেলের চিঠি",
    author: "অতিথি লেখক",
    date: "১২ জানুয়ারি ২০২৬",
    content: `সে দিন বিকেলের আলো ছিল খুব নরম। ডাকবাক্সের পাশে দাঁড়িয়ে আমি ভাবছিলাম—চিঠির শব্দ কি কখনো ফিরে আসে?`
  },
  {
    id: 3,
    category: "onugolpo",
    title: "এক মুঠো নীরবতা",
    author: "সানু সরকার",
    date: "১২ জানুয়ারি ২০২৬",
    content: `সে কথা বলল না।\nকিন্তু তার নীরবতা—আমাকে পুরোটা বলল।`
  },
  {
    id: 4,
    category: "review",
    title: "বুক রিভিউ: পথের পাঁচালী",
    author: "সম্পাদক",
    date: "১১ জানুয়ারি ২০২৬",
    content: `পথের পাঁচালী শুধু একটি উপন্যাস নয়—এটি বাংলার মাটি, মানুষের জীবনযাপন ও স্বপ্নের অনুপম দলিল।`
  }
];

// --------- DOM ----------
const postsEl = document.getElementById("posts");
const featuredEl = document.getElementById("featured");
const recentEl = document.getElementById("recent");
const titleEl = document.getElementById("pageTitle");
const subtitleEl = document.getElementById("pageSubtitle");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalBody = document.getElementById("modalBody");
const closeModalBtn = document.getElementById("closeModal");
const yearEl = document.getElementById("year");
const searchInput = document.getElementById("searchInput");
const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".nav-wrap");

yearEl.textContent = new Date().getFullYear();

// --------- Render ----------
let currentCategory = "home";

function getFilteredPosts(category, query="") {
  let data = POSTS;

  if(category !== "home" && category !== "contact"){
    data = data.filter(p => p.category === category);
  }

  if(query.trim()){
    const q = query.toLowerCase();
    data = data.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.author.toLowerCase().includes(q) ||
      p.content.toLowerCase().includes(q)
    );
  }
  return data;
}

function renderPosts() {
  const page = DATA[currentCategory] || DATA.home;

  titleEl.textContent = page.title;
  subtitleEl.textContent = page.subtitle;

  if(currentCategory === "contact"){
    postsEl.innerHTML = `
      <div class="post-card">
        <h3>যোগাযোগ</h3>
        <p class="meta">আপনার লেখা পাঠাতে বা যোগাযোগ করতে নিচের তথ্য ব্যবহার করুন</p>
        <p class="post-snippet">
          ইমেইল: <b>example@email.com</b><br/>
          WhatsApp: <b>+91-XXXXXXXXXX</b><br/>
          ঠিকানা: আপনার শহর, পশ্চিমবঙ্গ
        </p>
      </div>
    `;
    return;
  }

  const query = searchInput.value || "";
  const filtered = getFilteredPosts(currentCategory, query);

  if(filtered.length === 0){
    postsEl.innerHTML = `
      <div class="post-card">
        <h3>কোনো লেখা পাওয়া যায়নি</h3>
        <p class="meta">অনুগ্রহ করে অন্য লেখা বা ক্যাটাগরি দেখুন</p>
      </div>
    `;
    return;
  }

  postsEl.innerHTML = filtered.map(p => `
    <div class="post-card">
      <h3>${p.title}</h3>
      <p class="meta">লেখক: ${p.author} • ${p.date}</p>
      <p class="post-snippet">${escapeHTML(p.content).slice(0, 120)}...</p>
      <button class="btn" onclick="openPost(${p.id})">সম্পূর্ণ পড়ুন</button>
    </div>
  `).join("");
}

function renderSidebars() {
  const latest = [...POSTS].slice(0, 4);

  featuredEl.innerHTML = `
    <div class="mini-item">
      <h4>${POSTS[0]?.title || "নির্বাচিত লেখা নেই"}</h4>
      <p>${POSTS[0]?.author || ""}</p>
    </div>
  `;

  recentEl.innerHTML = latest.map(p => `
    <div class="mini-item">
      <h4>${p.title}</h4>
      <p>${p.author} • ${p.date}</p>
    </div>
  `).join("");
}

// --------- Modal ----------
window.openPost = function(id){
  const post = POSTS.find(p => p.id === id);
  if(!post) return;

  modalTitle.textContent = post.title;
  modalMeta.textContent = `লেখক: ${post.author} • ${post.date}`;
  modalBody.innerHTML = `<pre style="white-space:pre-wrap;margin:0;">${escapeHTML(post.content)}</pre>`;

  modal.classList.add("show");
}

closeModalBtn.addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", (e) => {
  if(e.target === modal) modal.classList.remove("show");
});

// --------- Navbar ----------
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelectorAll(".nav-link").forEach(a => a.classList.remove("active"));
    link.classList.add("active");

    currentCategory = link.dataset.category;
    searchInput.value = "";
    renderPosts();
  });
});

searchInput.addEventListener("input", () => renderPosts());

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// helper
function escapeHTML(str){
  return (str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

renderPosts();
renderSidebars();
