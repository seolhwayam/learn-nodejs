const http = require("http");
const fs = require("fs"); //파일시스템 모듈(html파일 읽기 위함)
const path = require("path"); // 경로처리 위한 모듈

// 서버 생성 및 요청 처리
const server = http.createServer((req,res) => {
    //req : request로 프론트엔드로받은 데이터
    //res : response로 프론트엔드에게 전달하는 응답값
    /*
    res.statusCode = 200; //200 상태코드 (정상 의미)
    res.setHeader("Content-Type","text/plain"); //응답 헤더
    res.end("susung"); // 클라이언트에게 응답할 데이터
    */

    //if (조건문) -> {TRUE시 실행로직}
    //1. GET  2.POST  3. PUT  4. DELETE
    // == : 값이 같은지 비교
    // === : 값+타입 같은지 비교
    if (req.method === "GET") {
        if (req.url ==='/') {
            //index.html  응답
            fs.readFile(path.join(__dirname,"index.html"),'utf-8', //dirname = 현재 있는 경로
            (err,data) => {
                if(err) {
                    res.statusCode = 500;
                    res.end("Error!");
                }else{
                    res.statusCode = 200;
                    res.setHeader("Content-Type","text/html");
                    res.end(data); //html파일을 반환
                }
            }) 
        }else if (req.url ==='/about') {
            //about.html  응답
              //index.html  응답
            fs.readFile(path.join(__dirname,"about.html"),'utf-8', //dirname = 현재 있는 경로
            (err,data) => {
                if(err) {
                    res.statusCode = 500;
                    res.end("Error!");
                }else{
                    res.statusCode = 200;
                    res.setHeader("Content-Type","text/html");
                    res.end(data); //html파일을 반환
                }
            }) 
        }else {
            //contact.html  응답
             fs.readFile(path.join(__dirname,"contact.html"),'utf-8', //dirname = 현재 있는 경로
            (err,data) => {
                if(err) {
                    res.statusCode = 500;
                    res.end("Error!");
                }else{
                    res.statusCode = 200;
                    res.setHeader("Content-Type","text/html");
                    res.end(data); //html파일을 반환
                }
            }) 
        }
    }
})

server.listen(8080,() => {
    console.log("Server ON");
    console.log(__dirname);

});

// 정적파일 서빙
// index.html , about.html , contact.html
