function heroSection(data) {
  const icons = window.portfolioIcons;
  const title = data.title.replace(data.highlightedTitle, `<span>${data.highlightedTitle}</span>`);

  return `
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">Developer Portfolio</p>
        <h1 id="hero-title">${title}</h1>
        <p class="lead">${data.intro}</p>
        <div class="hero-actions" aria-label="Primary actions">
          <a class="button hero-button hero-icon-button" href="${data.linkedin.url}" target="_blank" rel="noreferrer" aria-label="LinkedIn">${icons.linkedin}</a>
          <a class="button hero-button hero-icon-button secondary" href="${data.github.url}" target="_blank" rel="noreferrer" aria-label="GitHub">${icons.github}</a>
          <a class="button hero-button secondary" href="${data.contactForm.url}" target="_blank" rel="noreferrer">${icons.mail} ${data.contactForm.label}</a>
        </div>
      </div>
      <aside class="hero-visual" aria-label="Portfolio portrait">
        <div class="hero-image-card">
          <img src="${data.heroImage}" alt="${data.name}">
        </div>
        <div class="hero-status-card">
          <span><span class="status-dot"></span>${data.status}</span>
          ${data.location ? `<strong>${data.location}</strong>` : ""}
        </div>
      </aside>
    </section>
  `;
}
