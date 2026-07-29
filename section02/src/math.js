//math 모듈
//모듈 생성에서 두 개의 멤버함수 생성
export function add(a, b){
  return a + b;
}

export function sub(a, b){
  return a - b;
}

export default function multiply(a, b){
  return a * b;
}

//외부에 add라는 함수와 sub이라는 함수를 전송
// export {add, sub};