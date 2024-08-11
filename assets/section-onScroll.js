document.addEventListener('DOMContentLoaded', () => {
  const allSections = document.querySelectorAll('.custom-section');

  const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section-hidden');
    observer.unobserve(entry.target);

    // Reveal all cards within the revealed section with a staggered delay
    const cardsInSection = entry.target.querySelectorAll('.custom-card');
    cardsInSection.forEach((card, index) => {
      setTimeout(() => {
        card.classList.remove('card-hidden');
      }, index * 150); // 150ms delay between each card
    });
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });

  allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section-hidden');
  });

  const allCards = document.querySelectorAll('.custom-card');
  allCards.forEach(function (card) {
    card.classList.add('card-hidden');
  });
});
