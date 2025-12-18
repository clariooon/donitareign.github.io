document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.enlargeable');
  
    images.forEach(image => {
      image.addEventListener('click', function() {
        image.classList.toggle('enlarged');
      });
    });
  });
