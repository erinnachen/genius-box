function createElementFromIdea(idea) {
  var newIdea =
  $('<div class="idea"><h1><div class="idea-title" contentEditable="true">' +
    idea.title + '</div>   '+
    '<button type="button" class="btn btn-default upvote" id="idea-upvote-'+
    idea.id+
    '"><span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span></button>'+
    '   <button type="button" class="btn btn-default downvote" id="idea-downvote-'+
    idea.id+'"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>'+
    '   <button type="button" class="btn btn-danger delete" id="idea-'+
    idea.id +'"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button></h1>'+
    '<p>'+ idea.quality +' idea</p>'+
    '<p>created on: '+idea.created_at+'</p>'+
    '<p class="idea-body idea-'+idea.id+'" contentEditable="true">'+
    idea.short_body+'</p></div>');
  return newIdea;
};
