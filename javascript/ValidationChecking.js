function ValidateLogIn(){
	var un = document.LogIn.UserName.value;  
	var pw = document.LogIn.Password.value;
	
	//Validate Username and Password
	if (pw == " " && pw == null && (pw.length < 8 || un.length > 20)){  
		alert("Password cannot be less than 8 and greater than 20");  
		return false;  
	} else if (un == " " && un == null && (un.length < 6 || un.length > 10)){  
		alert("Username cannot be less than 6 and greater than 10");  
		return false;  
	}
}

function ValidateSignUp(){
	var fn = document.SignUp.FName.value;  
	var ln = document.SignUp.LName.value;
	var un = document.SignUp.UserName.value;  
	var pw = document.SignUp.Password.value;
	var ed = document.SignUp.EAdd.value;
	
	//Validate FirstName and LastName
	if (fn == "" && fn == null){  
		alert("First name cannot be blank");  
		return false;  
	} else if (ln == "" && ln == null){  
		alert("Last name cannot be blank");  
		return false;  
	}else if (!/^([a-zA-Z])+$/.test(fn)){  
		alert("First name cannot contain numbers");  
		return false;  
	}else if (!/^([a-zA-Z])+$/.test(ln)){  
		alert("Last name cannot contain numbers");  
		return false;  
	}
	
	//Validate Username and Password
	if (pw == "" && pw == null && (pw.length <= 7 || pw.length >= 19)){  
		alert("Password cannot be less than 8 and greater than 20");  
		return false;  
	} else if (un == "" && un == null && (un.length <= 5 || un.length >= 11)){  
		alert("Username cannot be less than 6 and greater than 10");  
		return false;  
	}else {
		open("../html/homepage.html");
		alert("Congratulations on signing up " + fn + "! Please confirm your email address.");
		return true;
	}
	
	//Validate email address
	if (ed == "" && ed == null){
		alert("Email address cannot be blank");  
		return false;  
	}
}