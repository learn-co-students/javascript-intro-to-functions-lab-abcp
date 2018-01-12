let shout = (string) => string.toUpperCase();

let whisper = (string) => string.toLowerCase();

let logShout = (string) => console.log(shout(string));

let logWhisper = (string) => console.log(whisper(string));

function sayHiToGrandma(string){
  if (string === string.toLowerCase()){
    return `I can't hear you!`;
  }
  else if (string === string.toUpperCase()){
    return `YES INDEED!`;
  }
  else if (string === `I love you, Grandma.`){
    return `I love you, too.`;
  }
  else {
    return string;
  }
}
