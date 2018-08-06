function QuoteController(){

	var qs = new QuoteService()

	qs.getQuote(function(quote){
		document.getElementById('aQuote').innerText = `${quote.quote} - ${quote.author}`
		
	})


} //end bracket