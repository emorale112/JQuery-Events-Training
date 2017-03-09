console.log("Sanity Check: JS is working!");

$(document).ready(function(){

$('#imperatives span').on('click', function() {
  $('ul').append('<li>' + $(this).text() + ' at ' + Date.now());
});

})
