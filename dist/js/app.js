document.addEventListener('DOMContentLoaded', (e) => {

  const body = document.querySelector('body');
  const cardColorGrid = document.querySelector('.card__color-grid');
  const navLinks = document.querySelector('.sidebar');

  cardColorGrid.addEventListener('click', (e) => {
      const target = e.target;
      const className = target.className;
      if(
        className.includes('shades--') ||
        className.includes('brand-colors--') ||
        className.includes('other-colors--')) {
        const p = target.querySelector('.color-caption');
        const textArea = document.createElement('textarea');
        body.appendChild(textArea);
        textArea.value = p.textContent;
        textArea.select();
        document.execCommand('copy');
        console.log(textArea.value);
        body.removeChild(textArea);

        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.textContent = 'Copied to clipboard!';
        target.appendChild(tooltip);
        setTimeout(() => {
          tooltip.style.opacity = 0;
          setTimeout(() => {
            target.removeChild(tooltip);
            }, 2000);
          }, 500);
      }
    });

    navLinks.addEventListener('click', (e) => {
      if(e.target.tagName === 'A') {
        let target = e.target;
        let scrollTo = '#' + target.href.split('#')[1];
        document.querySelector(scrollTo).scrollIntoView({ behavior: 'smooth' });
      }
    });

});
