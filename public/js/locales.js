$(document).ready((function(){var e=this,o=$(".table-language");o.on("click",".delete-locale-button",(function(e){e.preventDefault(),$(".delete-crud-entry").data("url",$(e.currentTarget).data("url")),$(".modal-confirm-delete").modal("show")})),$(document).on("click",".delete-crud-entry",(function(t){t.preventDefault(),$(".modal-confirm-delete").modal("hide");var a=$(t.currentTarget).data("url");$(e).prop("disabled",!0).addClass("button-loading"),$.ajax({url:a,type:"POST",data:{_method:"DELETE"},success:function(t){t.error?Tec.showError(t.message):(t.data&&(o.find("i[data-locale="+t.data+"]").unwrap(),$(".tooltip").remove()),o.find('a[data-url="'+a+'"]').closest("tr").remove(),Tec.showSuccess(t.message)),$(e).prop("disabled",!1).removeClass("button-loading")},error:function(o){$(e).prop("disabled",!1).removeClass("button-loading"),Tec.handleError(o)}})})),$(document).on("click",".add-locale-form button[type=submit]",(function(e){var t=this;e.preventDefault(),e.stopPropagation(),$(this).prop("disabled",!0).addClass("button-loading"),$.ajax({type:"POST",cache:!1,url:$(this).closest("form").prop("action"),data:new FormData($(this).closest("form")[0]),contentType:!1,processData:!1,success:function(e){e.error?Tec.showError(e.message):(Tec.showSuccess(e.message),o.load(window.location.href+" .table-language > *")),$(t).prop("disabled",!1).removeClass("button-loading")},error:function(e){$(t).prop("disabled",!1).removeClass("button-loading"),Tec.handleError(e)}})}))}));
