console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $('#total').on('change', function () {
    var num1 = parseInt($('#left').val());
    var num2 = parseInt($('#right').val());

    var total = num1 + num2;
    $('#total').val(total).text(total);
  });

})
