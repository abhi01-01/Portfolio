var index = 0 ;
var i = 0 ;
var demoslider = document.getElementsByClassName("demoslider") ;
var slideline = document.getElementsByClassName("slideline") ;

auto() ;

function show(n){
 for( i = 0 ; i < demoslider.length ; i++ ){
    demoslider[i].style.display = "none" ;
   }
 for( i = 0 ; i < slideline.length ; i++){
    slideline[i].className = slideline[i].className.replace("activate") ;
 }
 demoslider[n-1].style.display = ("block") ;
 slideline[n-1].className += " activate" ;
}

function auto(){
    index++ ;
    if( index > demoslider.length ){   // to move from last slide to 1st slide
       index = 1 ;
    }
    show(index) ;    // calling show to again start from slide 1
    //setTimeout(auto , 5000 ) ; // next slide in 3sec
 }
 
 function plusSlide(n){
    index += n ;
 
    if( index > demoslider.length ){   // to move from last slide to 1st slide
       index = 1 ;
    }
    if( index < 1 ){   // to move from first slide to last slide
       index = demoslider.length ;
    }
 
    show(index) ;
 }
 
 function currentSlide(n){
    index = n ;
    show(index) ;
 }
 
