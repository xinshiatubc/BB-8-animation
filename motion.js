////////////////////////////////////////////////////////////
// Keyframe   and   Motion  classes
////////////////////////////////////////////////////////////

class Keyframe {
   constructor(name,dt,avars,time=0.0) {
       this.name = name;
       this.dt = dt;                 // time since last keyframe
       this.avars = avars;           // animation variables
       this.time = time;             // absolute time of keyframe;  to be computed later
   };
}

class Motion {
    constructor(setMatricesFunc) {
		this.keyFrameArray = [];          // list of keyframes
		this.maxTime = 0.0;               // time of last keyframe
		this.currTime = 0.0;              // current playback time
		this.updateMatrices = setMatricesFunc;    // function to call to update transformation matrices
    };
    reset() {                     // go back to first keyframe
		this.currTime = 0.0;
    };
    addKeyFrame(keyframe) {               // add a new keyframe at end of list
		this.keyFrameArray.push(keyframe);
		this.maxTime += keyframe.dt;        //since add a keyframe, so the time of last keyframe is increased by dt
		keyframe.time = this.maxTime;       //modify the absolute time of the key frame
    };
    print() {                         //print all the keyframes to the console
		var nKF = this.keyFrameArray.length;  //get the length of the keyframe array
		for (var n=0; n<nKF; n++) {
	    	console.log("Keyframe ",n, this.keyFrameArray[n]);
		}
    };
    timestep(dt) {                //  take a time-step;  loop to beginning if at end
	this.currTime += dt;         // get the current time
	if (this.currTime > this.maxTime) // if the current time larger than the last keyframe time, then loop to the first keyframe
	    this.currTime = 0;
//	var avars = this.getAvarsLinear();
	var avars = this.getAvarsSpline(); // get Catmull-Rom spline interpolation
		this.updateMatrices(avars);  //update transformation matrices
    };

    genMotionCurves(dt) { //generate the interpolation value at each keyframe
	var curvePts = [];
	for (var t=0; t<this.maxTime; t+=dt) {
	    this.currTime = t;
//	    var avars = this.getAvarsLinear();
	    var avars = this.getAvarsSpline(); // get the interpolation value at t
	    curvePts.push(avars); // store interpolation value
	}
//	console.log(curvePts);
		return curvePts;
    };

    getAvarsSpline() {       // Catmull-Rom spline interpolation across multiple segments
		var Mh = new THREE.Matrix4();     // hermite basis matrix
		Mh.set( 2, -2, 1, 1,        // set using row-major ordering
	   			-3, 3, -2, -1,
	   			0, 0, 1, 0,
	   			1, 0, 0, 0 );
		var i = 1;      // begin with the first curve segment
		var eps=0.001;
		//	console.log("currTime=",this.currTime);
	while (this.currTime > this.keyFrameArray[i].time)      // find the right pair of keyframes
	    i++;
		var avars = [];
		var nKF = this.keyFrameArray.length;
		for (var n=0; n<this.keyFrameArray[i-1].avars.length; n++) {  
              // compute point indices
	    var i1 = i-2;  if (i1<0) i1=0;          
	    var i2 = i-1;
	    var i3 = i;
	    var i4 = i+1;  if (i4>nKF-1) i4=nKF-1;  
	    var kf1 = this.keyFrameArray[i1];
	    var kf2 = this.keyFrameArray[i2];
	    var kf3 = this.keyFrameArray[i3];
	    var kf4 = this.keyFrameArray[i4];
	    var y1 = kf1.avars[n],  t1 = kf1.time; //get control point1, and its time
	    var y2 = kf2.avars[n],  t2 = kf2.time; //get control point2, and its time
	    var y3 = kf3.avars[n],  t3 = kf3.time; //get control point3, and its time
	    var y4 = kf4.avars[n],  t4 = kf4.time; //get control point4, and its time
	    var y2p = (t3-t2)*(y3-y1)/(t3-t1); // get the velocity at y2
	    var y3p = (t3-t2)*(y4-y2)/(t4-t2);// get the velocity at y3
	    var t = (this.currTime - t2)/(t3-t2); // normalize t let 0<t<1
	    var T = new THREE.Vector4( t*t*t, t*t, t, 1 ); // T matrix
	    var G = new THREE.Vector4(y2,y3,y2p,y3p); //get G matrix
	    var A = G.applyMatrix4(Mh);               // get A matrix
	    var val = T.dot(A); //get the interpolation value
	    avars.push(val);  //store the interpolation value into avar
		}
	return avars;
    };
    // the functions first find the right key frame of the current time and normalize the time in order to
    // get the interpolation
    getAvarsLinear() {        // linear interpolation of values
	var i = 1;      // begin with the first curve segment
	while (this.currTime > this.keyFrameArray[i].time)      // find the right pair of keyframes
	    i++;
	var avars = [];
	for (var n=0; n<this.keyFrameArray[i-1].avars.length; n++) {   // interpolate the values
	    var y0 = this.keyFrameArray[i-1].avars[n];
	    var y1 = this.keyFrameArray[i].avars[n];
	    var x0 = this.keyFrameArray[i-1].time;
	    var x1 = this.keyFrameArray[i].time;
	    var x = this.currTime;
	    var y = y0 + (y1-y0)*(x-x0)/(x1-x0);    // linearly interpolate
	    avars.push(y);
	}
	return avars;         // return list of interpolated avars
    };
}

