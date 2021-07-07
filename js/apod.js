function getAPOD()
{
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=4Ec06I7uXQNCgkf3zKc8vgrvd2W9CXdD3ejwCC08");
	xhr.responseType = "json";
	xhr.send();
	xhr.onload = function()
	{
		let responseObject = xhr.response;
		document.getElementById("apod").innerHTML = responseObject.explanation+"<br><br>"+(responseObject.media_type === "video" ? '<iframe width="560" height="315" src='+responseObject.url+' frameborder="0" allow="acclerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' : "<img src="+(responseObject.hdurl !== undefined ? responseObject.hdurl : responseObject.url)+' alt="nasa-apod" width="960" height="auto">');
		try
		{
			if(responseObject.copyright !== undefined) {document.getElementById("copyright").innerHTML = "Copyright: "+responseObject.copyright;}
		} catch(e) {console.log(e);}
	};
}
getAPOD();
