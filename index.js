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



const add = (a,b) => {
    return a+b;
}

const minus = (a,b) => {
    return a-b;
}

const introduce = (name,age) => {
    return '안녕하세요' + name + '님. 당신의 나이는 ' +age+'세 입니다.';
}

const orderSandwich = (type) => {
    if (type === 'vegan') {
        return '빵 + 시금치 + 토마토 + 아보카도 + 오이'
    }else{
        return '빵 + 시금치 + 토마토 + 치즈 + 베이컨'
    }
}

const students = [
  { name: "Alice", age: 22, major: "Computer Science" },
  { name: "Bob", age: 21, major: "Mathematics" },
  { name: "Charlie", age: 23, major: "Physics" },
  { name: "David", age: 20, major: "Chemistry" },
  { name: "Eva", age: 22, major: "Biology" }
];

const numbers = [1,2,3,4,5];
const numbers2 = [1,2,3,4,5,6];

const incrementedNumber = (numbers) =>{

    for (var i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i]+1;
    } 
    return numbers;
}

const evenNumbers = (numbers2) =>{
    const evenNumbers = [];
    for (var i = 0; i < numbers2.length; i++) {
        if(numbers2[i] % 2 ==0) {
            evenNumbers.push(numbers2[i])
        }
    } 
    return evenNumbers;
}

const physicsStudent = students.find(students => students.major === 'Physics');

const davidStudent = students.find(students => students.name === 'David');



const main = () => {
    console.log(add(5,3));
    console.log(minus(5,3));
    console.log(introduce('김설화','26'));
    console.log(orderSandwich());
    console.log(orderSandwich('basic'));
    console.log(orderSandwich('vegan'));

    for(let i= 5; i>0; i--) {
        console.log(i);
    }
    
    console.log(incrementedNumber(numbers));
    console.log(evenNumbers(numbers2));

    console.log(physicsStudent);
    console.log(davidStudent);

};


server.listen(8080,() => {
    console.log("Server ON");
    console.log(__dirname);
    main();
});

// 정적파일 서빙
// index.html , about.html , contact.html
