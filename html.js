const http = require('htpp')
const { readFile } = require('fs')
const host = '127.0.0.1'
const port = '3000'

const url = ` htpp://${host}:${port} ` 
let conteudo = ''

readFile('index.html',(err,data)=> {
    if(err) throw err
    conteudo = data
})
const server = http.creatServer((req, res)=> {
res.statusCode = 200
res.setHeader('content-type', 'text/plain')
res.end(conteudo)
})
server.listen(port, host, ()=> {
console.log( `Servidor roddando em ${url}` )
})
const start = (process.platform =='darwin'?'open':process.platform == 'win32'?'start':'xdg-open')
require('child_process').exec(estart + ' '+ url)



