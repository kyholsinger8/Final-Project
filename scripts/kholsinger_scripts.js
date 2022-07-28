/*

This JavaScript file is for unit 10 homework.
The items that are in UPPERCASE are looking for the values from 
your HTML form.  Please enter the values exactly as you have them on 
the form -- do not change the spelling or the case. 

Please put your name and student id number here:
Name: Kyle Holsinger
LCC ID: 00538167

*/

function fnUnit10() {
	
	var textF01 = document.getElementById("doyoulikecats").value;
	var textF02 = document.getElementById("doyouhaveanycats").value;
	var eml = document.getElementById("email").value;
	var pwd = document.getElementById("password").value;
	var txtArea = document.getElementById("tArea").value;
	var chRadio = "";
	
	var reqRadio = document.getElementsByName("catname");
	for (var i = 0; i < reqRadio.length; i++) {
		if (reqRadio[i].checked) {
			chRadio = reqRadio[i].value;
			break;
		}
	}
	
	var chCheck = "";
	var reqCheck = document.getElementsByName("cbox");
	for (var i = 0; i < reqCheck.length; i++) {
		if (reqCheck[i].checked) {
			chCheck += reqCheck[i].value + ", ";
		}
	}
	chCheck = chCheck.substring(0, chCheck.length - 2);
	
	var sI = document.getElementById("yourfavoritecat").selectedIndex;
	var opt = document.getElementById("yourfavoritecat").options;
	var reqDrop = "Index: " + opt[sI].index + " is " + opt[sI].text;



	var result = "<p>Text field 01 is: <span style='color:red; font-weight:bold'>" + textF01 + "</span></p>";
	result += "<p>Text field 02 is: <span style='color:red; font-weight:bold'>" + textF02 + "</span></p>";
	result += "<p>Email field is: <span style='color:blue; font-weight:bold'>" + eml + "</span></p>";
	result += "<p>Password field is: <span style='text-decoration: line-through; font-weight:bold'>" + pwd + "</span></p>";
	result += "<p>The text area is: <span style='color:blue; font-weight:bold'>" + txtArea + "</span></p>";
	result += "<p>The selected radio button's value is: <span style='color:red; font-weight:bold'>" + chRadio + "</span></p>";
	
	result += "<p>The selected checkboxes value(s) is/are: <span style='color:red; font-weight:bold'>" + chCheck + "</span></p>";

	result += "<p>The selected item in the drop down list is: <span style='color:blue; font-weight:bold'>" + reqDrop + "</span></p>";
	
	document.getElementById("resultP").innerHTML = result;
	
}