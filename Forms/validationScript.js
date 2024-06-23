let inputField = document.getElementById("inputField");
let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function(e)
{
	let regex = /^[a-zA-Z0-9]*$/;
	
	if(!regex.test(inputField.value) || inputField.value === "")
	{
		alert("Error: Input is not alphanumeric!");
		e.preventDefault();
	}
	
	else
	{
		confirm("Input Submitted!");
	}
});