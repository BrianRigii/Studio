$("#designimg").click(function() {
    $(this).hide();
    $("#designtxt").removeClass("designtxt");
  });
  $("#devimg").click(function() {
    $(this).hide();
    $("#devtxt").removeClass("devtxt");
  });
  
  $("#prodimg").click(function() {
    $(this).hide();
    $("#prodtxt").removeClass("prodtxt");
  });
  
  $("#designtxt").click(function() {
    $("#designimg").show();
    $("#designtxt").addClass("designtxt");
  });
  
  $("#devtxt").click(function() {
    $("#devimg").show();
    $("#devtxt").addClass("devtxt");
  });
  
  $("#prodtxt").click(function() {
    $("#prodimg").show();
    $("#prodtxt").addClass("prodtxt");
  });
  
 

$("#work1").hover(function(){
    $("#1").removeClass("box1")
      $("#1").addClass("box10")
  },function(){
    $("#1").removeClass("box10")
    $("#1").addClass("box1")
  
  })

  $("#work2").hover(function(){
    $("#2").removeClass("box1")
      $("#2").addClass("box10")
  },function(){
    $("#2").removeClass("box10")
    $("#2").addClass("box1")
  
  })

  $("#work3").hover(function(){
    $("#3").removeClass("box1")
      $("#3").addClass("box10")
  },function(){
    $("#3").removeClass("box10")
    $("#3").addClass("box1")
  
  })

  $("#work4").hover(function(){
    $("#4").removeClass("box1")
      $("#4").addClass("box10")
  },function(){
    $("#4").removeClass("box10")
    $("#4").addClass("box1")
  
  })
  