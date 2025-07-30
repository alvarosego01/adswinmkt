

const origin = window.location.origin;

const homeVideo = `${origin}/wp-content/uploads/2025/07/rostro-flotante-izquierda.mp4`;
const servicesVideo = `${origin}/wp-content/uploads/2025/07/service-hero.mp4`;
const method360Video = `${origin}/wp-content/uploads/2025/07/metodo-360.mp4`;
const aboutUsVideo = `${origin}/wp-content/uploads/2025/07/nosotros-video.mp4`;
const blogVideo = `${origin}/wp-content/uploads/2025/07/blog-video.mp4`;
const contactVideo = `${origin}//wp-content/uploads/2025/07/contacto-video.mp4`;

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

  const aboutUsDesktop = document.querySelector('.header-hero.about-us');
  if (aboutUsDesktop) {
    videoFile.src = aboutUsVideo;
    aboutUsDesktop.appendChild(videoFile);
  }
  const aboutUsMobile = document.querySelector('.header-hero-mobile.about-us .header-hero-content-video-mobile');
  if (aboutUsMobile) {
    videoFile.src = aboutUsVideo;
    aboutUsMobile.appendChild(videoFile);
  }

  const blogDesktop = document.querySelector('.header-hero.blog');
  if (blogDesktop) {
    videoFile.src = blogVideo;
    blogDesktop.appendChild(videoFile);
  }
  const blogMobile = document.querySelector('.header-hero-mobile.blog .header-hero-content-video-mobile');
  if (blogMobile) {
    videoFile.src = blogVideo;
    blogMobile.appendChild(videoFile);
  }

  const contactDesktop = document.querySelector('.header-hero.contact');
  if (contactDesktop) {
    videoFile.src = contactVideo;
    contactDesktop.appendChild(videoFile);
  }
  const contactMobile = document.querySelector('.header-hero-mobile.contact .header-hero-content-video-mobile');
  if (contactMobile) {
    videoFile.src = contactVideo;
    contactMobile.appendChild(videoFile);
  }

}

jQuery(document).ready(function () {
  backgroundHome();

});