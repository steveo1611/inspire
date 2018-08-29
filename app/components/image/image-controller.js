function ImageController() {
  var imgSer = new ImageService()


  function drawImage(res){

  var imgUrl = "url('"+ res.url + "')" 
  document.body.style.background = imgUrl
  }

  imgSer.getImage(drawImage)

} // end tag


