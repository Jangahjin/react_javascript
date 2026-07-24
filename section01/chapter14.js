//배열의 내장함수 forEach
const arr = [1,2,3,4]
const newArr =[]

// for (const e of arr) {
//   console.log(e);
//   newArr.push(e * 2);
// }

// 2. forEach 메서드
arr.forEach((e) => {
  console.log(e);
  newArr.push(e * 2);
});
console.log(newArr);

console.log("=========================")
// let newArr2 = arr.map((e)=>e*2)
// let newArr2 = arr.map((e)=>(e%2 === 0)?(e*2):(e*3)) //삼항연산자 ver
//2번째, 배열의 배정함수 map => 새로운 계산된 내용을 배열로 리턴하기
let newArr2 = arr.map((e)=> { return (e%2 === 0)?(e*2):(e*3)})
console.log(newArr2)

//3번째, 배열의 내장함수 includes 배열 속에 원하는 값이 있는지 찾는 프로그램
let Number = 3
let flag = false
arr.forEach((e)=>{
 if(e === Number){
  flag = true
 }
})
console.log(flag)

console.log(arr.includes(Number))

//4번째, 배열에서 찾고자하는 값의 인덱스를 출력 : indexOf
let index = -1
let count = 0
arr.forEach((e)=>{
  if(e === Number){
    index =  count
  }
  count++
})
console.log(index)

console.log(arr.indexOf(Number))

//5번째, 배열에서 찾고자하는 위치를 반환하는 메소드
let index1 = -1
let count1 = 0
arr.forEach((e)=>{
  if(e === Number){
    index1 =  count1
  }
  count1++
})
console.log(index1)

console.log("*********************")
let index2 = arr.findIndex((e)=> e === Number)
console.log(index2)

const arr2 = [
  {color: "red"},
  {color: "blue"},
  {color: "yellow"},
  {color: "white"}
]
let index3 = -1
let count3 = 0
arr2.forEach((e)=>{
  if(e.color === "white"){
   index3 = count3
  }
  count3++
 })
 console.log(index3)
 console.log(arr2[index3])

 let index4 = arr2.findIndex((e)=>{ return e.color === "white"})
 console.log(index4)

 // 6번째, 배열에서 찾고자 하는 객체를 찾아서 해당되는 객체를 리턴
 const arr3 = [
  {color: "red"},
  {color: "blue"},
  {color: "yellow"},
  {color: "white"}
]

let findObject = null
arr3.forEach((e)=>{
if(e.color === "white"){
  findObject = e
}
})
console.log("===================")
console.log(findObject || "찾는 객체가 없음")

const findObject2 = arr3.find((e) => {return e.color === "white"})
console.log(findObject2 || "찾는 객체가 없음");

// 7번째, 배열에서 조건에 맞는 객체를 필터링에서 리턴
let arr4 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
];

const filterArray = []
arr4.forEach((e)=>{
 if(e.hobby === "테니스"){
 filterArray.push(e)
 }
})
console.log(filterArray)

console.log(arr4.filter((e)=>e.hobby === "테니스"))

// 8번째, Map 배열의 모든 요소를 순화하면서 새로운 배열을 생성해서 반환
let arr5 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
];

const nameArray =[]
arr5.forEach((e, index, arr)=>{
// nameArray.push({ ...e, no: `${index}` })
nameArray.push(e.hobby)
})
console.log(nameArray)

// console.log(arr5.map((e)=> e.hobby))
console.log(arr5.map((e)=>{
let newObject = []
newObject.hobby = e.hobby
return newObject
}))

console.log(arr5.map((e)=>{ return {hobby: e.hobby}}))

// 9번째, 배열 slice
let arr6 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
{ name: "홍길동", hobby: "독서" }, 
{ name: "홍길동1", hobby: "독서1" },
{ name: "홍길동2", hobby: "독서2" },
{ name: "홍길동3", hobby: "독서3" },
{ name: "홍길동4", hobby: "독서4" },
];

const sliceArray = arr6.slice(0, 3)
console.log(sliceArray)

// 10번째, 배열 붙이는 방법 : concat
let arr7 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
];

let arr8 = [ 
{ name: "구길동", hobby: "테니스" }, 
{ name: "저길동", hobby: "테니스" }, 
];

const concatArray = arr7.concat(arr8);
console.log(concatArray)

// 11번째, 배열 정렬 sort
let arr9 = ["나","가","라"]
// arr9.sort();
const sortArray = arr9.toSorted();
const sortArray2 = arr9.toSorted().reverse();
console.log(arr9)
console.log(sortArray)
console.log(sortArray2)

//숫자 배열을 정렬할 때에는 주의
let arr10 = [0,1,2,3,10,30,20]
arr10.sort()
console.log(arr10)

arr10.sort((a,b)=>{
  if(a>b){
    return -1
  }else if(a<b){
    return 1
  }else{
    return 0
  }
})

// 12번째, 배열을 한 개의 문자열로 만든다. join
const arr11 = ["김동진","님","안녕하세요","반가워요"]
const joinString = arr11.join("/")
console.log(joinString)