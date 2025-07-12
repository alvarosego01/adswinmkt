

jQuery(document).ready(function () {

  document.querySelectorAll('.header-hero.home').forEach(el => {
    const video = document.createElement('video');
    video.src = `${window.location.origin}/wp-content/uploads/2025/07/rostro-flotante-izquierda.mp4`;
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.classList.add('background-hero-video');
    el.appendChild(video);
  });

});