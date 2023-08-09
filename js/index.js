console.log("Your index.js file is loaded correctly! Hooray for you! What skill! What marketability!");

// $(".iconic").click(function(){
//     $(this).fadeToggle("slow", 0.5);
// })

// $(".iconic").on("mouseenter", function(){
//     $(this).fadeIn("slow", 0.5); // Fade in on mouse enter
// });

// $(".iconic").on("mouseleave", function(){
//     $(this).fadeOut("slow", 1);   // Fade out on mouse leave
// });

// $(".iconic").hover(
//     function() {
//       $(this).fadeIn("fast"); // Fade in on mouse enter
//     },
//     function() {
//       $(this).fadeOut("fast"); // Fade out on mouse leave
//     }
//   );

$(document).ready(function(){
    $(".iconic").hover(function(){
      $(this).fadeTo("fast", 0.5);
    }, function(){
      $(this).fadeTo("fast", 1);
    });
  });