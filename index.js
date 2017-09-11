/*
function takeANumber(katzDeliLine, name){

}
*/
function nowServing(line){
  if (line.length === 0){
    console.log("There is nobody waiting to be served!");
  }
  else{
    console.log('Currently serving' + line[0]);
    line.shift();
  }
}
