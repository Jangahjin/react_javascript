//JSON.stringfy => JSON 방식을 String로 변화할 거야.

let object1 = { name: "제우스", age: 40 };
let object2 = { name: "제우스", age: 40 };
let object3 = object1;

if (object1 === object2) {
  console.log("얕은 복사");
} else {
  console.log("깊은 복사");
}

console.log(JSON.stringfy(object1) + "문자열");

if (JSON.stringfy(object1) === JSON.stringfy(object2)) {
  console.log("같은 내용");
} else {
  console.log("다른 내용");
}
