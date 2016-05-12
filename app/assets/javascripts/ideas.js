$(document).ready(function() {

  $("#new_idea").on("ajax:success", function(e, data, status, xhr){
    addIdeaToPage(xhr.responseJSON.idea);
    clearTextFields();
  });

  $(".ideas").on("click", ".delete", function(event){
    var id = this.id.replace(/idea-/,'');
    $(this).parent().parent().remove()

    $.ajax({ type: "DELETE",
             url: '/api/v1/ideas/'+id
          });
  });

  function addIdeaToPage(idea) {
    var renderedIdea = createElementFromIdea(idea);
    $('.ideas').prepend(renderedIdea);
  }

  function clearTextFields(){
    $('#idea_title').val('');
    $('#idea_body').val('');
  }
});
