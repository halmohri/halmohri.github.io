
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

function links(html){
	do {
		var res = html.search('[\[].?');
		var addrpos = html.slice(res).search('[\(]');
		var addrends = html.slice(res).search('[\)]');
		var addr = html.slice(res).slice(addrpos+1,addrends); 
		
		html = html.slice(0,res) + '<a href="'+addr+'">' + html.slice(res+1); 
		res = html.search(']');
		html = html.slice(0,res) + '</a>' + html.slice(res+1).slice(html.slice(res+1).search('[\)]')+1);
		res = -1; 
	}while (res > -1); 

	return html; 
}

function parsediv(divid){
	var thediv = $( "div."+divid ).text();
	//$( "div."+divid ).html('');
	// thediv = boldtext(thediv);
	// thediv = italictext(thediv); 
	// thediv = newlines(thediv); 

	//document.getElementById('content').innerHTML = conv.makeHtml(txt);
	//$( "div."+divid ).html(conv.makeHtml(thediv));

}