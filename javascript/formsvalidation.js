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




function quiz1validation(form){
    //quiz 1.1
        if(form.elements[1].checked){
            alert("Correct Quiz 1.1")
            document.getElementById('hello').style.color="green";
            document.getElementById('true1').style.color="red";
        }
        else{
            alert("Incorrect Quiz 1.1")
            document.getElementById('hello').style.color="green";
            document.getElementById('true1').style.color="red";
        }           

    //quiz 1.2 
        if(form.elements[3].checked){
            alert("Correct Quiz 1.2")
            document.getElementById('ans4').style.color="red";
            document.getElementById('ans5').style.color="green";
            document.getElementById('ans6').style.color="red";
        }
        else{
            alert("Incorrect Quiz 1.2")
            document.getElementById('ans4').style.color="red";
            document.getElementById('ans5').style.color="green";
            document.getElementById('ans6').style.color="red";
    }
    //quiz 1.3 
        if(form.elements[5].checked){
            alert("Correct Quiz 1.3")
            document.getElementById('ans7').style.color="green";
            document.getElementById('ans8').style.color="red";
            document.getElementById('ans9').style.color="red";
        }
        else{
            alert("Incorrect Quiz 1.3")
            document.getElementById('ans7').style.color="green";
            document.getElementById('ans8').style.color="red";
            document.getElementById('ans9').style.color="red";
        }
}

    function quiz2validation(form){
        //quiz 2.1 
        if(form.elements[1].checked){
            alert("Correct Quiz 2.1")
            document.getElementById('ans10').style.color="green";
            document.getElementById('ans11').style.color="red";
        }
        else{
            alert("Incorrect Quiz 2.1")
            document.getElementById('ans10').style.color="green";
            document.getElementById('ans11').style.color="red";
        }
        //quiz 2.2
        if(form.elements[2].checked){
            alert("Correct Quiz 2.2")
            document.getElementById('ans12').style.color="green";
            document.getElementById('ans13').style.color="red";
            document.getElementById('ans14').style.color="red";
        }
        else{
            alert("Incorrect Quiz 2.2")
            document.getElementById('ans12').style.color="green";
            document.getElementById('ans13').style.color="red";
            document.getElementById('ans14').style.color="red";
        }
        //quiz 2.3
        if(form.elements[6].checked){
            alert("Correct Quiz 2.3")
            document.getElementById('ans15').style.color="red";
            document.getElementById('ans16').style.color="green";
            document.getElementById('ans17').style.color="red";
        }
        else{
            alert("Incorrect Quiz 2.3")
            document.getElementById('ans15').style.color="red";
            document.getElementById('ans16').style.color="green";
            document.getElementById('ans17').style.color="red";
        }
}

function quiz3validation(form){
    //quiz 3.1
        if(form.elements[0].checked){
            alert("Correct Quiz 3.1")
            document.getElementById('ans18').style.color="green";
            document.getElementById('ans19').style.color="red";
        }
        else{
            alert("Incorrect Quiz 3.1")
            document.getElementById('ans18').style.color="green";
            document.getElementById('ans19').style.color="red";
    }

    //quiz 3.2
        if(form.elements[2].checked){
            alert("Correct Quiz 3.2")
            document.getElementById('ans20').style.color="green";
            document.getElementById('ans21').style.color="red";
            document.getElementById('ans22').style.color="red";
    }
        else{
        alert("Incorrect Quiz 3.2")
            document.getElementById('ans20').style.color="green";
            document.getElementById('ans21').style.color="red";
            document.getElementById('ans22').style.color="red";
    }
    //quiz 3.3 
        if(form.elements[5].checked){
            alert("Correct Quiz 3.3")
            document.getElementById('ans23').style.color="green";
            document.getElementById('ans24').style.color="red";
            document.getElementById('ans25').style.color="red";
    }
    else{
            alert("Incorrect Quiz 3.3")
            document.getElementById('ans23').style.color="green";
            document.getElementById('ans24').style.color="red";
            document.getElementById('ans25').style.color="red";
    }
}
// 
function removedecor(form){
    document.getElementById('hello').style.color="white";
    document.getElementById('true1').style.color="white";
    document.getElementById("ans4").style.color = "white";
    document.getElementById("ans5").style.color = "white";
    document.getElementById("ans6").style.color = "white";
    document.getElementById("ans7").style.color = "white";
    document.getElementById("ans8").style.color = "white";
    document.getElementById("ans9").style.color = "white";
    document.getElementById("ans10").style.color = "white";
    document.getElementById("ans11").style.color = "white";
    document.getElementById("ans12").style.color = "white";
    document.getElementById("ans13").style.color = "white";
    document.getElementById("ans14").style.color = "white";
    document.getElementById("ans15").style.color = "white";
    document.getElementById("ans16").style.color = "white";
    document.getElementById("ans17").style.color = "white";
    document.getElementById("ans18").style.color = "white";
    document.getElementById("ans19").style.color = "white";
    document.getElementById("ans20").style.color = "white";
    document.getElementById("ans21").style.color = "white";
    document.getElementById("ans22").style.color = "white";
    document.getElementById("ans23").style.color = "white";
    document.getElementById("ans24").style.color = "white";
    document.getElementById("ans25").style.color = "white";
}