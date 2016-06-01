
const getUrl = function (url, callback){
setTimeout(()=>{
			callback("Ok done doing work...");
}, 3000);
}

function fetchData(url){
	return new Promise(function(resolve, reject){
			getUrl(url, function(result){
      	if(result) {
        	resolve(result)
        } else {
        reject("thhere was a error, no result!");
        }
      })
		});
}
fetchData("http:/www.google.com").then((result)=>{
	console.log(result)
},(error)=>{
	console.log(error)
});