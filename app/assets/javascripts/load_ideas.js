$(document).ready(function(){
  var ideasDiv = $('.ideas');
  getAndShowIdeas();

  function getAndShowIdeas(){
    $.getJSON('/api/v1/ideas', function(d, status, response){
      var ideas = response.responseJSON.ideas;
      ideas.map(function(idea){
        return createElementFromIdea(idea);
      }).forEach(function(idea){
        addIdeaToPage(idea);
      });
    })
  };

  function addIdeaToPage(idea) {
    ideasDiv.append(idea);
  }

});
