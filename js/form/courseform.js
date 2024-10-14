function select_courseform_func()
{
		var select = document.getElementById("courseidd");
        var typevalue = select.options[select.selectedIndex].value;
		
		
		if (typevalue == 'Parul university' )
		{
			document.getElementById("branchid").innerHTML="<select name='course' id='branchid' class='form-select architects-select validate[required]'><option value='' selected='selected'>Select Course*</option><option value='Online BBA'>Online BBA</option>\
<option value='Online BCA'>Online BCA</option>\
<option value='Online MA'>Online MA</option>\
</select>";
		}
 
else if (typevalue == 'D.Y. Patil')
{
document.getElementById("branchid").innerHTML="<select name='course' id='branchid' class='form-select validate[required]'><option value='' selected='selected'>Select Course*</option><option value='Online BBA'>Online BBA</option>\
<option value='Online MBA'>Online MBA</option>\
<option value='Digital Marketing Certificate'>Digital Marketing Certificate</option>\
<option value='Hospital & Healthcare Certificate'>Hospital & Healthcare Certificate</option>\
</select>";
}

else if (typevalue == 'Symbiosis international')
{
document.getElementById("branchid").innerHTML="<select name='course' id='branchid' class='form-select validate[required]'><option value='' selected='selected'>Select Course*</option><option value='Online MBA'>Online MBA</option>\
<option value='Online MA'>Online MA</option>\
<option value='Online MSC'>Online MSC</option>\
<option value='Online BBA'>Online BBA</option>\
<option value='Online BCA'>Online BCA</option>\
</select>";
}

else if (typevalue == 'Bharati vidyapeeth')
	{
	document.getElementById("branchid").innerHTML="<select name='course' id='branchid' class='form-select validate[required]'><option value='' selected='selected'>Select Course*</option><option value='Online BBA'>Online BBA</option>\
<option value='Online BCA'>Online BCA</option>\
<option value='Online MBA'>Online MBA</option>\
<option value='Online MCA'>Online MCA</option>\
	</select>";
	}



}