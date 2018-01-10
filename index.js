function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var const1 = "I love you, Grandma."
  var resp1 = "I can\'t hear you!"
  var resp2 = "YES INDEED!"
  var resp3 = "I love you, too."
  if (string == string.toLowerCase()) {
    return resp1
  } else if (string == string.toUpperCase()) {
    return resp2
  } else if (string == const1) {
    return resp3
  }
}