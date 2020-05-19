$( document ).ready(function() {
    $('#genre').hover(function(){
        //e.preventDefault();
        $('.dropout').toggleClass('dropout_active');
    })
});
$( document ).ready(function() {
    $('#pusto').on('click', function(){
        alert('No items found');
    })
});
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
$(function(){
    $("[data-tooltip]").mousemove(function (eventObject) {
        $data_tooltip = $(this).attr("data-tooltip");
        $("#tooltip").html($data_tooltip)
            .css({ 
              "top" : eventObject.pageY + 5,
              "left" : eventObject.pageX + 5
            })
            .show();
        }).mouseout(function () {
          $("#tooltip").hide()
            .html("")
            .css({
                "top" : 0,
                "left" : 0
            });
    });
});

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
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

/*
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