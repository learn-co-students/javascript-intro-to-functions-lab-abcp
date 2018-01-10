// 1 begins
function shout(string){
  return string.toUpperCase()
}
shout('hello')
//2 begins
function whisper(string){
  return string.toLowerCase()
}
whisper('HELLO')
// 3 begins
function logShout(string) {
  console.log(string.toUpperCase())
}
logShout('hello')
//4 begins
function logWhisper(string) {
  console.log(string.toLowerCase())
}
logWhisper('HELLO')
//5 begins
var yap = "I can\'t hear you!"
var yess =  "YES INDEED!"
var got = "I love you, too."
function sayHiToGrandma(string) {
  if (string==string.toLowerCase()){
    return yap }
    else if (string==string.toUpperCase()) {
      return yess }
      else {
        return got }
}
console.log(sayHiToGrandma('hello'))
console.log(sayHiToGrandma('HELLO'))
console.log(sayHiToGrandma("I love you, Grandma."))
