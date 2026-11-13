const filters = document.querySelector(".filters");
const cards = [...document.querySelectorAll(".apple-card")];
const resultCount = document.querySelector(".result-count");

filters.hidden = false;

filters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;

  const filter = button.dataset.filter;
  for (const option of filters.querySelectorAll("button")) {
    option.setAttribute("aria-pressed", String(option === button));
  }

  let visibleCount = 0;
  for (const card of cards) {
    const matches = filter === "all" || card.dataset.tags.split(" ").includes(filter);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  }

  resultCount.textContent = filter === "all"
    ? `${visibleCount}種類のりんごをご紹介`
    : `${button.textContent.trim()}：${visibleCount}種類のりんご`;
});
