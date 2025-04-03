const http = require('http')
const port = 3000

const server = http.createServer(function(req, res){
    res.write('kosdsdzak')
    res.end()
})

server.listen(port, function(error){
    if(error){
        console.log('Cos nie bangla, blad', error)
    } else {
        console.log('server is leistening on port ' + port)
    }
})



