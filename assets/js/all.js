"use strict";

$(function () {
  var invoice01 = $('.checkout__invoiceChoose')[0];
  var invoice02 = $('.checkout__invoiceChoose')[1];
  var option01 = $('.checkout__invoiceOption')[0];
  var option02 = $('.checkout__invoiceOption')[1];
  $(option01).removeClass('d-none');
  $(invoice01).addClass('active');
  $(invoice01).on('click', function () {
    $(invoice02).removeClass('active');
    $(invoice01).addClass('active');
    $(option01).removeClass('d-none');
    $(option02).addClass('d-none');
  });
  $(invoice02).on('click', function () {
    $(invoice01).removeClass('active');
    $(invoice02).addClass('active');
    $(option02).removeClass('d-none');
    $(option01).addClass('d-none');
  });
});
//# sourceMappingURL=all.js.map
