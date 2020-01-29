/////////////////////////////////////////////////////////////////////////////////////////
//  UBC CPSC 314,  Vsep2018
//  Assignment 3 Template
/////////////////////////////////////////////////////////////////////////////////////////

console.log('hello world');

a=5;  
b=2.6;
console.log('a=',a,'b=',b);
myvector = new THREE.Vector3(0,1,2);
console.log('myvector =',myvector);

var animation = true;
var meshesLoaded = true;          // use "false" when loading 3D objects
var aniTime = 0.0;

var luxoMotion = new Motion(updateLuxo);
var pencilMotion = new Motion(updatePencil);
var meshes = {};  
var RESOURCES_LOADED = false;

// SETUP RENDERER & SCENE

var windowWidth, windowHeight;
var canvas = document.getElementById('canvas');
var camera;
var camera_spline;
var light;
var ambientLight;
var scene = new THREE.Scene();
var scene_spline = new THREE.Scene();
var sceneName;

var renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
canvas.appendChild( renderer.domElement );
var ctx = renderer.context;
ctx.getShaderInfoLog = function () { return '' };   // stops shader warnings, seen in some browsers

//////////////////////////////////////////////////////////
//  initCamera():   SETUP CAMERA
//////////////////////////////////////////////////////////

function initCameraSpline() {
    camera_spline = new THREE.OrthographicCamera(-10,10,3,-3,-5,5);
    camera_spline.position.set(0,0,0);
    camera_spline.lookAt(0,0,-10);
    camera_spline.up = new THREE.Vector3(0,1,0);
    scene_spline.add(camera_spline);
};

function initCameraLuxo() {
    var cameraFov = 45;     // initial camera vertical field of view, in degrees
    camera = new THREE.PerspectiveCamera(cameraFov,1,0.1,1000);    // view angle, aspect ratio, near, far
    camera.position.set(5,10,40);
    camera.up = new THREE.Vector3(0,1,0);
    camera.lookAt(0,0,0);
    scene.add(camera);
    var controls = new THREE.OrbitControls(camera);    // setup orbit controls for camera
    controls.damping = 0.2;
    controls.autoRotate = false;
};

function initCameraWarp() {
    var cameraFov = 30;     // initial camera vertical field of view, in degrees
    camera = new THREE.PerspectiveCamera(cameraFov,1,0.1,1000);    // view angle, aspect ratio, near, far
    camera.position.set(0,0,2);
    camera.up = new THREE.Vector3(0,1,0);
    camera.lookAt(0,0,0);     // note:  OrbitControls set this back to zero (?)
    scene.add(camera);
    var controls = new THREE.OrbitControls(camera);    // setup orbit controls for camera
    controls.damping = 0.2;
    controls.autoRotate = false;
};

function setup_render_spline() {
    var F_left = 0, F_width=1, F_top = 0.7; F_height=0.3;
    var left = Math.floor( window.innerWidth * F_left );
    var top = Math.floor( window.innerHeight * F_top );
    var width = Math.floor( window.innerWidth * F_width );
    var height = Math.floor( window.innerHeight * F_height );
    renderer.setViewport( left, top, width, height );
    renderer.setScissor( left, top, width, height );
    renderer.setScissorTest( true );
    renderer.setClearColor(0xffffff);     // set background colour
    camera_spline.aspect = width/height;
    camera_spline.updateProjectionMatrix();
}

function setup_render_main() {
    var F_left = 0.0, F_width=1.0, F_top = 0.0; F_height=0.7;
    var left = Math.floor( window.innerWidth * F_left );
    var top = Math.floor( window.innerHeight * F_top );
    var width = Math.floor( window.innerWidth * F_width );
    var height = Math.floor( window.innerHeight * F_height );
    renderer.setViewport( left, top, width, height );
    renderer.setScissor( left, top, width, height );
    renderer.setScissorTest( true );
    renderer.setClearColor(0xcadadf);     // set background colour
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
}

function updateSize() {
    if ( windowWidth != window.innerWidth || windowHeight != window.innerHeight ) {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
	renderer.setSize( windowWidth, windowHeight );
    }
}

function resize() {               // adapt to window resize
    setup_render_spline();
    setup_render_main();
}



////////////////////////////////////////////////////////////////////////	
// init():  setup up scene
////////////////////////////////////////////////////////////////////////	

function init(name) {
    sceneName = name;
    switch(sceneName) {
    case "Luxo":
	initCameraLuxo();  
        initLuxoMotions();    // Luxo keyframes (luxo.js)
        initLuxo();           // Luxo setup (luxo.js)
	initLights();         
	initLuxoObjects();
	initPencilObject();   // create pencil (pencil.js)
	initPencilMotions();  // pencil keyframes (pencil.js)
	renderer.shadowMapEnabled = true;
	break;
    case "Warp":
	initCameraWarp();  
	initWarpObjects();
	break;
    default:
	var str = "Scene \"" + sceneName + "\" not found";
        alert(str);
    }
    initCameraSpline();   // spline window camera
    initSpline();         // spline setup (spline.js)
   //initFileObjects();      // use when reading in 3d OBJ files
    window.addEventListener('resize',resize);
    resize();
};

///////////////////////////////////////////////////////////////////////////////////////
// LISTEN TO KEYBOARD
///////////////////////////////////////////////////////////////////////////////////////

var keyboard = new THREEx.KeyboardState();     // for hold-key-down responses
function checkKeyboard() {
  if (keyboard.pressed("W")) 
    light.position.y += 0.1;
  else if (keyboard.pressed("S")) 
    light.position.y -= 0.1;
  else if (keyboard.pressed("A"))
    light.position.x -= 0.1;
  else if (keyboard.pressed("D"))
    light.position.x += 0.1;
  if (typeof sphere != "undefined") {      // if sphere object is defined
      sphere.position.set(light.position.x, light.position.y, light.position.z);
  }

}

document.addEventListener("keydown", onDocumentKeyDown, false);   // for tap key responses
function onDocumentKeyDown(event) {        
    var keyCode = event.which;
    if (keyCode == 87) {            // W key
    } else if (keyCode == 83) {     // S key
    } else if (keyCode == 65) {     // A key
    } else if (keyCode == 68) {     // D key
    } else if (keyCode == 32) {     //  space
        animation = !animation;
    }
};

///////////////////////////////////////////////////////////////////////////////////////
// UPDATE CALLBACK:    This is the main animation loop
///////////////////////////////////////////////////////////////////////////////////////

function update() {
    var dt=0.02;                        // time step
    aniTime += dt;
    checkKeyboard();                    // updates driven by keyboards
    updateSize();                       // update window size (if resized)
    if (sceneName=="Luxo" && animation && meshesLoaded) {     
	luxoMotion.timestep(dt);        // advance animation
	pencilMotion.timestep(dt);      // advance animation 
	timeBar.position.set(-10+4*luxoMotion.currTime,0,0);    // advance time-bar position in spline window
    } else if (sceneName=="Warp" && animation && meshesLoaded) {     
	warpMotion();
    }
    setup_render_main();
    renderer.render(scene, camera);
    animateSkybox();
    setup_render_spline();
    renderer.render(scene_spline,camera_spline);
    requestAnimationFrame(update);      // requests the next update call;  this creates a loop
}

init("Luxo");
update();
