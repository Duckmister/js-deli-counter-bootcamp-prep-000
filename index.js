
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return katzDeliLine.length;
}

function nowServing(line){
  if (line.length === 0){
    console.log("There is nobody waiting to be served!");
  }
  else{
    console.log('Currently serving' + line[0]);
    line.shift();
  }
}
