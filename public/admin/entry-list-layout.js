(() => {
  const portfolioLinks = [
    'a[href^="#/collections/branding/entries/"]',
    'a[href^="#/collections/package/entries/"]',
    'a[href^="#/collections/project/entries/"]',
  ].join(',');

  let scheduled = false;
  function updateLists() {
    scheduled = false;
    document.querySelectorAll(portfolioLinks).forEach(link => {
      const card = link.closest('li');
      const list = card?.parentElement;
      if (!card || list?.tagName !== 'UL') return;
      list.classList.add('callim-numbered-list');
      card.classList.add('callim-numbered-card');
    });

    document.querySelectorAll('a[href^="#/collections/journals/entries/"]').forEach(link => {
      const heading = link.querySelector('h2');
      if (!heading || heading.dataset.callimTitle) return;
      const textNode = Array.from(heading.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
      const match = textNode?.textContent?.trim().match(/^(.*) · (\d{4}\.\d{2}\.\d{2})$/);
      if (!match) return;
      heading.dataset.callimTitle = match[1];
      heading.dataset.callimDate = match[2];
      heading.classList.add('callim-journal-heading');
    });
  }

  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(updateLists);
  }
  new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener('hashchange', schedule);
  schedule();
})();
