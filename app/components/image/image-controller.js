function ImageController() {
	//Your ImageService is a global constructor function what can you do here if you new it up?
  var imgSer = new ImageService()


function drawImage(res){

var imgUrl = "url('"+ res.url + "')" 
document.body.style.background = imgUrl
}

imgSer.getImage(drawImage)

} // end tag


