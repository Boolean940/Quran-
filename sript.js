const video = document.querySelector('video.background-video');
video.playbackRate = 0.7;  

  const ayahs = document.querySelectorAll('.body-content .ayah');
  let currentIndex = 0;

  function showAyah(index) {
    ayahs.forEach((ayah, i) => {
      ayah.classList.toggle('active', i === index);
    });
  }

  setInterval(() => {
    currentIndex = (currentIndex + 1) % ayahs.length;
    showAyah(currentIndex);
  }, 3000);