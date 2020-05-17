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
    $('.hover').mouseon(function(e){
        var hint = $(this).attr('ht');
        $('#hint').css({'left': e.clientX + 10, 'top': e.clientY + 10});
        $('#hint').show().text(hint);
    }).mouseout(function(){
        $('#hint').hide();
    });
});
//hints--------------
//hints for product--------------
/*var modal1 = document.getElementById("modal1");
var btn1 = document.getElementById("btn1");
var span1 = document.getElementById("span1");

btn1.onclick = function () {
modal1.style.display = "block";
}

span1.onclick = function () {
modal1.style.display = "none";
}

window.onclick = function (event) {
if (event.target == modal1) {
modal1.style.display = "none";
}
}*/
//----------------------------
/*$('.header_bar').on('click', function(){
    //e.preventDefault();
    $('.dropout').toggleClass('dropout_active');
})

loginbtn.onclick = function register(login, password){
 var un = document.getElementById("regusername").value;
 var pw = document.getElementById("regpassword").value;
 var rp = document.getElementById("reppassword").value;
 var f = "userdata.txt";

 if(pw === rp){

 writeTextFile(f, un);
 writeTextFile(f, pw);

 function writeTextFile(un){
 var txtFile = new File("userdata.txt")
 txtFile.write(un);
 txtFile.close();
 }
}
else{
    alert("password doesn't match")
}
}*/