console http = request("http")



const server = http.createServer(funcation(request, response){
response.end("Hello world")
})

server.listen(3000, funcation(){
	console.log("server is running")
})