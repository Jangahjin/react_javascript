//동기식으로 프로그램 실행
//setTimeout = > 다른 스레드에게 요청함. / 무조건 비동기식 처리 방식
// console.log(1);
//비동기식 처리방식을 요청 (WEB API : 1시간, ()=>{})

//1. 함수선언식
function task(a, b, callback) {
  setTimeout(() => {
    let sum = a + b;
    callback(sum);
  }, 1000);
}
task(10, 20, callback);
function callback(sum) {
  console.log(sum);
}

//랑다식 방식
task(10, 20, (sum) => console.log(sum));

// 2.비동기 방식으로 음식을 주문하는 상황
function orderFood(food, callback) {
  console.log(`서버에 음식을 주문합니다. : ${food}`);
  setTimeout(() => {
    callback(food);
  }, 2000);
}

orderFood(`백숙`, callback);

function callback(food) {
  console.log(`${food} 음식을 완료했습니다.`);
}

// 3. 비동기 방식으로 1단계 : 음식을 차게 요청하는 사항
function coolFood(food, callback) {
  console.log(`스프링부트에 음식을 차게 해주세요. : ${food}`);
  setTimeout(() => {
    callback(food);
  }, 2000);
}

// coolFood("뜨거운 백숙", (food) =>
// console.log(`${food} 차갑게...? 해드렸습니다 손님`),
// );

//4. 비동기 방식 1단계: 음식을 냉동
function freezeFood(food, callback) {
  console.log(`스프링부트에 음식을 냉동 시켜 주세요. : ${food}`);
  setTimeout(() => {
    callback(food);
  }, 2000);
}

// freezeFood("차가운 백숙", (food) =>
// console.log(`${food} 냉동 시켜 드렸습니다. 손님`),
// );

//5. 비동기방식 2딘계 백숙 -> 뜨거운 백숙 -> 차가운 백숙
orderFood("백숙", (food) => {
  console.log(`${food} 음식을 완료했습니다.`);
  coolFood("뜨거운", (food) =>
    console.log(`${food} 차갑게...? 해드렸습니다 손님`),
  );
});

//6. 비동기 방식 3단계 백숙 -> 뜨거운 백숙 -> 차가운 백숙 -> 냉동 백숙
orderFood("백숙", (food) => {
  console.log(`${food} 음식을 완료했습니다.`);
  coolFood("뜨거운 " + food, (cooledFood) => {
    console.log(`${cooledFood} 차갑게...? 해드렸습니다 손님`);
    freezeFood("차가운 백숙", (frozenFood) => {
      console.log(`${frozenFood} 냉동 시켜 드렸습니다. 손님`);
    });
  });
});
