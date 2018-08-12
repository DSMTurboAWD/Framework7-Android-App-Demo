$(document).ready(function() {
        var url = "http://localhost:81/Authentication/auth.php";

        $("#loginButton").click(function(){
            var email= $.trim($("#email").val());
            var password= $.trim($("#password").val());
            $("#status").text("Authenticating...");
            var loginString ="email="+email+"&password="+password+"&login=";
            $.ajax({
                type: "POST",crossDomain: true, cache: false,
                url: url,
                data: loginString,
                success: function(data){
                    if(data == "success") {
                        $("#status").text("Login Success..!");
                        localStorage.loginstatus = "true";
                        window.location.href = "index.html";
                    }
                    else if(data == "error")
                    {
                        $("#status").text("Login Failed..!");
                    }
                }
            });
        });
        $("#registerButton").click(function(){
            var email= $.trim($("#email").val());
            var password= $.trim($("#password").val());
            $("#status").text("Creating New Account...");
            var dataString="email="+email+"&password="+password+"&register=";
            $.ajax({
                type: "POST",crossDomain: true, cache: false,
                url: url,
                data: dataString,
                success: function(data){
                    if(data == "success")
                        $("#status").text("Registered success");
                    else if( data == "exist")
                        $("#status").text("Account is already there");
                    else if(data == "error")
                        $("#status").text("Register Failed");
                }
            });
        });
    });