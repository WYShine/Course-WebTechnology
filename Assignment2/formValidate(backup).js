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

function validate_length(fieldId, length)
{
	if(getElementById(fieldId).value.length > length)
	{
		return false;
	}
	else return(true);
}

function validate_form(thisform)
{
with (thisform)
  {
  if (validate_required(email,"邮箱不能为空 / Email must be filled out!")==false)
    {email.focus();return false}

  if (validate_required(emailConfirm,"确认邮箱不能为空 / Email must be filled out!")==false)
  	{emailConfirm.focus();return false}

  if(validate_equal("email", "emailConfirm", "邮箱输入不一致 / The Email  you entered are not the same") == false)
  {
  	document.getElementById("email").value = "";
  	document.getElementById("emailConfirm").value = "";
  	email.focus();return false;
  }

  if (validate_required(fullName,"姓名不能为空 / Fullname must be filled out!")==false)
  	{fullName.focus();return false}

  if (validate_required(password,"密码不能为空 / Password must be filled out!")==false)
  	{password.focus();return false}

  if (validate_required(passwordConfirm,"确认密码不能为空 / Password must be filled out!")==false)
  	{passwordConfirm.focus();return false}

  if(validate_equal("password", "passwordConfirm", "密码输入不一致 / The password  you entered are not the same") == false)
  {
  	document.getElementById("password").value = "";
  	document.getElementById("passwordConfirm").value = "";
  	password.focus();return false;
  }

  // if(validate_length("password", 10)==false)
  // {
  // 	alert("密码过长 / The password is too long");
  // }

  if (validate_required(organization,"工作单位不能为空 / Organization must be filled out!")==false)
  	{organization.focus();return false}

  if (validate_required(title,"职位不能为空 / Title must be filled out!")==false)
  	{title.focus();return false}

  if (validate_required(officeTel,"办公电话不能为空 / Office Tel must be filled out!")==false)
  	{officeTel.focus();return false}

  if (validate_required(handphone,"移动电话不能为空 / Handphone must be filled out!")==false)
  	{handphone.focus();return false}

  if (validate_email(email,"邮箱格式不正确 / Not a valid e-mail address!")==false)
  {email.focus();return false}

  }


}