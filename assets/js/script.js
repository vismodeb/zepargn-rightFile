$(document).ready(function(){
    // Mobile Menu Icon
   $(document).ready(function(){
      $('#nav-icon4').click(function(){
         $(this).toggleClass('open');
         $('.header-display').slideToggle();
      });
   });

   // typing animation 
    var typed = new Typed(".typing",{
        strings:["","EFFICIENTLY","SMARTLY","WISELY ","STRATEGICALLY ","PRUDENTLY"],
        typeSpeed:150,
        BackSpeed:80,
        loop:true
    })

    // Owl carousel
 $('.slider-tile').owlCarousel({
   loop:true,
   nav:false,
   margin: 30,
   center:true,
   autoplay:true,
   dote:true,
   responsive:{
       0:{
           items:1,
           center:false,
       },
       767:{
           items:2,
        //    center:false,
       },
       1100:{
           items:3
       },
       1400:{
           items:4
       }
   }
 });

});

