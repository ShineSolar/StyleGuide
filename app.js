const body = document.querySelector('body');
const cardColorGrid = document.querySelector('.card__color-grid');

cardColorGrid.addEventListener('click', (e) => {
    const target = e.target;
    const className = target.className;
    if(className.includes('shade-') || className.includes('brand-colors--')) {
      const p = target.querySelector('.color-caption');
      const textArea = document.createElement('textarea');
      body.appendChild(textArea);
      textArea.value = p.textContent;
      textArea.select();
      document.execCommand('copy');
      console.log(textArea.value);
      body.removeChild(textArea);
    }
  });
