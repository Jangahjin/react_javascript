// 스코프
let a = 1; // 전역 스코프 
 
function funcA() { 
  let a = 2; // 지역 스코프 
console.log(a); 
}
funcA();
console.log(a);

//지역함수선언
function fucB(index){
  console.log("지역함수 선언" + index)
}
funcB(10)

// 모든 블럭에 들어있는 변수 선언 다 지역변수이다.
// 매개변수는 다 지역변수이다.

if(true){
  let x =10;
}
// console.log(c) 에러 발생


for(let index = 0; index < 2; index ++){
  let count =1;
  count += index;
}
//console.lof(count) 에러 발생
console.log(index)


//uncB(10) //함수 안에서 선언된 지역함수는 안에서 콜할 수 없다,