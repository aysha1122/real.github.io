$(function() {
    var selectedClass = "";
    var pelected1Class = "";
        $(".project-tab .dropdown .clickbtn").click(function(){
            $(".project-tab .dropdown .dropdown-menu").toggle();
            // selectedClass = $(".project-tab .dropdown .dropdown-menu .dropdown-item").text();
            // $(".project-tab .dropdown .clickbtn").text(selectedClass);  
     });
     $(".project-tab .dropdown .dropdown-menu .dropdown-item").click(function(){
        selectedClass = $(this).text();
        //pelected1Class=
        pelected1Class=$(".project-tab .dropdown .clickbtn").text(selectedClass);
 });
 });

//  $(function() {
//     var selectedClass = "";
//         $(".offer-wrapper .offer-container #exampleFormControlSelect1").change(function(){
//             $(".slide-col3").hide();
//         selectedClass = $(".offer-wrapper .offer-container #exampleFormControlSelect1 .filter:selected").attr("value");

//         $("#gallery").fadeTo(100, 0.1);

//         $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');

//             setTimeout(function() {
//             $("."+selectedClass).fadeIn().addClass('animation');
//             $("#gallery").fadeTo(300, 1);
//          }, 300);
//      });
//  });
//  $(function() {
//     var selectedClass = "";
//         $(".offer-wrapper .offer-container #exampleFormControlSelect1").change(function(){
//             $(".slide-col3").hide();
//         selectedClass = $(".offer-wrapper .offer-container #exampleFormControlSelect1 .filter:selected").attr("value");

//         $(".offer-wrapper .offer-container #gallery .kk").fadeTo(100, 0.1);

//         $("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');

//             setTimeout(function() {
//             $("."+selectedClass).fadeIn().addClass('animation');
//             $("#gallery").fadeTo(300, 1);
//          }, 300);
//      });
//  });
    
 $(document).ready(function(){
    $(".offer-wrapper .offer-container #exampleFormControlSelect1").change(function(){
        $(".offer-wrapper .offer-container #gallery .kk").show();
    });
  });