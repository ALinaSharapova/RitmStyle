$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    infinite: true,
    dots: true,
    responsive: [
      
      {
          breakpoint: 1440,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }},



      { breakpoint: 1140,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 2,

        }
        },
        
        { breakpoint: 956,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,

              centerMode: false,
            }
            },

            { breakpoint: 660,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false,
    
                }
                }

]

    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });