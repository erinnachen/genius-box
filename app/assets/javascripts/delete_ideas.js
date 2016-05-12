$(document).ready(function() {
  $(".ideas").on("click", ".delete", function(event){
    var id = this.id.replace(/idea-/,'');
    $(this).parent().parent().remove()

    $.ajax({ type: "DELETE",
             url: '/api/v1/ideas/'+id
          });
  });
});
