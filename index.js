function shout(string){
  return string.toUpperCase()
}

shout('hello')

function whisper(string){
  return string.toLowerCase()
}

whisper('hello')

function logShout(string){
  console.log(string.toUpperCase())
}

logShout()

function logWhisper(string){
  console.log(string.toLowerCase())
}

logWhisper()

function sayHiToGrandma(string){
  if (string.toLowerCase() === string){
  return "I can't hear you!"
} else if (string.toUpperCase() === string) {
  return "YES INDEED!"
}else{ return "I love you, too."
  
}
}

sayHiToGrandma("i love you, grandma.")
sayHiToGranmda("I LOVE YOU, GRANDMA.")
sayHiToGrandma("I love you, Grandma.")
