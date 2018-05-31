function checkpass(){
	var pass=/(?=.*[a-z]).{6,}$/;
	return pass.test();
}
function checkpho(str){
	var pho=/(?=.*[0-9]).{10,}$/;
	return pho.test(str);
}


function validation(){  
var name=document.myform.name.value;
var uname=document.myform.username.value;
var password=document.myform.password.value;  
var pon=document.myform.phoneNumber.value;
  
if (name == ""&& uname == ""&&  pon == ""&& password == "")
{
    window.alert("Required all feilds...!!!");
    return false;

    if(password == ""){
    	if(!checkpass()==password){
    		window.alert("The password you are entered is not correct.")
    	}
    	
    	}
    if(pon == ""){
		if(!checkpho()==pon){
			window.alert("Enter 10 numbers.")
			}
		}
  
    else{
	return true;
}
}
}  