const DEFAULT_PROJECTS = [
  {
    id: crypto.randomUUID(), category:"promotion", date:"2026.08.14",
    title:"스타듀밸리 공동채무 프로젝트 기획 & 후기",
    summary:"게임 속 이야기를 활용한 프로젝트형 프로모션 디자인",
    detail:"프로젝트의 핵심 메시지를 한눈에 전달할 수 있도록 메인 비주얼과 카드형 정보를 구성했습니다.\n\n기획 의도와 참여 포인트를 명확하게 분리하고, 썸네일에서 상세 팝업으로 자연스럽게 이어지도록 설계했습니다.",
    tag:"#PROMOTION", thumbnail:"https://placehold.co/1200x800/f2eeee/cf1919?text=PROMOTION+01", detailImage:"", detailType:"image", youtubeUrl:"", videoRatio:"16:9"
  },
  {
    id: crypto.randomUUID(), category:"promotion", date:"2026.08.04",
    title:"2주년 멘헤라 메이드 카페",
    summary:"기념 이벤트를 위한 비주얼 프로모션",
    detail:"캐릭터와 이벤트 분위기를 중심으로 강한 첫인상을 만드는 프로모션 그래픽을 제작했습니다.\n\n메인 카피, 캐릭터 이미지, 이벤트 정보를 우선순위에 따라 배치했습니다.",
    tag:"#PROMOTION", thumbnail:"https://placehold.co/1200x800/e8dbe1/2c2c2c?text=EVENT+PROMOTION", detailImage:"", detailType:"image", youtubeUrl:"", videoRatio:"16:9"
  },
  {
    id: crypto.randomUUID(), category:"promotion", date:"2026.07.30",
    title:"버튜버에 얼마썼니?",
    summary:"참여형 콘텐츠를 위한 캠페인 비주얼",
    detail:"가상 캐릭터 팬덤의 소비 경험을 재미있게 풀어낸 콘텐츠입니다.\n\n영수증을 모티브로 핵심 숫자와 메시지를 강조했습니다.",
    tag:"#PROMOTION", thumbnail:"https://placehold.co/1200x800/e9dfc7/2c2c2c?text=CAMPAIGN", detailImage:"", detailType:"image", youtubeUrl:"", videoRatio:"16:9"
  },
  {
    id: crypto.randomUUID(), category:"contents", date:"2026.07.26",
    title:"오리지널 비키니 공개",
    summary:"캐릭터 기반 콘텐츠 기획 및 썸네일",
    detail:"시즌성 콘텐츠의 주목도를 높이기 위해 캐릭터와 배경의 대비를 활용했습니다.\n\n썸네일 단계에서 콘텐츠의 성격이 바로 전달되도록 타이포그래피를 최소화했습니다.",
    tag:"#CONTENTS", thumbnail:"https://placehold.co/1200x800/dde9ed/cf1919?text=CONTENTS+01", detailImage:"", detailType:"image", youtubeUrl:"", videoRatio:"16:9"
  },
  {
    id: crypto.randomUUID(), category:"contents", date:"2026.06.20",
    title:"크리에이터 주식대결",
    summary:"데이터와 캐릭터를 결합한 시리즈 콘텐츠",
    detail:"주식 데이터 화면과 캐릭터 일러스트를 결합해 정보성과 재미를 동시에 전달했습니다.\n\n복잡한 숫자 정보는 화면 중심에, 캐릭터의 리액션은 보조 요소로 배치했습니다.",
    tag:"#CONTENTS", thumbnail:"https://placehold.co/1200x800/e4e4e4/2c2c2c?text=DATA+CONTENT", detailImage:"", detailType:"image", youtubeUrl:"", videoRatio:"16:9"
  },
  {
    id: crypto.randomUUID(), category:"contents", date:"2025.10.16",
    title:"행운호 🍀",
    summary:"여행/라이프스타일 콘텐츠 브랜딩",
    detail:"크루즈 이미지를 중심으로 여행의 분위기와 정보를 함께 전달하는 콘텐츠를 구성했습니다.",
    tag:"#CONTENTS", thumbnail:"https://placehold.co/1200x800/b9c9d5/ffffff?text=LUCKY+CRUISE", detailImage:"", detailType:"image", youtubeUrl:"", videoRatio:"16:9"
  },
  {
    id: crypto.randomUUID(), category:"web", date:"2026.05.10",
    title:"포트폴리오 웹사이트",
    summary:"개인 포트폴리오 UX/UI 설계",
    detail:"작업물을 카테고리별로 빠르게 탐색하고, 팝업을 통해 상세 정보를 확인할 수 있도록 구성했습니다.",
    tag:"#WEB", thumbnail:"https://placehold.co/1200x800/2c2c2c/f9f6f6?text=WEB+DESIGN", detailImage:"", detailType:"image", youtubeUrl:"", videoRatio:"16:9"
  },
  {
    id: crypto.randomUUID(), category:"web", date:"2026.03.21",
    title:"브랜드 랜딩페이지",
    summary:"브랜드 메시지를 중심으로 한 반응형 웹",
    detail:"스크롤 흐름과 정보 우선순위를 중심으로 설계한 랜딩페이지 프로젝트입니다.",
    tag:"#WEB", thumbnail:"https://placehold.co/1200x800/eee8e8/cf1919?text=LANDING", detailImage:"", detailType:"image", youtubeUrl:"", videoRatio:"16:9"
  },
  {
    id: crypto.randomUUID(), category:"offline", date:"2025.12.01",
    title:"브랜드 리플렛",
    summary:"오프라인 인쇄물 그래픽 디자인",
    detail:"온라인에서 사용하던 브랜드 아이덴티티를 오프라인 인쇄물에 확장했습니다.\n\n인쇄 환경을 고려해 정보 계층과 여백을 설계했습니다.",
    tag:"#OFFLINE", thumbnail:"https://placehold.co/1200x800/e6d6d0/2c2c2c?text=OFFLINE+01", detailImage:"", detailType:"image", youtubeUrl:"", videoRatio:"16:9"
  },
  {
    id: crypto.randomUUID(), category:"offline", date:"2025.09.15",
    title:"이벤트 포스터",
    summary:"행사 주목도를 높이는 키비주얼",
    detail:"짧은 시간 안에 행사 정보를 인지할 수 있도록 날짜와 핵심 카피의 대비를 강화했습니다.",
    tag:"#OFFLINE", thumbnail:"https://placehold.co/1200x800/2c2c2c/cf1919?text=POSTER", detailImage:"", detailType:"image", youtubeUrl:"", videoRatio:"16:9"
  }
];

const STORAGE_KEY = "missjeongPortfolioProjects";
let projects = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null") || DEFAULT_PROJECTS;

// 기존 버전(image 하나만 사용) 데이터도 자동으로 새 구조로 변환합니다.
projects = projects.map(p => ({
  ...p,
  thumbnail: p.thumbnail || p.image || "",
  detailImage: p.detailImage || p.image || p.thumbnail || "",
  detailType: p.detailType || (p.youtubeUrl ? "video" : "image"),
  youtubeUrl: p.youtubeUrl || "",
  videoRatio: p.videoRatio || "16:9"
}));

function renderProjects() {
  document.querySelectorAll(".project-grid").forEach(grid => {
    const category = grid.dataset.category;
    const items = projects.filter(p => p.category === category);
    grid.innerHTML = items.map((p, i) => `
      <article class="project-card" data-id="${p.id}">
        <div class="project-thumb">
          <img src="${escapeAttr(p.thumbnail)}" alt="${escapeAttr(p.title)}" loading="lazy">
          ${p.detailType === "video" ? '<span class="project-media-badge">VIDEO</span>' : ''}
          <span class="project-no">${String(i + 1).padStart(2,"0")}</span>
        </div>
        <div class="project-body">
          <div class="project-date">${escapeHTML(p.date)}</div>
          <h3>${escapeHTML(p.title)}</h3>
          <p>${escapeHTML(p.summary)}</p>
          <span class="project-tag">${escapeHTML(p.tag)}</span>
        </div>
      </article>
    `).join("");
    grid.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", () => openModal(card.dataset.id));
    });
  });
}

function youtubeEmbedUrl(url) {
  try {
    const u = new URL(url);
    let id = "";
    if (u.hostname.includes("youtu.be")) id = u.pathname.slice(1);
    else if (u.hostname.includes("youtube.com")) {
      id = u.searchParams.get("v") || (u.pathname.startsWith("/shorts/") ? u.pathname.split("/")[2] : "");
    }
    id = (id || "").split(/[?&#]/)[0];
    return id ? `https://www.youtube.com/embed/${id}?rel=0` : "";
  } catch { return ""; }
}

function openModal(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  const modalMedia = document.getElementById("modalMedia");
  const modalImage = document.getElementById("modalImage");
  const modalVideo = document.getElementById("modalVideo");
  modalMedia.classList.remove("ratio-16-9", "ratio-9-16", "image-mode", "video-mode");
  modalImage.hidden = true;
  modalVideo.hidden = true;
  modalVideo.src = "";

  if (p.detailType === "video" && p.youtubeUrl) {
    const embedUrl = youtubeEmbedUrl(p.youtubeUrl);
    if (embedUrl) {
      modalMedia.classList.add("video-mode", p.videoRatio === "9:16" ? "ratio-9-16" : "ratio-16-9");
      modalVideo.src = embedUrl;
      modalVideo.title = p.title;
      modalVideo.hidden = false;
    } else {
      modalMedia.classList.add("image-mode");
      modalImage.src = p.detailImage || p.thumbnail;
      modalImage.alt = p.title;
      modalImage.hidden = false;
    }
  } else {
    modalMedia.classList.add("image-mode");
    modalImage.src = p.detailImage || p.thumbnail;
    modalImage.alt = p.title;
    modalImage.hidden = false;
  }
  document.getElementById("modalCategory").textContent = p.tag;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalSummary").textContent = p.summary;
  document.getElementById("modalDetail").textContent = p.detail;
  document.getElementById("modalMeta").textContent = p.date;
  document.getElementById("modalPanel").scrollTop = 0;
  document.getElementById("projectModal").classList.add("is-open");
  document.getElementById("projectModal").setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  document.getElementById("modalVideo").src = "";
  document.getElementById("projectModal").classList.remove("is-open");
  document.getElementById("projectModal").setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}
document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}
function escapeAttr(value) { return escapeHTML(value).replace(/`/g, "&#096;"); }

renderProjects();
