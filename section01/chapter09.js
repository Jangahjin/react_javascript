//객체생성
let obj1 = new Object(); //객체생성자
let obj2 = {}            //객체 리터널

// 2. 객체 프로퍼피
let person ={
  name : "홍길동",
  age : 30,
  gender : false,
  extra : {
    ext1 : 10,
    ext2 : "str",
    ext2 : false
  },
  extra2 : function (){
    console.log(this.age)
  },
  extra4 : ()=>{},
  extra3 : [1,2,3,4,5],
  "like cat" : true,
}
//객체 프로퍼티 접근 방법
console.log(person.age)
console.log(person["age"])
console.log(person['age'])
console.log(person.extra.ext1)
console.log(person.extra["ext1"])
console.log(person.extra['exit1'])

//"like cat" : true
console.log(person["like cat"])

//  extra3 : [1,2,3,4,5]
console.log(person.extra3[0])
console.log(person.extra3[1])

// extra2 : function (){},
person.extra2()
// extra4 : ()=>{},
person.extra4()

//객체 property setter
person.name = "케로로"
person["name"] = "타마마"
console.log(person)

//객체 property 삭제
delete person.age
// delete person["age"]
console.log(person)

// 객체 속에 property가 존재하는지 확인 (in) 값: true
let result1 = "name" in person
console.log(result1)

// 객체 속에 property 추가
person.address = "경기도 성남시"
console.log(person)
