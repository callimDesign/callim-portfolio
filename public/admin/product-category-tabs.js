(() => {
  const categories = [
    ['all', 'ALL'],
    ['card', '카드'],
    ['mini-card', '미니카드'],
    ['envelope', '봉투'],
    ['postcard', '엽서'],
    ['lifestyle', '라이프스타일'],
  ];
  let active = 'all';
  let scheduled = false;
  let changing = false;

  const nextFrame = () => new Promise(resolve => requestAnimationFrame(resolve));
  const isProducts = () => location.hash.replace(/\?.*$/, '') === '#/collections/products';
  const filterButton = () => Array.from(document.querySelectorAll('main [role="button"][aria-haspopup="true"]'))
    .find(button => button.textContent.trim() === '필터 기준');

  function paintTabs() {
    document.querySelectorAll('.callim-product-tabs button').forEach(button => {
      const selected = button.dataset.category === active;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
  }

  async function selectCategory(category) {
    if (changing || !isProducts()) return;
    changing = true;
    try {
      await nextFrame();
      const trigger = filterButton();
      if (!trigger) return;
      if (trigger.getAttribute('aria-expanded') !== 'true') trigger.click();
      await nextFrame();

      const checked = Array.from(document.querySelectorAll('input[id^="category__"]:checked'));
      for (const input of checked) {
        const current = input.id.match(/^category__\^(.+)\$$/)?.[1];
        if (current !== category) {
          input.closest('[role="menuitem"]')?.click();
          await nextFrame();
        }
      }
      if (category !== 'all') {
        const target = document.getElementById(`category__^${category}$`);
        if (target && !target.checked) {
          target.closest('[role="menuitem"]')?.click();
          await nextFrame();
        }
      }
      if (trigger.getAttribute('aria-expanded') === 'true') trigger.click();
      active = category;
      paintTabs();
    } finally {
      changing = false;
    }
  }

  function update() {
    scheduled = false;
    if (!isProducts()) return;
    const trigger = filterButton();
    const controls = trigger?.closest('[class*="CollectionControlsContainer"]');
    if (!controls) return;
    trigger.parentElement.classList.add('callim-hide-native-product-filter');
    if (controls.previousElementSibling?.classList.contains('callim-product-tabs')) return;
    const tabs = document.createElement('nav');
    tabs.className = 'callim-product-tabs';
    tabs.setAttribute('aria-label', '상품 분류');
    for (const [id, label] of categories) {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = label;
      button.dataset.category = id;
      button.addEventListener('click', () => selectCategory(id));
      tabs.append(button);
    }
    controls.before(tabs);
    paintTabs();
    selectCategory(active);
  }

  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(update);
  }
  new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener('hashchange', schedule);
  schedule();
})();
