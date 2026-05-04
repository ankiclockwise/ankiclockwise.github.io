function sectionHeading(kicker, title, intro) {
  return `
    <div class="section-heading">
      <div>
        <p class="section-kicker">${kicker}</p>
        <h2>${title}</h2>
      </div>
      <p class="section-intro">${intro}</p>
    </div>
  `;
}

function logoMark(iconName, label) {
  const icons = window.portfolioIcons;
  return `<div class="logo-mark" aria-label="${label}">${icons[iconName] || icons.company}</div>`;
}

function timelineItem(item, label) {
  const mark = item.logo
    ? `<div class="logo-mark image-logo"><img src="${item.logo}" alt="${item.logoAlt || label}"></div>`
    : logoMark(item.icon, label);

  return `
    <article class="timeline-item">
      ${mark}
      <div>
        <p class="timeline-meta">${item.meta}</p>
        <h3>${item.title}</h3>
        <ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
      </div>
    </article>
  `;
}

function profileIcon(iconName, label) {
  return `
    <span class="profile-icon">${window.portfolioIcons[iconName]}</span>
    <span class="sr-only">${label}</span>
  `;
}
