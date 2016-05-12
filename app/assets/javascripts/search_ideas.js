$(document).ready(function(){
  $( "#idea_search" ).keyup(function(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      return;
    }

    $('.idea').each(function(){
      var searchStr = $('#idea_search').val().toLowerCase();
      var title = this.children[0].children[0].innerHTML.toLowerCase();
      var body = this.children[3].innerHTML.toLowerCase();
      if (searchMatch(title, body, searchStr)) {
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  });

  function searchMatch(title, body, searchStr) {
    return title.indexOf(searchStr) === -1 && body.indexOf(searchStr) === -1;
  }

});
