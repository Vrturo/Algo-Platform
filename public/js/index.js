(function() {
  $('.grid').height( $(window).height() );
  });
  var myTextarea = document.getElementById('html');
  var editor = CodeMirror.fromTextArea(myTextarea, {
    mode: "javascript",
    lineNumbers: true,
    theme: "monokai"
  });

  $('#run').click(function()) {
    // create an instance
    var editor = CodeMirror.fromTextArea('code');
    // store it
    $('#code').data('CodeMirrorInstance', editor);
    // get it
    var myInstance = $('code').data('CodeMirrorInstance');
    // from here on the API functions are available to 'myInstance' again.

  }
})();
