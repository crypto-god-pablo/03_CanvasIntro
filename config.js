var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : true,
  level : 1
};

var SPACE_SHIP = {
  initialized : false,
  bullets : [],
  latest : {
    x : 50,
    y : 50,
    xx : 5,
    yy : 2
  }
};
var PAB_OBJECT = {
  x : 1,
  y : 1
};

var forward = true;
