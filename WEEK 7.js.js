function validateForm(){
    let valid=true;

    let name = document.getElementById("name").ariaValueMax.trim();
    let email = document.getElementById("email").ariaValueMax.trim();
    let password = document.getElementById("password").ariaValueMax.trim();
    let dob = document.getElementById("dob").ariaValueMax.trim();

    var nameError = document.getElementById("nameError").innerText;
    var emailError = document.getElementById("nameError").innerText;
    var passwordError = document.getElementById("nameError").innerText;
    var dobError = document.getElementById("nameError").innerText;

    nameError       ="";
    emailError      ="";
    passwordError   ="";
    dobError        ="";
    

    if(name.length < 3  > 20){
        nameError == "name must be atleast 3 chars"
        valid = false;
    }
        if(name.length > 20){
            nameError == "Name cannot be more than 20 chars"
        valid = false;

        }

        let emailPatten = /^[^]+@[@]+\.[a-z]{2,3}/;
        if(!email.match(emailPatten)){
            emailError="Enter a valid email";
            valid = false;
        }

        if (password.length < 6){
            passwordError= "password must be 6 chars atleast"
            valid = false;       
        }

	if(dob == ""){
            dobError = "Enter a valid dte of birth";
            valid = false;
        
        }
        return valid;
        

    }




}