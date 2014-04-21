$(document).ready(function(){
	var may3 = new Date();
	may3.setFullYear(2014,5,3);
	var may10 = new Date();
	may10.setFullYear(2014,5,10);
	var today = new Date();
	
	if (may3 > today )
	{
		$('#collapseOne').addClass('in');
	} 
	else if(may3 < today && may10 > today)
	{
		$('#collapseTwo').addClass('in');
	}
	else
	{
		$('collapseThree').addClass('in');
	}
});