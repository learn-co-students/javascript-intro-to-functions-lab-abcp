function shout(string) {
  return string.toUpperCase();
}
shout('hello'); //HELLO

function whisper(string){
  return string.toLowerCase();
}
whisper(shout('hello'));// takes HELLO FROM shout function and turns it back to lower case 

function logShout(string) {
  console.log(string.toUpperCase());
}
logShout(whisper(shout('hello')));//takes the lowercase that is output by whisper function and console logs it as uppercase

function logWhisper(string) {
  console.log(string.toLowerCase());
}
logWhisper(shout('hello'));//takes uppercase shout and console logs it as lower case

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()); {
  return("I can\'t hear you!");
} if (string === string.toUpperCase()); {
  return("YES INDEED!");
} if (string === "I love you, Grandma."); {
  return("I love you, too.");
}
}

sayHiToGrandma('hello');
sayHiToGrandma('HELLO');
sayHiToGrandma("I love you, Grandma.");