function sectionHeading(kicker, title) {
  return `
    <div class="section-heading">
      <div>
        <p class="section-kicker">${kicker}</p>
        <h2>${title}</h2>
      </div>
    </div>
  `;
}

function externalAttrs(url) {
  return url === "#" ? 'aria-disabled="true"' : 'target="_blank" rel="noreferrer"';
}
