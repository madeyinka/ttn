$(document).ready(function() {

  
  "use strict";

   BackToTop();
   MenuLoad();
   MenuSideLoad(); 
   AppearIteam();
   Sliders();
   PageLoad();
   SearchLoad();
   NavOpen();
   PageScroll();

   

  
});




function NavOpen() {
    $('.open-nav').on('click', function() {
        $('.header-wrapper').toggleClass('nav-is-open');
        $('.upper-header').toggleClass('active');    
        return false;  
    });
     
} 


function SearchLoad() {
    $('.sreach-icon').on('click', function() {
        $('.search-wrapper').addClass('active');    
        return false;  
    });

    $('.close-icon').on('click', function() {
        $('.search-wrapper').removeClass('active');    
        return false;  
    });
   
}


/*--------------------------------------------------
Function Back To Top
---------------------------------------------------*/
  
  function BackToTop() {
    
    $('.back-top').on('click', function() {
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    
    
  
  }//End Back To Top


/*--------------------------------------------------
Function Slider
---------------------------------------------------*/

  function Sliders() {

      $('.slider-0').owlCarousel({
          loop:true,
          margin:20,
          nav:true,
          autoplay:true,  
          autoplayTimeout:9000, 
          dots:false,
          navText:['<img src="images/icon46.png" alt="left-arrow" />','<img src="images/icon47.png" alt="right-arrow" />'],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:2
              },
              1000:{
                  items:3
              }
          }
      })

       
    
      $('.slider-1').owlCarousel({
          loop:true,
          margin:0,
          nav:true,
          autoplay:true,  
          autoplayTimeout:9000, 
          dots:true,
          navText:['<img src="images/left-arrow.png" alt="left-arrow" />','<img src="images/right-arrow.png" alt="right-arrow" />'],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      })

      $('.slider-2').owlCarousel({
          loop:true,
          margin:0,
          nav:true,
          autoplay:true,  
          autoplayTimeout:9000, 
          dots:false,
          navText:['<img src="images/left-arrow-2.png" alt="left-arrow" />','<img src="images/right-arrow-2.png" alt="right-arrow" />'],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      })
      $('.slider-3').owlCarousel({
          margin:15,
          loop:true,
          autoWidth:true,
          items:4,
          navText:['<img src="images/left-arrow-2.png" alt="left-arrow" />','<img src="images/right-arrow-2.png" alt="right-arrow" />']
           
      })

      $('.slider-4').owlCarousel({
          loop:true,
          margin:30,
          nav:false,
          autoplay:true,  
          autoplayTimeout:9000, 
          dots:true,
          navText:['<img src="images/left-arrow-2.png" alt="left-arrow" />','<img src="images/right-arrow-2.png" alt="right-arrow" />'],
          responsive:{
              0:{
                  items:1
              },

              600:{
                  items:2
              },
              800:{
                  items:3
              },
              1200:{
                  items:4
              }
          }
      })


      var owlslider_7 = $('.slider-7');

      owlslider_7.owlCarousel({
          loop:true,
          margin:0,
          mouseDrag:false,
          nav:false,
          autoplay:false,  
          animateOut: 'fadeOut',
          autoplayTimeout:6000, 
          dots:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      })

      owlslider_7.on('mousewheel', '.owl-stage', function (e) {
          if (e.deltaY>0) {
              owlslider_7.trigger('prev.owl');
          } else {
              owlslider_7.trigger('next.owl');
          }
          e.preventDefault();
      });

      

      $('.slider-5').owlCarousel({
          mouseDrag:false,
          loop:false,
          margin:0,
          nav:false,
          autoplay:true,  
          animateOut: 'slideOutUp',
          animateIn: 'slideInUp',
          autoplayTimeout:6000, 
          dots:true,
          navText:['<img src="images/left-arrow-2.png" alt="left-arrow" />','<img src="images/right-arrow-2.png" alt="right-arrow" />'],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      })
       

      
      var owl = $('.slider-6');
      owl.owlCarousel({
        mouseDrag:false,
          loop:false,
          margin:0,
          nav:false,
          autoplay:false,  
          animateOut: 'slideOutUp',
          animateIn: 'slideInUp',
          autoplayTimeout:6000, 
          dots:true,
          items:1
      })
    


    $('.slider-8').owlCarousel({
          loop:true,
          margin:30,
          nav:true,
          autoplay:false,  
          autoplayTimeout:6000, 
          dots:true,
          navText:['<img src="images/left-arrow.png" alt="left-arrow" />','<img src="images/right-arrow.png" alt="right-arrow" />'],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:3
              },
              1000:{
                  items:3
              }
          }
      })





  }
 
 
 


/*--------------------------------------------------
Function Appear Items
---------------------------------------------------*/
function AppearIteam() {    
    
    setTimeout(function(){
      $('.has-animation').each(function() { 
        $(this).appear(function() {       
          $(this).delay($(this).attr('data-delay')).queue(function(next){
            $(this).addClass('animate-in');
            next();
          });           
        });   
      });
    } , 250 );    
  
  }//End AppearIteam

/*--------------------------------------------------
Function Menu Load
---------------------------------------------------*/ 

function MenuLoad() {
    // mobile menu
    $('.menu-click').on('click', function() {      
        $(this).toggleClass('open');      
        $('.menu-nav').slideToggle();

        return false;
    });

    

    var $menu = $('#main-menu');
    
    // add classes
    $menu.find('li').each(function() {
      if($(this).children('ul').length) {
        $(this).addClass('has-submenu');
        $(this).find('>a').after('<span class="submenu-toggle"></span>');
      }
    });
    
    var $submenuTrigger = $('.has-submenu > .submenu-toggle');
    // submenu link click event
    $submenuTrigger.on( "click", function() {
      $(this).parent().toggleClass('active');
      $(this).siblings('ul').toggleClass('active');
    });


}

function MenuSideLoad() {
    $('.side-click').on('click', function() {      
        $(this).toggleClass('open');      
        $('.overlay-section').toggleClass('active'); 
        $('.menu-overlay').toggleClass('active'); 
        return false;
    });
    $('.close-menu').on('click', function() {
        $('.side-click').removeClass('open'); 
        $('.overlay-section').removeClass('active'); 
        $('.menu-overlay').removeClass('active'); 
        return false;
    });
}

/*--------------------------------------------------
Function Page Load
---------------------------------------------------*/

function PageLoad() {

    $('.rally-preloader').addClass("rally-loading full-preloader");
    $('.rally-preloader > span').width($( window ).width());
          
    jQuery(window).load(function() {

       setInterval(function(){ 
          $('.rally-preloader').addClass("rally-preloader-loaded");
      }, 500);
      setInterval(function(){ 
          $('.rally-preloader-wrapper > span').addClass("display-none");
          $('.rally-loader-wrapper').fadeOut(400);
      }, 900);          
      setInterval(function(){ 
          $('.rally-preloader-wrapper').addClass("display-none");
      }, 1000);



    });
  }


function PageScroll() {
   $(".scroll-tiger").on("click", function(e) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top - 0
        }, 1500, 'easeInOutExpo');
        $('.overlay-section').removeClass('active'); 
        e.preventDefault();

    });

}