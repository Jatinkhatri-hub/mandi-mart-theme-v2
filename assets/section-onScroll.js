document.addEventListener('DOMContentLoaded', () => {
  const allSections = document.querySelectorAll('.custom-section');

  const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section-hidden');
    observer.unobserve(entry.target);

    // Reveal all cards within the revealed section
    const cardsInSection = entry.target.querySelectorAll('.custom-card');
    cardsInSection.forEach(card => {
      card.classList.remove('card-hidden');
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

  // No need for a separate cardObserver since cards will be revealed with their section
  const allCards = document.querySelectorAll('.custom-card');
  allCards.forEach(function (card) {
    card.classList.add('card-hidden');
  });
});
