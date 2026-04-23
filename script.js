function openGame(url) {
  window.location.href = url;
}

/* Tab Cloaker */
function setTab(title, icon) {
  document.title = title;
  document.getElementById("favicon").href = icon;
}

/* Settings Panel */
function toggleSettings() {
  document.getElementById("settings").classList.toggle("open");
}

/* Category Filter */
function filterGames(category) {
  document.querySelectorAll(".card").forEach(card => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
