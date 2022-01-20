  //scroll top 
  window.onscroll = function () {
      scrollFunction();
  };

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("gotopbtn").style.display = "block";
      } else {
          document.getElementById("gotopbtn").style.display = "none";
      }
  }

  function toUp() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
//Start slick
  $('.slider').slick({
      infinite: true,
      speed: 100,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 999,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
      ]

  });
  $('.slider1').slick({
      infinite: true,
      speed: 100,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 759,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
      ]

  });

  //End slick

  var typed = new Typed('.animate', {
      // Waits 1000ms after typing "First"
      strings: ['Software Developer', 'Designer', 'Full Stack Web Developer', 'Freelancer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
  });