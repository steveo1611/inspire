function ImageController() {
  var imgSer = new ImageService()


  function drawImage(res){
		var loadingdiv = document.getElementById('loading')
		loadingdiv.style.display = "none";
    var imgUrl = "url('"+ res.url + "')" 
    document.body.style.background = imgUrl
  }

  imgSer.getImage(drawImage)

}


