function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  let HELLO = string.toUpperCase
  console.log('HELLO')
}

function logWhisper(string) {
  let hello = string.toLowerCase
  console.log ('hello')
}
function sayHiToGrandma(string) {
  if(string.toLowerCase() === string) {
      return "I can't hear you!"
  } else if(string.toUpperCase() === string) {
      return "YES INDEED!"
  } else if(string === "I love you, Grandma.") {
    return "I love you, too."
  }
}
