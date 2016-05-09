$(document).ready(function() {

  $("#new_idea").on("ajax:success", function(e, data, status, xhr){
    addIdeaToPage(xhr.responseJSON.idea, $('.ideas'));
    clearTextFields();
  });

  function renderIdea(idea) {
    return $('<div><h1>' + idea.title + '</h1><p>' + idea.quality +
              ' idea, created on: ' + idea.created_at + '</p><p>' + idea.short_body +'</p></div>').addClass('idea');
  }

  function addIdeaToPage(idea, target) {
    var renderedIdea = renderIdea(idea);
    $(target).prepend(renderedIdea);
  }

  function clearTextFields(){
    $('#idea_title').val('');
    $('#idea_body').val('');
  }
});
