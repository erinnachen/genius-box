$(document).ready(function() {

  $('.ideas').on("click", ".idea-title", function() {
    $(this).addClass("edit-idea");
  });

  $('.ideas').on("click", ".idea-body", function() {
    $(this).addClass("edit-idea");
  });

  $( ".ideas" ).keydown(function(e) {
    if ($(".edit-idea").length > 0 && e.keyCode == 13) {
      event.preventDefault();
      $(".edit-idea").blur();
    }
  });

  $( ".ideas" ).focusout(function(){
      editIdea();
  });

  function editIdea() {
    var editing = $(".edit-idea")
    if (editing.length > 0) {
      var id = editing.prop('class').match(/\d+/)[0];
      if (editing.prop('class').indexOf("title") !== -1) {
        updateDb({"title": editing[0].innerText}, id);
      } else {
        updateDb({"body": editing[0].innerText}, id);
      }
      editing.removeClass("edit-idea");
    }
  }

  function updateDb(updateData, id) {
    $.ajax({type: "PATCH",
            url: '/api/v1/ideas/'+id,
            data: {'idea': updateData}
          });
  }
});
