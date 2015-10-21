$(function() {

  // Launch modal on load
  $('#add-data-columns-modal').addClass('show');

  // create main layout
  $('#add-data-columns-btn').click(function() {
    $('#add-data-columns-modal').removeClass('show');

    var cols = $('#add-data-columns-number').val();
    $('#main-content').append('<labe id="main-grid-lbl"></labe><div id="main-grid"></div>');
    $('#main-grid').attr('data-columns', cols);
    if ($('input[name=add-data-columns-gutter]:checked').val() === 'yes') {
      $('#main-grid').addClass('k-gutter');
    }

    // build data-columns
    for (var i = 0; i < cols ; ++ i) {
      $('#main-grid').append('<div id="data-column-'+ (i+1) +'"><span>&lt;div&gt;</span></div>');
    }
    $('#main-grid-lbl').text('<div data-columns="'+ i +'">');
    
    // Select data-columns
    $('#main-grid').click(function(e) {
      $('#main-grid').removeClass('active').find('.active').removeClass('active');
      if ($(e.target).attr('id')) {
        $(e.target).addClass('active');
      } else {
        $(e.target).closest('[id]').addClass('active');
      }

      // enable actions
      $('#add-nested-data-columns').removeAttr('disabled');
      $('#remove-data-column').removeAttr('disabled');
    });

    // Remove data-column
    $('#remove-data-column').click(function(e) {
      if($('#main-grid').hasClass('active') == true) {
        $('#main-grid').remove();
        $('#main-grid-lbl').remove();
        $('#add-data-columns-modal').addClass('show');
      } else {
        $('#main-grid .active').remove();
      }
    });
  });
});
