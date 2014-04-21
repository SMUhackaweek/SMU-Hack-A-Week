$(document).ready(function(){
	var may2 = new Date();
	may2.setFullYear(2014,5,2);
	var may10 = new Date();
	may10.setFullYear(2014,5,10);
	var today = new Date();
	
	if (may2 > today)
	{
		$('#collapseOne').addClass('in');
	} 
	else if(may2 < today && may10 > today)
	{
		$('#collapseTwo').addClass('in');
	}
	else
	{
		$('collapseThree').addClass('in');
	}
});