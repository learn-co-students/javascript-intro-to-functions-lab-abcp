function shout(smallData) 
{
  return smallData.toUpperCase();
}
function whisper(bigData)
{
  return bigData.toLowerCase();
}
function logShout(myString)
{
  console.log(myString.toUpperCase());
}
function logWhisper(myString)
{
  console.log(myString.toLowerCase());
}
function sayHiToGrandma(myString)
{
  let lowVoice = "hello";
  let highVoice = "HELLO";
  let willAlwaysHear = "I love you, Grandma.";
  
  if(myString === lowVoice)
  {
    return "I can't hear you!";
  }
  else if(myString === highVoice)
  {
    return "YES INDEED!";
  }
  else if(myString === willAlwaysHear)
  {
    return "I love you, too.";
  }
  
}