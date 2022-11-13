$('p').hide();
$('#1').show();
$('select').change(function() {
$('p').hide();
  var a = $(this).val();
  $("#" + a).show();
})