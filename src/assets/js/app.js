$( function() {
	$("#type").selectmenu();
	$("#status").selectmenu();
	$("#categories").selectmenu();
	$("#items").selectmenu();
	$("#infoboxes").selectmenu();
	
	$(".action" ).selectmenu();
});
 

 $(function(){
	$("#datepicker").datepicker();
 });

 $.datepicker.regional['en'] = {
	closeText: 'Close',
	prevText: 'Previous',
	nextText: 'Next',
	currentText: 'Today',
	monthNames: ['January', 'February', 'March','April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
	dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	weekHeader: 'Не',
	dateFormat: 'dd/mm/yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['en']);