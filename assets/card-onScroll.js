document.addEventListener('DOMContentLoaded', () => {
  const allSections = document.querySelectorAll('.custom-card');

  const revealSection = function (entries, observer) {
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) return;

    entry.target.classList.remove('card-hidden');
    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver
  (revealSection, {
    root: null,
    threshold: 0.15,
  });

  allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section-hidden');
  });

});