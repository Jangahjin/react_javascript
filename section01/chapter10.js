// 1. 상수 객체 
const animal = { 
type: "고양이", 
name: "나비", 
color: "black", 
// 메서드 선언
func1(){
  console.log('${this.type}')
},
//익명함수
func2 : function(){
  console.log('${this.type}')
},
//화살표함수 (주위: 화살표함수 안에서 사용되는 this는 윈도우를 가리킨다.)
func3 : () => console.log('${animal.name}'),
}; 

const animal2 = { 
  type: "고양이", 
  name: "나비", 
  color: "black", 
}; 

let animal3 = animal

animal.type="고양이2"
console.log(animal)
console.log(animal2)
console.log(animal3)

// animal = {type: "나비"} 상수변수 다른번지 수정이 안됨.
//animal 객체 안에 있는 property는 수정, 삽입, 삭제, 변경 모두 가능
animal.age = 5
animal.name="윙카르디움 레그드나르도 4세"
animal.color=123456
delete animal["age"]
console.log(animal)
console.log(typeof animal.color)

animal.func1()
animal.func2()
animal.func3()

//괄호표기밥으로 함수 호출
animal["fun1"]()
animal["fun2"]()
animal["fun3"]()