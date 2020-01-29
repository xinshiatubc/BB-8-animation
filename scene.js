///////// scene.js //////////////////

/////////////////////////////////////	
// MATERIALS
/////////////////////////////////////	

var diffuseBlue = new THREE.MeshLambertMaterial( {color: 0xc0c0ff} );
var diffuseRed = new THREE.MeshLambertMaterial( {color: 0xff4040} );
var diffuseMaterial = new THREE.MeshLambertMaterial( {color: 0xaf7f3f} );
var diffuseMaterial2 = new THREE.MeshLambertMaterial( {color: 0xffffff, side: THREE.DoubleSide } );
var yellowMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var redMaterial = new THREE.MeshBasicMaterial( {color: 0xff0000} );
var greenMaterial = new THREE.MeshBasicMaterial( {color: 0x00f000} );
var blueMaterial = new THREE.MeshBasicMaterial( {color: 0x0000f0} );
var metalMaterial = new THREE.MeshPhysicalMaterial( {
                                    color: 0x7d7c6f,
                                    metalness: 1,
                                    roughness: 0,
                                    side: THREE.DoubleSide} );
var wireMaterial = new THREE.MeshPhysicalMaterial( {
                                    color: 0xc0ccd2,
                                    metalness: 0.5,
                                    roughness: 0.5,
                                    reflectivity: 0.5,
                                    side: THREE.DoubleSide} );

var armadilloMaterial = new THREE.MeshBasicMaterial( {color: 0x7fff7f} );
var head,frontP, artoo;
var rotMax = 0.5 * Math.PI;
var rotMin = -0.5 * Math.PI;
var direction = 1;
var r2xMax = 10.0;
var r2xMin = -3.5;

console.log("scene.js")

/////////////////////////////////////	
// initLights():  SETUP LIGHTS
/////////////////////////////////////	

function initLights() {
    light = new THREE.PointLight(0xffffff);
    light.position.set(5,20,9);
    light.castShadow = true; 
    scene.add(light);
    ambientLight = new THREE.AmbientLight(0x606060);
    scene.add(ambientLight);
}

/////////////////////////////////////	
// initLuxoObjects()
/////////////////////////////////////	

function initLuxoObjects() {
    // multi-colored cube      [https://stemkoski.github.io/Three.js/HelloWorld.html] 
    var cubeMaterialArray = [];    // order to add materials: x+,x-,y+,y-,z+,z-
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xff3333 } ) );
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xff8800 } ) );
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xffff33 } ) );
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x33ff33 } ) );
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x3333ff } ) );
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x8833ff } ) );
      // Cube parameters: width (x), height (y), depth (z), 
      //        (optional) segments along x, segments along y, segments along z
    var mccGeometry = new THREE.BoxGeometry( 1.5, 1.5, 1.5, 1, 1, 1 );
    mcc = new THREE.Mesh( mccGeometry, cubeMaterialArray );
    mcc.position.set(-5,0.75,2);
    //scene.add( mcc );	

    // cylinder
    // parameters:  radiusAtTop, radiusAtBottom, height, radialSegments, heightSegments
    cylinderGeometry = new THREE.CylinderGeometry( 2, 2, 1, 20, 4 );
    cylinder = new THREE.Mesh( cylinderGeometry, diffuseMaterial);
    cylinder.position.set(-7, 0.5, -3);
    //scene.add( cylinder );

      // textured floor
    //floorTexture = new THREE.TextureLoader().load('images/mars-base_4k.jpg');
   //floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    //floorTexture.repeat.set(2, 1);
    // floorMaterial = new THREE.MeshLambertMaterial( {color: 0xcfcfcf, 
				// 		    map: floorTexture, side: THREE.DoubleSide });

    var floorMaterial = new THREE.MeshPhongMaterial({
        map:         new THREE.TextureLoader().load('images/Mars.png'),        
        bumpMap:     new THREE.TextureLoader().load('images/Mars-bump.png'),
        bumpScale:   4,
        side: THREE.DoubleSide

    });

   //floorGeometry = new THREE.PlaneBufferGeometry(60,60);
    floorGeometry = new THREE.SphereGeometry(75, 100, 100, 2, 2, 1, 1.2);
    floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.z = 0.0;
    floor.position.y = -73.0;
    floor.rotation.z = Math.PI/2 ;
    scene.add(floor);
    floor.castShadow = false;
    floor.receiveShadow = true;

    // sphere, located at light position
    sphereGeometry = new THREE.SphereGeometry(0.3, 32, 32);    // radius, segments, segments
    sphere = new THREE.Mesh(sphereGeometry, yellowMaterial);
    sphere.position.set(-5,10,2);
    sphere.position.set(light.position.x, light.position.y, light.position.z);
    //scene.add(sphere);


    //rotated Sky box
        var urls = [
            'images/cube/dark-s_px.jpg',
            'images/cube/dark-s_nx.jpg',
            'images/cube/dark-s_py.jpg',
            'images/cube/dark-s_ny.jpg',
            'images/cube/dark-s_pz.jpg',
            'images/cube/dark-s_nz.jpg'
          ];

        materialArray = [];
        for (var i = 0; i < 6; i++)
            materialArray.push( new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(urls[i]),
                side: THREE.BackSide
        }));

        skyGeometry = new THREE.CubeGeometry( 1000, 1000, 1000 );
        skyMaterial = new THREE.MeshFaceMaterial( materialArray );
        skybox = new THREE.Mesh( skyGeometry, skyMaterial );

        scene.add(skybox);





}

function animateSkybox(){
    skybox.rotation.x += 0.002;
    
}

//BB8 body Material 
    var bodyMaterial = new THREE.MeshPhongMaterial({
        map:         new THREE.TextureLoader().load('images/bb8body.jpg'),        
        bumpMap:     new THREE.TextureLoader().load('images/body_bump_map.jpg'),
        bumpScale:   0.1,
        specular: 0xfceed2, shininess: 25

});

//BB8 head Material
    var headMaterial = new THREE.MeshPhongMaterial({
        map:         new THREE.TextureLoader().load('images/bb8head.jpg'),        
        bumpMap:     new THREE.TextureLoader().load('images/head_bump_map.jpg'),

        bumpScale:   0.1, specular: 0xfceed2, shininess: 5

});


/////////////////////////////////////////////////////////////////////////////////////
//  create customShader material
/////////////////////////////////////////////////////////////////////////////////////

var customShaderMaterial = new THREE.ShaderMaterial( {
//        uniforms: { textureSampler: {type: 't', value: floorTexture}},
	vertexShader: document.getElementById( 'customVertexShader' ).textContent,
	fragmentShader: document.getElementById( 'customFragmentShader' ).textContent
} );


////////////////////////////////////////////////////////////////////////	
// initFileObjects():    read object data from OBJ files;  see onResourcesLoaded() for instances
////////////////////////////////////////////////////////////////////////	

function initFileObjects() {
        // list of OBJ files that we want to load, and their material
    models = {     
//	bunny:     {obj:"obj/bunny.obj", mtl: diffuseMaterial, mesh: null},
//	horse:     {obj:"obj/horse.obj", mtl: diffuseMaterial, mesh: null },
//	minicooper:{obj:"obj/minicooper.obj", mtl: diffuseMaterial, mesh: null },
//	trex:      { obj:"obj/trex.obj", mtl: normalShaderMaterial, mesh: null },
	//teapot:    {obj:"obj/teapot.obj", mtl: customShaderMaterial, mesh: null	},
	//armadillo: {obj:"obj/armadillo.obj", mtl: customShaderMaterial, mesh: null },
	teapot:    {obj:"obj/teapot.obj", mtl: diffuseMaterial, mesh: null }
    };

    // var manager = new THREE.LoadingManager();
    // manager.onProgress = function ( item, loaded, total ) {
    //     console.log( item, loaded, total );
    // };
    var manager = new THREE.LoadingManager();
    manager.onLoad = function () {
        console.log("loaded all resources");
        RESOURCES_LOADED = true;
        onResourcesLoaded();
    }

    var onProgress = function ( xhr ) {
    if ( xhr.lengthComputable ) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        console.log( Math.round(percentComplete, 2) + '% downloaded' );
    }
    };
    var onError = function ( xhr ) {
    };

    // Load models;  asynchronous in JS, so wrap code in a fn and pass it the index
    for( var _key in models ){
    console.log('Key:', _key);
    (function(key){
        var objLoader = new THREE.OBJLoader( manager );
        objLoader.load( models[key].obj, function ( object ) {
        object.traverse( function ( child ) {
            if ( child instanceof THREE.Mesh ) {
            child.material = models[key].mtl;
            child.material.shading = THREE.SmoothShading;
            }   } );
        models[key].mesh = object;
        //scene.add( object );
        }, onProgress, onError );
    })(_key);
    }

}

/////////////////////////////////////////////////////////////////////////////////////
// onResourcesLoaded():  once all OBJ files are loaded, this gets called
//                       Object instancing is done here
/////////////////////////////////////////////////////////////////////////////////////

function onResourcesLoaded(){
	
 // Clone models into meshes;   [Michiel:  AFAIK this makes a "shallow" copy of the model,
 //                             i.e., creates references to the geometry, and not full copies ]
    // meshes["armadillo1"] = models.armadillo.mesh.clone();
    // meshes["armadillo2"] = models.armadillo.mesh.clone();
    // meshes["dragon1"] = models.dragon.mesh.clone();
    meshes["teapot1"] = models.teapot.mesh.clone();
    // // position the object instances and parent them to the scene, i.e., WCS

    meshes["teapot1"].position.set(3, 0, 3);
    meshes["teapot1"].scale.set(0.5, 0.5, 0.5);
    scene.add(meshes["teapot1"]);

    meshesLoaded = true;
}


/////////////////////////////////////	
// otherObjects():  these are here as examples;  
// move to initObjects() as needed
/////////////////////////////////////	

function otherObjects() {
    // custom object
    var geom = new THREE.Geometry(); 
    var v0 = new THREE.Vector3(0,0,0);
    var v1 = new THREE.Vector3(3,0,0);
    var v2 = new THREE.Vector3(0,3,0);
    var v3 = new THREE.Vector3(3,3,0);
    geom.vertices.push(v0);
    geom.vertices.push(v1);
    geom.vertices.push(v2);
    geom.vertices.push(v3);
    geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
    geom.faces.push( new THREE.Face3( 1, 3, 2 ) );
    geom.computeFaceNormals();
    customObject = new THREE.Mesh( geom, diffuseMaterial2 );
    customObject.position.set(0, 0, -2);
    scene.add(customObject);

    // mybox 
    myboxGeometry = new THREE.BoxGeometry( 1, 1, 1 );    // width, height, depth
    mybox = new THREE.Mesh( myboxGeometry, diffuseMaterial );
    scene.add( mybox );

    // box
    boxGeometry = new THREE.BoxGeometry( 1, 1, 1 );    // width, height, depth
    box = new THREE.Mesh( boxGeometry, diffuseMaterial );
    box.position.set(-4, 0, 0);
    scene.add( box );

    // multi-colored cube      [https://stemkoski.github.io/Three.js/HelloWorld.html] 
    var cubeMaterialArray = [];    // order to add materials: x+,x-,y+,y-,z+,z-
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xff3333 } ) );
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xff8800 } ) );
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0xffff33 } ) );
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x33ff33 } ) );
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x3333ff } ) );
    cubeMaterialArray.push( new THREE.MeshBasicMaterial( { color: 0x8833ff } ) );
      // Cube parameters: width (x), height (y), depth (z), 
      //        (optional) segments along x, segments along y, segments along z
    var mccGeometry = new THREE.BoxGeometry( 1.5, 1.5, 1.5, 1, 1, 1 );
    mcc = new THREE.Mesh( mccGeometry, cubeMaterialArray );
    mcc.position.set(0,0,0);
    scene.add( mcc );	

    // cylinder
    // parameters:  radiusAtTop, radiusAtBottom, height, radialSegments, heightSegments
    cylinderGeometry = new THREE.CylinderGeometry( 0.30, 0.30, 0.80, 20, 4 );
    cylinder = new THREE.Mesh( cylinderGeometry, diffuseMaterial);
    cylinder.position.set(2, 0, 0);
    scene.add( cylinder );

    // cone:   parameters --  radiusTop, radiusBot, height, radialSegments, heightSegments
    coneGeometry = new THREE.CylinderGeometry( 0.0, 0.30, 0.80, 20, 4 );
    cone = new THREE.Mesh( coneGeometry, diffuseMaterial);
    cone.position.set(4, 0, 0);
    scene.add( cone);

    // torus:   parameters -- radius, diameter, radialSegments, torusSegments
    torusGeometry = new THREE.TorusGeometry( 1.2, 0.4, 10, 20 );
    torus = new THREE.Mesh( torusGeometry, diffuseMaterial);

    torus.rotation.set(0,0,0);     // rotation about x,y,z axes
    torus.scale.set(1,2,3);
    torus.position.set(6, 0, 0);   // translation

    scene.add( torus );
}

