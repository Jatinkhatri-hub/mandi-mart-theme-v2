document.addEventListener('DOMContentLoaded', () => {
  const allCards = document.querySelectorAll('.custom-card');

  const revealCard = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('card-hidden');
    observer.unobserve(entry.target);
  };

  const cardObserver = new IntersectionObserver
  (revealSection, {
    root: null,
    threshold: 0.5,
  });

  allCards.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('card-hidden');
  });

});