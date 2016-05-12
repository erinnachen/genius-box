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

  $(".ideas").on("click", ".upvote", function(event){
    var id = this.id.replace(/idea-upvote-/,'');

    $.ajax({ type: "PATCH",
             url: '/api/v1/ideas/'+id+'/upvote',
             success: function() { update(id) }
            });
  });

  $(".ideas").on("click", ".downvote", function(event){
    var id = this.id.replace(/idea-downvote-/,'');

    $.ajax({ type: "PATCH",
             url: '/api/v1/ideas/'+id+'/downvote',
             success: function() { update(id) }
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

  function update(id) {
    $.ajax({ type: "GET",
             url: '/api/v1/ideas/'+id,
             success: function(response) {
               var quality = response.idea.quality;
               var id = response.idea.id;
               $('#idea-'+id).parent().parent().find('p')[0].innerHTML = quality + ' idea';
               }
            });
  }

});
