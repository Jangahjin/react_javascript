// 백숙이 완료 되었습니다 -> 차가운 백숙 요청 -> 차가운 백숙 완료 -> 냉동 백숙 완료

function orderFood(food){
  const promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log(`${food} 하나 주세요!`)
      typeof food === "string" 
        ? resolve(`${food}이 나왔습니다.`) 
        : reject(`${food}이 안 나왔습니다.`); 
    }, 2000); 
  }); 
  return promise; 
} 

const promise = orderFood("백숙")

orderFood("뜨거운 백숙")
.then((result)=>{
 console.log(result);
 return orderFood("차가운 백숙")
})
.then((result)=>{
  console.log(result);
 return orderFood("냉동 백숙")
})
.then((result) => {
  console.log(result);
})
.catch((error) => {
  console.log(error);
});

console.log(orderFood);