

function backgroundHome() {

   const videoHome = document.createElement('video');
    videoHome.src = `${window.location.origin}/wp-content/uploads/2025/07/rostro-flotante-izquierda.mp4`;
    videoHome.autoplay = true;
    videoHome.loop = true;
    videoHome.muted = true;
    videoHome.playsInline = true;
    videoHome.classList.add('background-hero-video');

  const desktop = document.querySelector('.header-hero.home');
  if (desktop) {
    desktop.appendChild(videoHome);
  }
  const mobile = document.querySelector('.header-hero-mobile.home .header-hero-content-mobile');
  if (mobile) {
    mobile.appendChild(videoHome);
  }

}

jQuery(document).ready(function () {

  // backgroundHome();

});