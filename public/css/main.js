$('.choose-oasis').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-arrow-left'></i>",
    "<i class='fa fa-arrow-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})

$('.our-experts').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  navText: [
    "<i class='fa fa-arrow-left'></i>",
    "<i class='fa fa-arrow-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})

$('.google-reviews').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  navText: [
    "<i class='fa fa-arrow-left'></i>",
    "<i class='fa fa-arrow-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})

$(document).ready(function(){
  // set up hover panels
  // although this can be done without JavaScript, we've attached these events
  // because it causes the hover to be triggered when the element is tapped on a touch device
  $('.hover').hover(function(){
    $(this).addClass('flip');
  },function(){
    $(this).removeClass('flip');
  });
});


$(".counter-timer").each(function() {
  var number = $(this).attr("data-to");
  $(this).countTo({
    from: 0,
    to: number,
    speed: 1500,
    refreshInterval: 10,
    formatter: function(number, options) {
      number = number.toFixed(options.decimals);
      number = number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return number;
    }
  });
});


AOS.init({
  duration: 1200,
})

document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = document.querySelectorAll('.lazy-load');

  var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust the threshold as needed
  };

  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var lazyImage = entry.target;
        lazyImage.src = lazyImage.getAttribute('src');
        lazyImage.classList.add('loaded');
        observer.unobserve(lazyImage); // Stop observing once the image is loaded
      }
    });
  }, options);

  lazyImages.forEach(function(img) {
    observer.observe(img);
  });
});