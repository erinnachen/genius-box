$(document).ready(function() {

  $(".ideas").on("click", ".upvote", function(event){
    var id = this.id.replace(/idea-upvote-/,'');
    var newQual = updateQualityOnPage(this, "upvote");
    updateQualityOnDB(id, newQual);
  });

  $(".ideas").on("click", ".downvote", function(event){
    var id = this.id.replace(/idea-downvote-/,'');
    var newQual = updateQualityOnPage(this, "downvote");
    updateQualityOnDB(id, newQual);
  });

  function updateQualityOnPage(element, action) {
    var quality = $(element).parent().parent().find('.idea-quality');
    var oldQual = quality.html();
    var newQual = qualitybyIndex(qualityIndex(oldQual, action));
    quality.html(newQual);
    return newQual;
  }

  function updateQualityOnDB(id, newQual) {
    $.ajax({ type: "PATCH",
             url: '/api/v1/ideas/'+id,
             data: {'idea': {'quality': qualities()[newQual]}}
            });
  }

});
