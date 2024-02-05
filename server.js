const express = require('express');
const server = express();
server.all('/',(req,res)=>{
  res.send('봇상태 : \n호스팅');
});
function keepAlive(){
  server.listen(3000,()=>{console.log("서버ON")})
}
module.exports = keepAlive;