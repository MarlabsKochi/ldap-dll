$(document).ready(function(){
  $('#discourse-modal').on('shown.bs.modal', function(){
    if($("#discourse-modal").find("#login-form").length !== 0){
      $("#discourse-modal").attr("data-backdrop", "static");
      $("#discourse-modal").removeClass("ember-view");
      $("#discourse-modal").find("*").removeClass("ember-view");
      $( ".modal-footer" ).find( "button" ).removeAttr("data-ember-action");
      $("#login-buttons").css("display", "none");
      $("#forgot-password-link").css("display", "none");
      $("#login-account-name").unbind().keyup(function(e){
        if (e.keyCode === 13){
          submitLoginForm();
        }
      });
      $("#login-account-password").unbind().keyup(function(e){
        if (e.keyCode === 13){
          submitLoginForm();
        }
      });
    };
  })

  $(document).on('click',function(event, loginModal){
    if($(event.currentTarget.activeElement).find("i").hasClass("fa fa-unlock") && $(event.currentTarget.activeElement).text().trim() === "Log In"){
      submitLoginForm();
    }
  })

  function submitLoginForm(){
    $("#modal-alert").addClass("alert alert-info").text("Please wait..").css("display", "block")
    var userName = $("#login-account-name");
    var password =  $("#login-account-password");
    hideLoginElements();
      $.ajax({
        'url' : '/auth/ldap/callback',
        'type' : 'post',
        'data' :{username : userName.val(), 
                 password : password.val()},
        'success' : function(data, textStatus, xhr) { 
          $("#modal-alert").text("Success!.Redirecting..");
          location.reload();          
        },
        'error' : function(request,error)
        {
          showLoginElements();
          $("#modal-alert").removeClass("alert-info").addClass("alert-error").text("Incorrect Username or Password");
        }
    });
  }

  function hideLoginElements(){
    $(".modal-footer").hide();
    $(".modal-header").hide();
    $("#login-form").hide();
  }

  function showLoginElements(){
    $(".modal-footer").show();
    $(".modal-header").show();
    $("#login-form").show();
  }
 
});