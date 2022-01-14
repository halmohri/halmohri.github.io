
function newlines(html){
	try{
		do {
			html=html.replace('\n','<br>');
			var res =html.search('\n');
		}while (res > -1); 
	}
	catch (ex){
		console.log(ex);
	}	
	return html; 	
}

function textproperties(html,symbol,tagopen,tagclose){
	try{
		do {
			html=html.replace(symbol,tagopen);
			html=html.replace(symbol,tagclose);	
			var res =html.search('['+symbol+']');
		}while (res > -1); 
	}
	catch (ex){
		console.log(ex);
	}
	return html; 
}

function boldtext(html){
	html = textproperties(html,'**','<b>','</b>');
	return html; 
}

function italictext(html){
	html = textproperties(html,'_','<i>','</i>');
	return html; 
}

function parsediv(divid){
	var thediv = $( "div."+divid ).html();
	thediv = boldtext(thediv);
	thediv = italictext(thediv); 
	thediv = newlines(thediv); 
	 
	$( "div."+divid ).html(thediv);
}