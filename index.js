//ONE
function shout(string)
{
return string.toUpperCase()
}

//TWO
function whisper(string)
{
  return string.toLowerCase()
}

//THREE
function logShout(string)
{
  console.log("HELLO")
}

//FOUR
function logWhisper(string)
{
  console.log(string.toLowerCase())
}

//FIVE, SIX, AND SEVEN
function sayHiToGrandma(string)
{
  if (string.toLowerCase() === string)
    {
  return "I can't hear you!";
    }
  else if (string.toUpperCase() === string)
  {
    return "YES INDEED!";
  }
  else if (string === "I love you, Grandma.") 
  {
    return "I love you, too.";
  }
}