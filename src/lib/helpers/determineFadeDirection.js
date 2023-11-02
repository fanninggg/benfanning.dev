const determineFadeDirection = (index) => {
  const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  // On mobile all fade up
  if (width < 769) return 'fade-up';

  // On larger devices fade out from the middle
  if(index % 3 == 0) return 'fade-left'
  if(index % 3 == 2) return 'fade-right'
  return 'fade-up';
}

export default determineFadeDirection;
