// ------------ Chapter 2 -------------
function checkerBoard(height) {
  for(var i = 1; i <= height; i++) {
    if (i%2 == 0) {
    	console.log('# # # #');
    }
    else {
    	console.log(' # # # #');
    };
};
};
checkerBoard(8);

function checkerBoard(height, width, item) {
  for(var h = 1; h <= height; h++) {
    var line = "";
      if (h%2 == 0) {
      	line += " ";
      }
    for (var w = 1; w<= width; w++) {

      if (w%2 == 0) {
      	line += "item";
      }
      else {
      	line += " "}
    }
    console.log(line)
  }
};

checkerBoard(12, 16, "*");

// ------------ Chapter 3 -------------

function min (x,y) {
  if (x>y) {
  return y;
  }
  else {
  return x;
  }
};

// Your code here.
function isEven(num) {
  num = Math.abs(num);
  if (num == 0) {return true;}
  else if (num == 1) {return false;}
  else {return isEven(num-2);}
};


function countBs (item, B) {
  var count = 0;
  for (var i = 0; i < item.length; i++) {
    if (item.charAt(i) == "B") {count ++}
  }
  return count;
};

function countChar (item, letter) {
  var count = 0;
  for (var i = 0; i < item.length; i++) {
    if (item.charAt(i) == letter) {count ++}
  }
  return count;
};

// ----------------- Chapter 4 -----------
