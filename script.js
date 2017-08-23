// Minified: only 160 bytes!
var TiltAnimation = function() {
  
  var
    mouseX,
    mouseY;

  var _init = function() {
    mouseX    = 0;
    mouseY    = 0;


    _addEventHandlers();    
  }
  
  var _addEventHandlers = function() {
    window.addEventListener('mousemove', _getMousePos, false);
    if (window.DeviceMotionEvent != undefined) {
      window.addEventListener('devicemotion', _accelerometerUpdate, false);
    }
  }
 
  var _accelerometerUpdate = function(e) {
    // http://stackoverflow.com/questions/4474508/access-accelerometer-via-javascript-in-android
    var aX = event.accelerationIncludingGravity.x*1;
    var aY = event.accelerationIncludingGravity.y*1;
    var aZ = event.accelerationIncludingGravity.z*1;
    //The following two lines are just to calculate a
    // tilt. Not really needed. 
    var xPosition = Math.atan2(aY, aZ) * 20;
    var yPosition = Math.atan2(aX, aZ) * 20;
    
    xPosition = Math.round(xPosition * 1000) / 1000;
    yPosition = Math.round(yPosition * 1000) / 1000;
    
    _animatemobile(yPosition, xPosition);
    
  }
  
  var _getMousePos = function(e) {
    e = e || window.event;
    
    mouseX = e.pageX;
    mouseY = e.pageY - $(document).scrollTop();
    
    var xPos = (mouseX / window.innerWidth) - 0.5;
    var yPos = (mouseY / window.innerHeight) - 0.5;
    var rotationYValue = 5 * xPos;
    var rotationXValue = 5 * yPos;
    
    _animate(rotationYValue,rotationXValue);
  }
  
  var _animate = function(rotationYValue, rotationXValue) {
    TweenLite.to($('.albumart'), 0.6, { rotationY:rotationYValue, rotationX:rotationXValue, ease:Power1.easeOut, transformPerspective:100, transformOrigin:"center" });
  }
  var _animatemobile = function(rotationYValue, rotationXValue) {
    TweenLite.to($('.albumart'), 0.6, { rotationY:rotationYValue, rotationX:rotationXValue, ease:Power1.easeOut, transformPerspective:900, transformOrigin:"center" });
  }
  
  return {
    init: _init
  }
}();

TiltAnimation.init();