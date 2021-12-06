$(document).ready(function () {
  $("#btn-menu").click(function (e) {
    e.preventDefault();
    $("#menu").toggle("slow");
  });
  $("#div3").click(function (e) {
    e.preventDefault();
    $("#thre").toggle("slow");
  });

  /*$("a").click(function (e) {
  e.preventDefault();
    var href = $(this).attr("href");
   if (href == "one") {
      $("#" + href).show();
    }  
    else if (href == "two") {
      $("#" + href).show();
     
    } 
    else if (href == "thre") {
      $("#" + href).show();
      
    }
    else if (href == "four") {
      $("#" + href).show();
      
    }
    else if (href == "five") {
      $("#" + href).show();
      
    }
    else if (href == "six") {
      $("#" + href).show();
     
    }
  });*/
});