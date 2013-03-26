$('body').on("keyup", "textarea,:text",function(evt){
   var txt = $(this).val();   
   var code= evt.keyCode;   
   var regex=/:\u06CC\s|:\u064A\s/g
	
	if(txt.match(regex))	
		$(this).val(txt.replace(regex, ":D "));  
	
});
