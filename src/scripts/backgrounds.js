

const homeVideo = `${window.location.origin}/wp-content/uploads/2025/07/rostro-flotante-izquierda.mp4`;
const servicesVideo = `${window.location.origin}/wp-content/uploads/2025/07/service-hero.webm`;
const method360Video = `${window.location.origin}/wp-content/uploads/2025/07/metodo-360.mp4`;

function backgroundHome() {

  const videoFile = document.createElement('video');
  // videoHome.src = homeVideo;
  videoFile.autoplay = true;
  videoFile.loop = true;
  videoFile.muted = true;
  videoFile.playsInline = true;
  videoFile.classList.add('background-hero-video');

  const homeDesktop = document.querySelector('.header-hero.home');
  if (homeDesktop) {
    videoFile.src = homeVideo;
    homeDesktop.appendChild(videoFile);
  }
  const homeMobile = document.querySelector('.header-hero-mobile.home .header-hero-content-video-mobile');
  if (homeMobile) {
    videoFile.src = homeVideo;
    homeMobile.appendChild(videoFile);
  }

  const servicesDesktop = document.querySelector('.header-hero.services');
  if (servicesDesktop) {
    videoFile.src = servicesVideo;
    servicesDesktop.appendChild(videoFile);
  }
  const servicesMobile = document.querySelector('.header-hero-mobile.services .header-hero-content-video-mobile');
  if (servicesMobile) {
    videoFile.src = servicesVideo;
    servicesMobile.appendChild(videoFile);
  }

  const method360Desktop = document.querySelector('.header-hero.method-360');
  if (method360Desktop) {
    videoFile.src = method360Video;
    method360Desktop.appendChild(videoFile);
  }
  const method360Mobile = document.querySelector('.header-hero-mobile.method-360 .header-hero-content-video-mobile');
  if (method360Mobile) {
    videoFile.src = method360Video;
    method360Mobile.appendChild(videoFile);
  }

}

jQuery(document).ready(function () {

  backgroundHome();

});