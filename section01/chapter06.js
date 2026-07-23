// 함수 호이스팅 기능
// 함수 호이스팅은 함수선언문에만 작동이 된다.
// 함수 호이스팅은 함수표현식(익명함스, 화살표함수) 작동 불가

let helloA = function (){
  return "함수표현식에 익명함수입니다."
}
console.log(helloA())
console.log(helloB())

let helloC = ()=> "함수표현식에 화살표함수 입니다"
console.log(helloC())

 function helloB(){
  return "함수선언문 함수 입니다"
 }