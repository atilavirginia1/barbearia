
// Use datepicker on the date inputs
$("#datepicker").datepicker({
  dateFormat: 'dd/mm/yy',
  onSelect: function (dateText, inst) {
    $(inst).val(dateText); // Write the value in the input
  }
});

// Code below to avoid the classic date-picker
$("#datepicker").on('click', function () {
  return false;
});

$('#fone').mask('(00) 0000-00009');
$('#fone').on('keyup', function(event) {
   if($(this).val().length == 15){ // Celular com 9 dígitos + 2 dígitos DDD e 4 da máscara
      $('#fone').mask('(00) 00000-0009');
   } else {
      $('#fone').mask('(00) 0000-00009');
   }
});