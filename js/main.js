$("img").click(function(){
    $(this).toggleClass("carousel");
});

 $('.carousel').carousel({ interval: 10000  });