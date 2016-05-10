$(document).ready(function() {

  $("#new_idea").on("ajax:success", function(e, data, status, xhr){
    addIdeaToPage(xhr.responseJSON.idea, $('.ideas'));
    clearTextFields();
  });

  $(".ideas").on("click", ".delete", function(event){
    var id = this.id.replace(/idea-/,'');

    $.ajax({ type: "DELETE",
             url: '/api/v1/ideas/'+id,
             success: function() {$('#idea-'+id).parent().parent().remove()}
            });
  });

  $(".ideas").on("click", ".upvote", function(event){
    var id = this.id.replace(/idea-upvote/,'');

    $.ajax({ type: "PATCH",
             url: '/api/v1/ideas/'+id+'/upvote',
             success: function() { update(id) }
            });
  });

  function renderIdea(idea) {
    return $('<div><h1>' + idea.title + '   <button type=\"button\" class=\"btn btn-danger delete\" id=\"idea-'+ idea.id + '\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span></button></h1><p>' + idea.quality +
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
