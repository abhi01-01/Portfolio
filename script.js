$(document).ready(function(){
   $(window).scroll(function(){
// -------------------------------------sticky navbar on scroll script---------------------------------------//
       if(this.scrollY > 20){
          $('.navbar').addClass("sticky");  
       }else{
          $('.navbar').removeClass("sticky");
       }
// --------------------------------------scroll-up button show/hide script-----------------------------------//
       if(this.scrollY > 500){
          $('.scroll-up-button').addClass("show");
       }else{
         $('.scroll-up-button').removeClass("show");
       }
   });

// -----------------------------------------slide up script--------------------------------------------//

   $('.scroll-up-button').click(function(){
      $('html').animate({scrollTop:0}) ;
// --------------------------------------removing smooth scroll on slide-up button click--------------------//
      $('html').css("scrollBehavior",auto) ;
   });
   $('.navbar .menu li a').click(function(){
//----------------------------- applying again smooth scroll on menu items click----------------------------//
      $('html').css("scrollBehavior",smooth) ;
   });

// -----------------------------------------------toggle menu/navbar script--------------------------------//

      $('.menu-btn').click(function(){
         $('.navbar .menu').toggleClass("active");
         $('.menu-btn i').toggleClass("active");
       });

//------------------------------------------- projects links script---------------------------------------//

              // ------------ project - 1 ------------------ // 
$('.proj1').click(function(){
   window.open('https://shopie-e.herokuapp.com/');
});
             // ------------- project - 2 ------------------- //
$('.proj2').click(function(){
   window.open('put the project 2 link');
});
            // ---------------- project - 3 ------------------- // 
$('.proj3').click(function(){
   window.open('put the project 3 link');
});
            // ---------------- project - 4 ------------------- // 
$('.proj4').click(function(){
   window.open('put the project 4 link');
});


//-------------------------------------typing animation script---------------------------------------------//

   var typed = new Typed(".typing",{
      strings:["Programmer.","MERN stack Developer.","Designer."],
      typeSpeed:100,
      loop:true,
      backdelay:900,
      backSpeed:60
   });
   var typed = new Typed(".typing-2",{
      strings:["Programmer.","MERN stack Developer.","Designer."],
      typeSpeed:90,
      backSpeed:50,
      backdelay:900,
      loop:true
   });
   
    $('.card').click(function(){
       (this).find('a').trigger('click');
    });

// ---------------------------------------------owl carousel script------------------------------------ //

   $('.carousel').owlCarousel({
      margin: 20 ,
      loop: true ,
      autoplay: true , 
      autoplayTimeOut: 2000 ,
      autoplayHoverPause:true ,
      responsive:{
         0:{
            items : 1 ,
            nav: false
         },
         600:{
            items : 2 ,
            nav: false
         },
         1000:{
            items : 2 ,
            nav: false
         }
      } 
   });
});