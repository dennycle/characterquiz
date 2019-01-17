$(document).ready(function() {
  $("form#characterQuiz").submit(function(event) {
    var console = parseInt($("select#console").val());
    var genre = parseInt($("select#genre").val());
    var magic = parseInt($("select#magic").val());
    var score = console + genre + magic;

    $(".results").children().hide();
    if(score <= 7){
      $(".mario").show();
    }
    else if(score > 7 && score <= 11){
      $(".bowser").show();
    }
    else if(score > 11 && score <= 15){
      $(".link").show();
    }
    else if(score > 15 && score <= 19){
      $(".peach").show();
    }
    else if(score > 19 && score <= 23){
      $(".pikachu").show();
    }
    else if(score > 23 && score <= 27){
      $(".kirby").show();
    }
    event.preventDefault();
  });
});
