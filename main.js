/*
$(document).ready(function(){
    // on click Sign In Button checks that username =='admin' and password == 'password'
    $("#login").click(function(){
    if( $("#loginusername").val()=='admin' && $("#loginpassword").val()=='password') {
            $("#first").hide();
            $("#second").append("<p>Hello, admin</p> <br/><input type='button' id='logout' value='Log Out' />");
        }
    else {
        alert("Please try again");
    }

    $("#logout").click(function() {
    $("form")[0].reset();
    $("#first").show();
    $("#second").hide();
});
});

});
*/
//hints--------------
$(document).ready(function(){
    $('.hover').mousemove(function(e){
        var hint = $(this).attr('ht');
        $('#hint').css({'left': e.clientX + 10, 'top': e.clientY + 10});
        $('#hint').show().text(hint);
    }).mouseout(function(){
        $('#hint').hide();
    });
});
//hints--------------