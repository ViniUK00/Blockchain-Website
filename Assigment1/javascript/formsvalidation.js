function validateForm() {
    var x = document.forms["contactusform"]["fullname"].value; //Validates Full Name field 
    if (x == "") {  //if statement (if the condition is true is going throught)     
      alert("Full Name must be filled out!"); //pops an alert window 
      return false;
    }
    var x= document.forms["contactusform"]["phonenum"].value;
    if (x == "") {                                      //Validates phone number field 
        alert("Phone number must be filled out!");
        return false;}
        var x=document.forms["contactusform"]["phonenum"].value;
        if (isNaN(x)) {                        //Validates phone number field if it is a numeric value
            alert("Phone number must be a numeric value!");
            return false;
    }
    var x=document.forms["contactusform"]["email"].value;
    if (x==""){               //Validates email field
        alert("Email field must be filled out!");
        return false;}
    var x=document.forms["contactusform"]["message"].value;
    if (x==""){                //Validates message field
        alert("Message field must be filled out!")
        return false;
    }
  }



  
  
