var katzDeliLine = [];
var ticketNumber

function takeANumber(katzDeliLine) {
  katzDeliLine.push(ticketNumber++);
  return "You are number " + ticketNumber + " in line.";
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine) {
  var names = [];
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } 
  else {
    for(var i = 0; i < katzDeliLine.length; i++) {
      names += katzDeliLine[i] + ", ";
    }
    names = names.slice(0, names.length-2);
    //console.log("The line is currently: " + names);
    return "The line is currently: " + names; 
  }
}





