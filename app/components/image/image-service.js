function ImageService() {
//	var url = '//bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	// var apiUrl = url + encodeURIComponent(url2)
	var apiUrl = url2

	this.getImage = function (cb) {
		// ^^^^^^^ How do you call this function?
		return $.get(apiUrl, function (res) {
		//	res = JSON.parse(res)

			cb(res)
		})
	}

    //section that puts a clock on website.
	var tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
	var tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
	
	function GetClock(){
	var d=new Date();
	var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate();
	var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;
	
	if(nhour==0){ap=" AM";nhour=12;}
	else if(nhour<12){ap=" AM";}
	else if(nhour==12){ap=" PM";}
	else if(nhour>12){ap=" PM";nhour-=12;}
	
	if(nmin<=9) nmin="0"+nmin;
	if(nsec<=9) nsec="0"+nsec;

	document.getElementById('clockbox').innerHTML=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+" "+nhour+":"+nmin+"";
}

window.onload=function(){
GetClock();
setInterval(GetClock,5000);
}


} //end tag
