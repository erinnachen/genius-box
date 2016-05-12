$(document).ready(function() {

  $("#new_idea").on("ajax:success", function(e, data, status, xhr){
    prependIdeaToPage(xhr.responseJSON.idea);
    clearTextFields();
  });

  function prependIdeaToPage(idea) {
    var renderedIdea = createElementFromIdea(idea);
    $('.ideas').prepend(renderedIdea);
  };

  function clearTextFields(){
    $('#idea_title').val('');
    $('#idea_body').val('');
  };
});
