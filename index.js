function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

logShout("Hello")

function logWhisper(string){
  console.log(string.toLowerCase())
}

logWhisper("Hello")

function sayHiToGrandma(string){
  if (string.toLowerCase() === string){
    return `I can't hear you!`
  }else if (string.toUpperCase() === string){
    return `YES INDEED!`
  }else{
    return `I love you, too.`
  }
}
sayHiToGrandma("hello")
