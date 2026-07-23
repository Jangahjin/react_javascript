//함수선언문 (호이스팅)
function checkMood(mood, goodCallback, badCallback){
  if(mood == "good"){
// sing()
// dance()
goodCallback()
  }else{
    // cry()
    badCallback()
  }
}

//함수선언문
function sing(){
  console.log("（＾Ｏ＾☆♪ 따바라 한 잔 하기 레드레드")
}
function cry(){
  console.log("꒰ᐢ⸝⸝´ඉᯅඉ⸝⸝ᐢ꒱ 세상: 한 번 고생해봐라")
}
function dance(){
  console.log("〜(꒪꒳꒪)〜 내 팔이 멈추지 않는 건 무엇 때문일까")
}

// checkMood("good", sing, cry);
checkMood("sad", ()=> console.log("（＾Ｏ＾☆♪"),()=> console.log("͡ ͜ʖ ͡ ╭∩╮ 기분 안 좋으니 건들지 마!"))

// 콜백함수 응용 방법
function repeat(count, callback){
  for(let index =0; index < count; index++){
    callback(index);
  }
}

repeat(6, (idx)=> console.log("＼（＾∀＾）人（＾∀＾）ノ 할 수 있어!!!"+idx))
repeat(6, (idx)=> console.log("ヾ(・ω・)メ(・ω・)ノ 야호 ~❥"+idx))