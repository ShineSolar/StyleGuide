document.addEventListener('DOMContentLoaded', (e) => {

  const body = document.querySelector('body');
  const cardColorGridItems = document.querySelectorAll('.card__grid-item--colors');
  const sidebar = document.querySelector('.sidebar');

  // click to copy-to-clipboard
  cardColorGridItems.forEach(item => {
    item.addEventListener('click', (e) => {
      let target;
      const className = e.target.className;
      const classList = e.target.classList;
      if(classList.contains('color') || className === 'color-caption') {
        if(classList.contains('color')) {
          target = e.target;
        } else if(className === 'color-caption') {
          target = e.target.parentElement;
        }
        const p = target.querySelector('p');
        const textArea = document.createElement('textarea');
        body.appendChild(textArea);
        textArea.value = p.textContent;
        textArea.select();
        document.execCommand('copy');
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
  });

  sidebar.addEventListener('click', (e) => {
    if(e.target.tagName === 'A') {
      let target = e.target;
      let scrollTo = '#' + target.href.split('#')[1];
      document.querySelector(scrollTo).scrollIntoView({ behavior: 'smooth' });
    }
  });

});
