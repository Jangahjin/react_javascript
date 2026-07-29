function orderFood(food, flag){
  const promise = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    console.log(`${food} 음식 주문`)
    flag === true
        ? resolve(`${food}이 나왔습니다.`) 
        : reject(`${food}이 안 나왔습니다.`); 
    }, 2000); 
  }); 
  return promise; 
} 

//async (비동기식) 함수가 비동기식 함수로 처리, 리턴값을 promise 준다.

async function getData(flag){
  if(flag == true){
    return{
      name: 'zeus',
      age: 30
    };
  }else{
    return new Error('객체가 없습니다.')

  }
}

// 첫 번째 방식 ==
// getData(true).then((result)=>{
//   console.log(result);
// })
// .catch((result)=>{
//   console.log(result);
// });

// 두 번째 방식 ==
console.log("클라이언트 화면입니다.")

async function printData(){
  const result = await getData(true);
  console.log(result)
}
printData();