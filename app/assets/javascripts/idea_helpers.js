function createElementFromIdea(idea) {
  var newIdea =
  $('<div class="idea"><h1><div class="idea-title idea-'+idea.id+'" contentEditable="true">' +
    idea.title + '</div>   '+
    '<button type="button" class="btn btn-default upvote" id="idea-upvote-'+
    idea.id+
    '"><span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span></button>'+
    '   <button type="button" class="btn btn-default downvote" id="idea-downvote-'+
    idea.id+'"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></button>'+
    '   <button type="button" class="btn btn-danger delete" id="idea-'+
    idea.id +'"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button></h1>'+
    '<p><div class="idea-quality">'+ idea.quality +'</div> idea</p>'+
    '<p>created on: '+idea.created_at+'</p>'+
    '<p class="idea-body idea-'+idea.id+'" contentEditable="true">'+
    idea.short_body+'</p></div>');
  return newIdea;
};

function qualityIndex(quality, action) {
  var index = qualities()[quality]
  if (action === "upvote") {
    if (index === 2) { return 2; }
    return index+1;
  } else if (action === "downvote") {
    if (index === 0) { return 0; }
    return index-1;
  }
};

function qualities(){
  return {"meh": 0, "plausible": 1, "genius": 2};
};

function qualitybyIndex(index){
  var quals = qualities();
  for( var key in quals ) {
    if( quals.hasOwnProperty( key ) ) {
      if( quals[ key ] === index ){
        return key;
      }
    }
  }
};
