function QuoteService(){
	// var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'https://quotesondesign.com/api/3.0/api-3.0.json/';
	//var apiUrl = url + encodeURIComponent(url2);
	var apiUrl = url2;

	//Do Not Edit above we have to go through the bcw-getter to access this api (BCW restraint)
	
	this.getQuote =  function(cb){
		$.get(apiUrl, function(res){
			// res = JSON.parse(res)

			cb(res)
		})
	}
}
