document.addEventListener('DOMContentLoaded', () => {
  const crtBlocks = document.querySelectorAll('.crt');
  crtBlocks.forEach(crtBlock => {
    const pre = crtBlock.querySelector('pre');
    if (pre) {
      const fitText = () => {
        const crtWidth = crtBlock.clientWidth;
        let currentFontSize = parseFloat(window.getComputedStyle(pre).fontSize);
        
        // Reset font size to initial to recalculate
        pre.style.fontSize = '';
        currentFontSize = parseFloat(window.getComputedStyle(pre).fontSize);

        let scrollWidth = pre.scrollWidth;
        let clientWidth = pre.clientWidth;
        
        if (scrollWidth > clientWidth) {
            const newFontSize = currentFontSize * (clientWidth / scrollWidth);
            pre.style.fontSize = newFontSize + 'px';
        }
      };

      fitText();
      window.addEventListener('resize', fitText);
    }
  });
});
