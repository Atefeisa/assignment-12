
$(".closeBtn").click(function () {


    let width = $(".innerbox").outerWidth()
      $(".sidebar").animate({ left: `-${width}px` },1000)

     


})

 $(".openSlide").click(function () {
      let width = $(".innerbox").outerWidth()

      $(".sidebar").animate({ left: `0px` }, 1000)


})




$(".sidebar a").click(function(){
    
    let hrefval= $(this).attr("href");
    
    let sectionTop = $(hrefval).offset().top;
    
    $("html , body").animate({scrollTop:sectionTop},{duration:1000,queue:false});
    
})








$(".item").click(function(){
    $('.inner').not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(1000);
});

 












window.onload = function() {
   
    countDown("31 december 2024 23:59:00");
  }

  function countDown(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDown(countTo); }, 1000);
  }








  let maxLength = 100;
  $('textarea').keyup(function() {
    let length = $(this).val().length;
    let availableLetters = maxLength-length;
    if(availableLetters<=0)
              {
               $("#chars").text("The letters available to you are over");
                  
              }
          else{
          
          $("#chars").text(availableLetters);
          }
  });
  





































//     if (localStorage.getItem("color") != null) {
//         $(":root").css("--color", localStorage.getItem("color"))
//     }

//     $(".bgbox img").click(function () {


//         let imgsrc = $(this).attr("src")

//         $("#home").css("background-image", `linear-gradient(rgba(0, 0, 0, 0.484), rgba(0, 0, 0, 0.484)), url(${imgsrc})`)

//         localStorage.setItem("img", imgsrc)
//         console.log(imgsrc);
//     })

//     if (localStorage.getItem("img") != null) {

//         $("#home").css("background-image", `linear-gradient(rgba(0, 0, 0, 0.484), rgba(0, 0, 0, 0.484)), url(${localStorage.getItem("img")})`)
//     }

//     let width = $(".innerbox").outerWidth()
//     $(".sidebar").css({ left: `-${width}px` })

//     $(".setting").click(function () {
//         let width = $(".innerbox").outerWidth()


//         let left = $(".sidebar").css("left")
//         console.log(left);
//         if (left == "0px") {
//             $(".sidebar").animate({ left: `-${width}px` }, 1000)
//         } else {
//             $(".sidebar").animate({ left: `0px` }, 1000)
//         }
//     })

//     $(".setting").mouseenter(function () {
//         let width = $(".innerbox").outerWidth()
//         // -
//         let left = Number($(".sidebar").css("left").replace("px", ''))

//         console.log(left);
//         if (left < 0) {
//             $(".sidebar").animate({ left: `-${width - 50}px` }, 1000)
//         }

//     })

//     $(".setting").mouseleave(function () {
//         let width = $(".innerbox").outerWidth()

//         let left = Number($(".sidebar").css("left").replace("px", ''))

//         console.log(left);
//         console.log(width - 50);
//         if (Math.abs(left) == (width - 50)) {
//             $(".sidebar").animate({ left: `-${width}px` }, 1000)
//         }

//     })




//     $(".loading").fadeOut(3000, function () {
//         $(".loading").removeClass("d-flex")
//     })



// })

