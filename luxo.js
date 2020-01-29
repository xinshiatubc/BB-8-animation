//  Luxo

console.log("luxo.js")

////////////////////////////////////////////////////////////////////////
// initLuxoMotions():  setup Motion instances for each object that we wish to animate
////////////////////////////////////////////////////////////////////////
function initLuxoMotions() {

      // basic interpolation test
//    myboxMotion.currTime = 0.1;
//    console.log('kf',myboxMotion.currTime,'=',myboxMotion.getAvars());    // interpolate for t=0.1
//    myboxMotion.currTime = 2.9;
//    console.log('kf',myboxMotion.currTime,'=',myboxMotion.getAvars());    // interpolate for t=2.9

      // keyframes for Luxo:    name, dt, [x, y, theta1, theta2, theta3]

    //curious bb8


    luxoMotion.addKeyFrame(new Keyframe('straight',     1.0, [0,   2,   15,      0, 0, 0,    0, 0, 0,          0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('go left',      1.0, [-3,  2,   15,     0, 0, 360,    0, 0, 25,      -1, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('go left',      1.0, [-3,  2,   15,      0, 0, 360,    0, 0, 0,        0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('go right',     1.0, [3,   2,   15,      0, 0, 0,      0, 0, -25,      1, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('straight',     0.3, [3,   2,   15,      0, 40, 0,      25, 10, 0,        0, 0, 0.5]));
    luxoMotion.addKeyFrame(new Keyframe('straight',     0.2, [3,   2,   15,      0, 60, 0,      0, 20, 25,        -0.5, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('straight',     0.2, [3,   2,   15,      0, 40, 0,      -25, 10, 0,        0, 0, -0.5]));
    luxoMotion.addKeyFrame(new Keyframe('straight',     0.2, [3,   2,   15,      0, 20, 0,      0, 0, -25,        0.5, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('straight',     0.2, [3,   2,   15,      0, 0, 0,      25, 10, 0,        0, 0, 0.5]));
    luxoMotion.addKeyFrame(new Keyframe('straight',     0.2, [3,   2,   15,      0, 0, 0,    0, 0, 0,          0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('straight',     0.3, [4,   2,   15,      0, 0, 0,    0, 0, 0,          -1, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('straight',     0.3, [3,   2,   15,      0, 0, 0,    0, 0, 0,         -0.5, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('straight',     0.3, [3.5,   2,   15,      0, 0, 0,    0, 0, 0,          -1, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('straight',     0.3, [3,   2,   15,      0, 0, 0,    0, 0, 0,          0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('go left',      0.3, [0,  2,   15,     0, 0, 360,    0, 0, 25,      -1, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('go left',      0.3, [0,  2,   15,      0, 0, 360,    0, 0, 0,        0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('go right',     0.3, [3,   2,   15,      0, 0, -360,    0, 0, -25,          1, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('go left',      0.4, [-5,  2,   15,     0, 0, 360,    0, 0, 25,      -1, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('go left',      0.4, [-5,  2,   15,      0, 0, 360,    0, 0, 0,        0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('go right',     0.6, [10,   2,   15,      0, 0, -720,    0, 0, -25,          1, 0, 0]));    
    luxoMotion.addKeyFrame(new Keyframe('rotateY',      0.2, [10,   2,   15,      0, 360, 0,      0, 0, 0,        0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('rotateY',      0.1, [10,   2,   15,      0, 180, 0,      0, 0, 0,        0, 0, 0]));
    

    luxoMotion.addKeyFrame(new Keyframe('jump',         0.1, [10,   1.5, 15,      0, 0, 0,      0, 0, 0,        0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump',         0.1, [10,   8,   15,      360, 0,360,      0, 0, 0,        0, 2, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump',         0.2, [10,   8,   15,      720, 0, 720,      0, 0, 0,        0, 2, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump',         0.2, [10,   1.5, 15,      360, 0, 360,      0, 0, 0,        0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump',         0.2, [10,   2,   15,      0, 0, 0,      0, 0, 0,        0, 0.5, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump',         0.1, [10,   2,   15,      360, 0, 360,      0, 0, 0,        0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump',         0.1, [10,   2,   15,      0, 0, 0,      0, 0, 0,        0, 0, 0]));
    

    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.1, [10,   2,   15,      0, 0, 0,      0, 0, 0,        0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.2, [10,   1.5, 15,      0, 0, 0,      0, 0, 0,        0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.2, [9,   8,   16,      360, 0,360,      0, 0, 0,        0, 2, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.2, [8,   8,   17,      720, 0, 720,      0, 0, 0,        0, 2, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.2, [7,   1.5, 18,      360, 0, 360,      0, 0, 0,        0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.1, [7,   2,   18,      0, 0, 0,      0, 0, 0,        0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.1, [6,   8,   17,      360, 0,360,      0, 0, 0,        0, 2, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.1, [5,   8,   16,      720, 0, 720,      0, 0, 0,        0, 2, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.1, [4,   1.5, 15,      360, 0, 360,      0, 0, 0,        0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.1, [4,   2,   15,      0, 0, 0,      0, 0, 0,        0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.1, [5,   8,   14,      360, 0,360,      0, 0, 0,        0, 2, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.1, [6,   8,   13,      720, 0, 720,      0, 0, 0,        0, 2, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.1, [7,   1.5, 12,      360, 0, 360,      0, 0, 0,        0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.1, [7,   2,   12,      0, 0, 0,      0, 0, 0,        0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.1, [8,   8,   13,      360, 0,360,      0, 0, 0,        0, 2, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.1, [9,   8,   14,      720, 0, 720,      0, 0, 0,        0, 2, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.1, [10,  1.5, 15,      360, 0, 360,      0, 0, 0,        0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.1, [11,   2,   15,      0, 0, 0,      0, 0, 0,        0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.1, [12,   8,   15,      360, 0,360,      0, 0, 0,        0, 2, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.1, [13,   8,   15,      720, 0, 720,      0, 0, 0,        0, 2, 0]));
    luxoMotion.addKeyFrame(new Keyframe('jump around',  0.1, [14,   0.5, 15,      360, 0, 360,      0, 0, 0,        0, 0, 0]));

    luxoMotion.addKeyFrame(new Keyframe('lose head',  0.2, [14,   1,   15,      0, 0, 0,      0, 0, 0,        0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('lose head',  0.1, [14,   1,   15,      0, 0, 0,      180, 0, 0,        -5, -0.7, -5]));
    luxoMotion.addKeyFrame(new Keyframe('lose head',  0.6, [14,   1,   15,      0, 0, 0,      190, 0, 0,        -5, 2, -5]));
    luxoMotion.addKeyFrame(new Keyframe('lose head',  0.6, [14,   1,   15,      0, 0, 0,      190, 0, 0,        -5, 2, -5]));
    luxoMotion.addKeyFrame(new Keyframe('lose head',  0.6, [14,   1,   15,      0, 0, 0,      190, 0, 0,        -5, 2, -5]));
    luxoMotion.addKeyFrame(new Keyframe('lose head',  0.6, [14,   1,   15,      0, 0, 0,      190, 0, 0,        -5, -0.7, -5]));
    luxoMotion.addKeyFrame(new Keyframe('lose head',  0.2, [14,   1,   15,      0, 0, 0,      0, 0, 0,        0, 0, 0]));
    
    luxoMotion.addKeyFrame(new Keyframe('move head',  0.3, [14,   1,   15,      0, 40, 0,      25, 10, 0,        0, 0, 0.5]));
    luxoMotion.addKeyFrame(new Keyframe('move head',  0.1, [14,   1,   15,      0, 60, 0,      0, 20, 25,        -0.5, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('move head',  0.1, [14,   1,   15,      0, 40, 0,      -25, 10, 0,        0, 0, -0.5]));
    luxoMotion.addKeyFrame(new Keyframe('move head',  0.1, [14,   1,   15,      0, 20, 0,      0, 0, -25,        0.5, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('move head',  0.1, [14,   1,   15,      0, 0, 0,      25, 10, 0,        0, 0, 0.5]));
    luxoMotion.addKeyFrame(new Keyframe('move head',  0.1, [14,   1,   15,      0, 0, 0,    0, 0, 0,          0, 0, 0]));

    luxoMotion.addKeyFrame(new Keyframe('go left',      0.5, [-2,  2,   15,     0, 0, 1800,    0, 0, 25,      -1, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('go left',      1.0, [0,  2,   15,      0, 0, 1800,    0, 0, 0,        0, 0, 0]));

    luxoMotion.addKeyFrame(new Keyframe('move head',  0.3, [0,   2,   15,      0, 40, 0,      25, 10, 0,        0, 0, 0.5]));
    luxoMotion.addKeyFrame(new Keyframe('move head',  0.1, [0,   2,   15,      0, 60, 0,      0, 20, 25,        -0.5, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('move head',  0.1, [0,   2,   15,      0, 40, 0,      -25, 10, 0,        0, 0, -0.5]));
    luxoMotion.addKeyFrame(new Keyframe('move head',  0.1, [0,   2,   15,      0, 20, 0,      0, 0, -25,        0.5, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('move head',  0.1, [0,   2,   15,      0, 0, 0,      25, 10, 0,        0, 0, 0.5]));
    luxoMotion.addKeyFrame(new Keyframe('move head',  0.1, [0,   2,   15,      0, 0, 0,    0, 0, 0,          0, 0, 0]));

    luxoMotion.addKeyFrame(new Keyframe('small jump',   0.2, [0,  3,   15,      3600, 0, 1800,    0, 1800, 0,        0, 1.5, 0]));
    luxoMotion.addKeyFrame(new Keyframe('small jump',   0.2, [0,  2,   15,      1800, 0, 1800,    0, 0, 0,        0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('small jump',   0.2, [0,  3,   15,      -1800, 0, 1800,    0, 1800, 0,        0, 1.5, 0]));
    luxoMotion.addKeyFrame(new Keyframe('small jump',   0.2, [0,  2,   15,      3600, 0, 1800,    0, 0, 0,        0, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('small jump',   0.2, [0,  3,   15,      0, 0, 1800,    0, 1800, 0,        0, 1.5, 0]));
    luxoMotion.addKeyFrame(new Keyframe('small jump',   0.2, [0,  2,   15,      1800, 0, 1800,    0, 0, 0,        0, 0, 0]));

    luxoMotion.addKeyFrame(new Keyframe('head move left',  0.2, [0,  2,   15,      0, 0, 1800,    0, 0, 25,        -1, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('head move right', 0.2, [0,  2,   15,      0, 0, 1800,    0, 0, -25,        1, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('head move left',  0.2, [0,  2,   15,      0, 0, 1800,    0, 0, 25,        -1, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('head move right', 0.2, [0,  2,   15,      0, 0, 1800,    0, 0, -25,        1, 0, 0]));
    luxoMotion.addKeyFrame(new Keyframe('head move left',  0.2, [0,  2,   15,      0, 0, 1800,    0, 0, 25,        -1, 0, 0]));

    initbb8Sound();



}

function initbb8Sound(){
    var audioLoader = new THREE.AudioLoader();
    var listener = new THREE.AudioListener();
    camera.add( listener );
                
    
    var bb8sound = new THREE.PositionalAudio( listener );
    audioLoader.load( 'sound/bb8_sound.mp3', function( buffer ) {
        bb8sound.setBuffer( buffer );
        bb8sound.setRefDistance( 1000 );
        bb8sound.setLoop(true);
        bb8sound.play();
    });
}

/////////////////////////////////////	
// initLuxo():  setup Luxo geometry
/////////////////////////////////////	

function initLuxo() {




    boxGeometry = new THREE.BoxGeometry( 1, 1, 1 );    // width, height, depth
    coneGeometry = new THREE.ConeGeometry( 2.5, 2.5, 32); // radius, height, radialSegments
    sphereGeometry = new THREE.SphereGeometry( 0.5, 32, 32 );
    jointGeometry = new THREE.CylinderGeometry( 0.30, 0.30, 1.1, 20, 4 );

    sphereBody = new THREE.Mesh( new THREE.SphereGeometry( 2, 100, 10 ), bodyMaterial );
    //sphereBody.position.set(3,3,-3);
    scene.add( sphereBody );
    sphereBody.castShadow = true;
    sphereBody.receiveShadow = true;
    sphereBody.matrixAutoUpdate = false;  

    sphereHead = new THREE.Mesh( new THREE.SphereGeometry(1, 100, 6, 0, 2*Math.PI, 0, 0.5 * Math.PI), headMaterial );
    scene.add( sphereHead );
    sphereHead.castShadow = true;
    sphereHead.receiveShadow = true;
    sphereHead.matrixAutoUpdate = false; 


    sphereHeadin = new THREE.Mesh( new THREE.SphereGeometry(0.95, 100, 6, 0, 2*Math.PI, 0, 0.5 * Math.PI), metalMaterial );
    scene.add( sphereHeadin );
    sphereHeadin.castShadow = true;
    sphereHeadin.receiveShadow = true;
    sphereHeadin.matrixAutoUpdate = false; 


    wire = new THREE.Mesh( new THREE.CylinderGeometry(0.025, 0.025, 2,100), wireMaterial );
    scene.add( wire );
    wire.castShadow = true;
    wire.receiveShadow = true;
    wire.matrixAutoUpdate = false; 

    var r2Material = new THREE.MeshPhongMaterial({
        map:         new THREE.TextureLoader().load('images/r2d2.png'),
        bumpMap:     new THREE.TextureLoader().load('images/r2d2_bump_map.png'),
        bumpScale:   0.1,
        specularMap: new THREE.TextureLoader().load('images/r2d2_ specular_map.png')
    });


    var manager = new THREE.LoadingManager();
        manager.onProgress = function ( item, loaded, total ) {
            console.log( item, loaded, total );
        };
    var onProgress = function ( xhr ) {
        if ( xhr.lengthComputable ) {
            var percentComplete = xhr.loaded / xhr.total * 100;
        console.log( Math.round(percentComplete, 2) + '% downloaded' );
        }
    };
    var onError = function ( xhr ) {};

    var loader = new THREE.OBJLoader( manager );
    loader.load( 'obj/r2d2.obj', 
        function ( object ) {
            object.children.forEach(function(child) {
                    child.material = r2Material;
                    child.castShadow = true;
                    child.receiveShadow = true;
                    if (child.name === "Head") head = child;
                    if (child.name === "Front_Projector") frontP = child;
                    //console.log(child.name);
            } );
            scene.add( object );
            artoo = object;
            object.scale.set(0.06,0.06,0.06);
            object.position.set(6,1,5);
    }, onProgress, onError );

}

///////////////////////////////////////////////////////////////////////////////////////
// updateLuxo(avars)
///////////////////////////////////////////////////////////////////////////////////////

function updateLuxo(avars) {
    var deg2rad = Math.PI/180;
    var xPosition = avars[0];
    var yPosition = avars[1];
    var zPosition = avars[2];
    var theta1 = avars[3]*deg2rad;      //body rotation X
    var theta2 = avars[4]*deg2rad;      //body rotation Y
    var theta3 = avars[5]*deg2rad;      //body rotation Z
    var theta4 = avars[6]*deg2rad;      //head rotation X
    var theta5 = avars[7]*deg2rad;      //head rotation Y
    var theta6 = avars[8]*deg2rad;      //head rotation Z
    var headxPos = avars[9];
    var headyPos = avars[10];
    var headzPos = avars[11];

    var len1 = 3;  var len2 = 3;   var len3 = 3;      var len4 = 0.5;
    var width = 0.5;  var depth=1;
    var frame1 = new THREE.Matrix4();
    var frame2 = new THREE.Matrix4();
    var frame3 = new THREE.Matrix4();
    var frame4 = new THREE.Matrix4();

    sphereBody.matrix.identity();
    sphereBody.matrix.multiply(new THREE.Matrix4().makeTranslation(xPosition,yPosition,zPosition)); 
  
    frame1.copy(sphereBody.matrix);             // establish frame for body 
    
    sphereBody.matrix.multiply(new THREE.Matrix4().makeRotationX(theta1));
    sphereBody.matrix.multiply(new THREE.Matrix4().makeRotationY(theta2));
    sphereBody.matrix.multiply(new THREE.Matrix4().makeRotationZ(theta3));

    sphereHead.matrix.copy(frame1); 
    sphereHead.matrix.multiply(new THREE.Matrix4().makeTranslation(0,2,0));
    sphereHead.matrix.multiply(new THREE.Matrix4().makeRotationX(theta4));
    sphereHead.matrix.multiply(new THREE.Matrix4().makeRotationY(theta5));   
    sphereHead.matrix.multiply(new THREE.Matrix4().makeRotationZ(theta6)); 
    sphereHead.matrix.multiply(new THREE.Matrix4().makeTranslation(headxPos,0,0));
    sphereHead.matrix.multiply(new THREE.Matrix4().makeTranslation(0,headyPos,0));
    sphereHead.matrix.multiply(new THREE.Matrix4().makeTranslation(0,0,headzPos));

    frame2.copy(sphereHead.matrix);
    sphereHeadin.matrix.copy(frame2); 
    wire.matrix.copy(frame2);
    wire.matrix.multiply(new THREE.Matrix4().makeTranslation(-0.5,1,0));


      ////////////// luxo1
    // luxo1.matrix.identity(); 
    // luxo1.matrix.multiply(new THREE.Matrix4().makeTranslation(xPosition,yPosition,0));   
    // luxo1.matrix.multiply(new THREE.Matrix4().makeRotationZ(theta1));    
    //   // Frame 1 has been established
    // frame1.copy(luxo1.matrix);
    // luxo1.matrix.multiply(new THREE.Matrix4().makeTranslation(0,0.5*width,0));   
    // luxo1.matrix.multiply(new THREE.Matrix4().makeScale(len1,width,depth));    

    //   ////////////// luxo2
    // luxo2.matrix.copy(frame1);      // start with parent frame
    // luxo2.matrix.multiply(new THREE.Matrix4().makeTranslation(0,width,0));
    // luxo2.matrix.multiply(new THREE.Matrix4().makeRotationZ(theta2));    
    //   // Frame 2 has been established
    // frame2.copy(luxo2.matrix);
    // luxoj1.matrix.copy(frame2);
    // luxoj1.matrix.multiply(new THREE.Matrix4().makeRotationX(0.5*Math.PI));
    // luxo2.matrix.copy(frame2);
    // luxo2.matrix.multiply(new THREE.Matrix4().makeTranslation(-0.5*len2,0,0));   
    // luxo2.matrix.multiply(new THREE.Matrix4().makeScale(len2,width,depth));    

    //   ///////////////  luxo3
    // luxo3.matrix.copy(frame2);
    // luxo3.matrix.multiply(new THREE.Matrix4().makeTranslation(-len2,0,0));
    // luxo3.matrix.multiply(new THREE.Matrix4().makeRotationZ(theta3));    
    //   // Frame 3 has been established
    // frame3.copy(luxo3.matrix);
    // luxoj2.matrix.copy(frame3);
    // luxoj2.matrix.multiply(new THREE.Matrix4().makeRotationX(0.5*Math.PI));
    // luxo3.matrix.copy(frame3);
    // luxo3.matrix.multiply(new THREE.Matrix4().makeTranslation(0.5*len3,0,0));   
    // luxo3.matrix.multiply(new THREE.Matrix4().makeScale(len3,width,depth));    

    //   /////////////// luxo4
    // luxo4.matrix.copy(frame3);
    // luxo4.matrix.multiply(new THREE.Matrix4().makeTranslation(len3,0,0));
    // luxo4.matrix.multiply(new THREE.Matrix4().makeRotationZ(theta4));    
    //   // Frame 4 has been established
    // frame4.copy(luxo4.matrix);
    // luxoj3.matrix.copy(frame4);
    // luxoj3.matrix.multiply(new THREE.Matrix4().makeRotationX(0.5*Math.PI));
    // luxo4.matrix.copy(frame4);
    // luxo4.matrix.multiply(new THREE.Matrix4().makeTranslation(0,-0.5*len4,0));   
    // luxo4.matrix.multiply(new THREE.Matrix4().makeScale(width,len4,depth));


    if (head) {
        var SPEED = 0.05;
        var v1 = Date.now() * 0.003;
        var v2 = Date.now() * 0.0003;
        var orbitRadius = 7;
        var rotationY = (0.05 * direction);

        head.rotation.y += rotationY;
        frontP.rotation.y += rotationY;

        if (head.rotation.y > rotMax) direction = -1;
        if (head.rotation.y < rotMin) direction = 1;



        artoo.position.y = Math.cos( v1 ) * 0.35 + 1.6;
        artoo.position.x = Math.cos(v2) * orbitRadius;
        //artoo.position.z = Math.sin(v2) * orbitRadius;


    }



    sphereHead.updateMatrixWorld();
    sphereBody.updateMatrixWorld();
    sphereHeadin.updateMatrixWorld();
    wire.updateMatrixWorld();



}

