function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  string=string.toUpperCase()
  console.log(string)
}

function logWhisper(string){
  string=string.toLowerCase()
  console.log(string)
}

function sayHiToGrandma(string){
  if(string.toLowerCase === string)
  {
    string = "I can't hear you"
  }

  if(string.toUpperCase === string)
  {
    string = "YES INDEED!"
  }
  return string
}
