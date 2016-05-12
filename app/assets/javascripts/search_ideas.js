$(document).ready(function(){
  $( "#idea_search" ).keydown(function(e){
    if (e.keyCode === 13) {
      e.preventDefault();
      return;
    }
  })

  $( "#idea_search" ).keyup(function(e) {
    $('.idea').each(function(){
      var searchStr = $('#idea_search').val().toLowerCase();
      var title = this.children[0].children[0].innerHTML.toLowerCase();
      var body = this.children[5].innerHTML.toLowerCase();
      if (searchMatch(title, body, searchStr)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  function searchMatch(title, body, searchStr) {
    return title.indexOf(searchStr) !== -1 || body.indexOf(searchStr) !== -1;
  }

});
