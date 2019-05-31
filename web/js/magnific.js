(function($) {
  "use strict"; // Start of use strict

  

  // Modal popup$(function () {
  $('.portfolio-mod').magnificPopup({
    type: 'inline',
    preloader: false,
    modal: true
  });
  $(document).on('click', '.portfolio-modal-dismiss', function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });



})(jQuery); // End of use strict
