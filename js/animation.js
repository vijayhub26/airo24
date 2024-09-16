document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.fade-in-section');

  const options = {
    threshold: 0.1 // Trigger when 10% of the section is visible
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add 'is-visible' class when the section enters the viewport (fade in)
        entry.target.classList.add('is-visible');
      } else {
        // Remove 'is-visible' class when the section leaves the viewport (fade out)
        entry.target.classList.remove('is-visible');
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
});
