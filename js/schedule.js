$(document).ready(function(){
	var may9 = new Date();
	may9.setFullYear(2015,5,9);
	var may16 = new Date();
	may16.setFullYear(2015,5,16);
	var today = new Date();
	
	if (may9 > today )
	{
		$('#collapseOne').addClass('in');
	} 
	else if(may9 < today && may16 > today)
	{
		$('#collapseTwo').addClass('in');
	}
	else
	{
		$('collapseThree').addClass('in');
	}
});
