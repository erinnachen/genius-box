$(document).ready(function() {

  $('.ideas').on("click", ".idea-title", function() {
    $(this).addClass("edit-title");
  });

  $('.ideas').on("click", ".idea-body", function() {
    $(this).addClass("edit-body");
  });

  $( ".ideas" ).keydown(function(e) {
    if ($(".edit-title").length > 0 && e.keyCode == 13) {
      event.preventDefault();
      $(".edit-title").blur();
    } else if ($(".edit-body").length > 0 && e.keyCode == 13) {
      event.preventDefault();
      $(".edit-body").blur();
    }
  });

  $( ".ideas" ).focusout(function(){
      editTitleOnPageAndDb();
      editBodyOnPageAndDb();
  });

  function editTitleOnPageAndDb() {
    var title = $(".edit-title")
    if (title.length > 0) {
      var id = $(title).siblings().last()[0].id;
      id = id.replace(/idea-/,'');
      title.removeClass("edit-title");
      updateTitle(title[0].innerText, id);
    }
  }

  function editBodyOnPageAndDb() {
    var title = $(".edit-body");
    if (title.length > 0) {
      var id = $(title).prop("class").match(/\d+/)[0]
      title.removeClass("edit-body");
      updateBody(title[0].innerText, id);
    }
  };

  function updateTitle(title, id) {
    $.ajax({type: "PATCH",
            url: '/api/v1/ideas/'+id,
            data: {'idea': {'title': title}},
            success: console.log("PATCHED THAT BAD ASS")
          });
  };

  function updateBody(body, id) {
    $.ajax({type: "PATCH",
            url: '/api/v1/ideas/'+id,
            data: {'idea': {'body': body}},
            success: console.log("PATCHED That BODY")
          });
  };
});
