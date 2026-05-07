const iconSprite = "assets/icons/icons.svg";
const icon = (name, className = "") => `<svg class="${className}" aria-hidden="true"><use href="${iconSprite}#${name}"></use></svg>`;

window.portfolioIcons = {
  arrow: icon("arrow"),
  github: icon("github", "brand-icon"),
  linkedin: icon("linkedin", "brand-icon"),
  company: icon("company"),
  layers: icon("layers"),
  education: icon("education"),
  award: icon("award"),
  shield: icon("shield"),
  mail: icon("mail", "brand-icon"),
  globe: icon("globe")
};
