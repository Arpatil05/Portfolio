var attempt = 3;
var UserDetails={
    "Password":"123456"
}


function verifyPassword(){
    var error = document.getElementById("leftattempt");
    var password = document.getElementById("password").value;
    if(UserDetails.Password===password){
        document.getElementById("success").innerHTML = "Verified Succesfully";
         
    }else{
        attempt--;
        error.innerHTML ="You Have "+attempt+"left";
        document.getElementById("success").innerHTML ="";
        if(attempt==0){
            password.disabled="true";
            document.querySelector("button").disabled="true";
            error.innerHTML="You are blocked";

            alert("You are blocked try after some time")
        }
        
    }
}