function validate_required(field,alerttxt)
{
with (field)
  {
  if (value==null||value=="")
    {alert(alerttxt);return false}
  else {return true}
  }
}


function validate_equal(id, idConfirm, alerttxt)
{
	var input = document.getElementById(id).value;
	var inputConfirm = document.getElementById(idConfirm).value;
	if(inputConfirm != input)
		{alert(alerttxt);return false;}
	else{return true;}
}

function validate_email(field,alerttxt)
{
	with (field)
	{
		apos=value.indexOf("@");
		dotpos=value.lastIndexOf(".");
		if (apos<1||dotpos-apos<2) 
  			{alert(alerttxt);return false}
		else {return true;}
	}
}

function isNumber( s ){   
var regu = "^[0-9]+$"; 
var re = new RegExp(regu); 
if (s.search(re) != -1) { 
return true; 
} else { 
return false; 
} 
} 

function validate_date(mydate){
  var regu = "^[0-9\-]+$"; 
  var re = new RegExp(regu); 
  if (re.test(mydate)) { 
  return true; 
  }
  else{ 
  return false; 
  }
}

function validate_birth(field, alerttxt)
{
  var valid = true;
  //alert("validate_birth here");
  with(field)
  {
    if(false == validate_date(value)){
      alert("date false!!");
      valid = false;
    };
    var labelpos1 = value.indexOf("-");
    if(-1 == labelpos1 )valid = false;
    var labelpos2 = value.indexOf("-", labelpos1 + 1);
    if (-1 == labelpos2) valid = false;
    var year = value.substring(0, labelpos1);
    var month = value.substring(labelpos1 + 1, labelpos2);
    var day = value.substring(labelpos2 + 1);
    alert(year + " month " + month + " day " + day);
    if(!isNumber(year)||year>"2100" || year< "1800") valid = false; 
    if(!isNumber(month)||month>12 || month< 1) valid = false;
    if(day>getMaxDay(year,month) || day< "01") valid = false;

    var myDate = new Date();
    if(year > myDate.getFullYear() && month > (myDate.getMonth()+1)
            && day > myDate.getDate())
      {valid = false;
        alert("1111111");}
    alert(valid);
    
  }
}

function getMaxDay(year,month) { 
if(month==4||month==6||month==9||month==11) 
return "30"; 
if(month==2) 
if(year%4==0&&year%100!=0 || year%400==0) 
return "29"; 
else 
return "28"; 
return "31"; 
} 

function validate_form(thisform)
{
with (thisform)
  {
  // if (validate_required(email,"邮箱不能为空 ")==false)
  //   {email.focus();return false}

  // if (validate_required(fullName,"姓名不能为空 ")==false)
  // 	{fullName.focus();return false}

  // if (validate_required(password,"密码不能为空")==false)
  // 	{password.focus();return false}

  // if (validate_required(passwordConfirm,"确认密码不能为空")==false)
  // 	{passwordConfirm.focus();return false}

  // if(validate_equal("password", "passwordConfirm", "密码输入不一致  ") == false)
  // {
  // 	document.getElementById("password").value = "";
  // 	document.getElementById("passwordConfirm").value = "";
  // 	password.focus();return false;
  // }

  // if (validate_email(email,"邮箱格式不正确 ")==false)
  // {email.focus();return false}
    if(validate_birth(birthday, "生日输入错误") == false){
    birthday.focus();return false;
  }
  }

}