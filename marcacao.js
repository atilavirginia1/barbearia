
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



