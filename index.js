const http = require("http");


// 서버 생성 및 요청 처리
const server = http.createServer((req,res) => {
    //req : request로 프론트엔드로받은 데이터
    //res : response로 프론트엔드에게 전달하는 응답값

    res.statusCode = 200; //200 상태코드 (정상 의미)
    res.setHeader("Content-Type","text/plain"); //응답 헤더
    res.end("susung"); // 클라이언트에게 응답할 데이터
})

server.listen(8080,() => {
    console.log("Server ON")
});
