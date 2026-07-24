//단락평가
function returnFalse(){
  console.log("false 함수")
  return false
}

function returnTrue(){
  console.log("true 함수")
  return true
}

console.log(false && true)
console.log(returnFalse() && returnTrue())
// console.log(returnFalse() || returnTrue())

//단락평가 (자바스크립트가 무엇을 false)
//기본타입: 디폴트값이 false
// 0, 0.0, "", false, underfined, nall, NaN

//단락평가 활용
function printName(person){
  let Name = person && person.Name
  console.log(name || "객체가 존재하지 않음");
}

 printName()
 printName({name: "kdj"})
 let arr = [0,0,0,false,"",null,undefined,NaN, [], {}, ()=>{}, function(){}, function aa(){}]

 for(let index in arr){
  console.log(arr[index])
  printName(arr[index])
 }