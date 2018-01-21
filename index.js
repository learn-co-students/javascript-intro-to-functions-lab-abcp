function shout(string) {
  return string.toUpperCase()
  
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase());
}
function logWhisper(string) {
  console.log(string.toLowerCase());
}
function sayHiToGrandma(string) {
  var words = string
  if (words.toLowerCase() === words)
  return "I can't hear you!"
  if (words.toUpperCase() === words)
  return "YES INDEED!"
  if(words === "I love you, Grandma.")
  return "I love you, too."
}