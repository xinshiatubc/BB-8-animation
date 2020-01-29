//    pencil.js

////////////////////////////////////////////////////////////////////////
// initPencilMotions()
////////////////////////////////////////////////////////////////////////

function initPencilMotions() {

      // keyframes for pencil:    name, dt, [x0,y0, x1,y1, x2,y2, x3,y3, px,py, theta]
/*    pencilMotion.addKeyFrame(new Keyframe('keyA', 0.0, [0, -2]));
    pencilMotion.addKeyFrame(new Keyframe('keyB', 2.0, [5, 2]));
    pencilMotion.addKeyFrame(new Keyframe('keyA', 2.0, [0, -2]));
    pencilMotion.addKeyFrame(new Keyframe('keyB', 2.0, [-5, 2]));
    pencilMotion.addKeyFrame(new Keyframe('keyA', 2.0, [0, -2]));*/
/*    pencilMotion.addKeyFrame(new Keyframe('keyA', 0.0, [0,0,  0,0,  0,0,  0,8,  0,-5, 90]));
    pencilMotion.addKeyFrame(new Keyframe('keyB', 2.0, [0,0,  0,0,  0,0,  0,8,  0,-5,  90]));
    pencilMotion.addKeyFrame(new Keyframe('keyA', 2.0, [0,0,  0,0,  0,0,  0,8,  0,-5,  90]));
    pencilMotion.addKeyFrame(new Keyframe('keyB', 2.0, [-15,2,  0,0,  0,0,  0,0,  0,0,  90]));
    pencilMotion.addKeyFrame(new Keyframe('keyA', 2.0, [0,-2,  0,0,  0,0,  0,0,  0,0, 90 ]));*/

    //bb8 pushes lightsaber to the left twice
    pencilMotion.addKeyFrame(new Keyframe('start', 0.0, [0,0,  0,0,  0,0,  0,8,  0,-5, 90]));
    pencilMotion.addKeyFrame(new Keyframe('moveLeft', 0.5, [0,0,  0,0,  0,0,  0,8,  -3,-5, 90]));
    pencilMotion.addKeyFrame(new Keyframe('stop', 1.0, [0,0,  0,0,  0,0,  0,8,  -1,-5, 90]));
    pencilMotion.addKeyFrame(new Keyframe('moveLeft', 0.5, [0,0,  0,0,  0,0,  0,8,  -3,-5, 90]));
    pencilMotion.addKeyFrame(new Keyframe('stop', 1.0, [0,0,  0,0,  0,0,  0,8,  -3,-5, 90]));
    //angry lightsaber
    pencilMotion.addKeyFrame(new Keyframe('grow', 0.3, [0,0,  0,0,  0,0,  0,-2,  -3,-5, 90]));
    pencilMotion.addKeyFrame(new Keyframe('stop', 1.0, [0,0,  0,0,  0,0,  0,-2,  -3,-5, 90]));
    pencilMotion.addKeyFrame(new Keyframe('bendLeft', 0.5, [6,0,  0,0,  0,0,  15,2,  -3,-4.5,  90]));
    pencilMotion.addKeyFrame(new Keyframe('bendRight', 0.5, [-6,0,  0,0,  0,0,  -15,2,  -3,-5,  90]));
    pencilMotion.addKeyFrame(new Keyframe('bendLeft', 0.5, [6,0,  0,0,  0,0,  15,2,  -3,-4.5,  90]));
    pencilMotion.addKeyFrame(new Keyframe('bendRight', 0.5, [-6,0,  0,0,  0,0,  -15,2,  -3,-5,  90]));
    pencilMotion.addKeyFrame(new Keyframe('stop', 0.3, [0,0,  0,0,  0,0,  0,-2,  -3,-5, 90]));
    //lightsaber hitting bb8
    pencilMotion.addKeyFrame(new Keyframe('stop', 1.5, [0,0,  0,0,  0,0,  0,-2,  -3,-5, 90]));
    pencilMotion.addKeyFrame(new Keyframe('falldown', 0.5, [0,0,  0,0,  0,0,  0,-2,  -3,-2, 0]));
    pencilMotion.addKeyFrame(new Keyframe('stop', 0.5, [0,0,  0,0,  0,0,  0,-2,  -3,-2, 0]));
    pencilMotion.addKeyFrame(new Keyframe('chasing', 0.3, [0,0,  0,0,  0,0,  0,-2,  9,-2, 0]));
    pencilMotion.addKeyFrame(new Keyframe('stop', 0.5, [0,0,  0,0,  0,0,  0,-2,  9,-2, 0]));
    pencilMotion.addKeyFrame(new Keyframe('stop', 1.5, [0,0,  0,0,  0,0,  0,-2,  9,-2, 0]));
    pencilMotion.addKeyFrame(new Keyframe('rotating', 1.0, [-15,2,  0,0,  0,0,  6,0,  12,-2,  -3510]));
    pencilMotion.addKeyFrame(new Keyframe('stop', 0.3, [0,0,  0,0,  0,0,  0,-2,  12,-5,  -3510]));
    //lightsaber hitting bb8's head
    pencilMotion.addKeyFrame(new Keyframe('stop', 0.3, [0,0,  0,0,  0,0,  0,-2,  12,-5,  -3510]));
    pencilMotion.addKeyFrame(new Keyframe('astonishing', 0.9, [3,0,  0,0,  0,0,  15,-4, 12,-5,  -3510]));
    pencilMotion.addKeyFrame(new Keyframe('stop', 0.5, [0,0,  0,0,  0,0,  0,-2,  12,-5,  -3510]));
    pencilMotion.addKeyFrame(new Keyframe('stop', 0.3, [0,0,  0,0,  0,0,  0,-2,  12,-5,  -3510]));
    pencilMotion.addKeyFrame(new Keyframe('runLeft', 1.1, [-3,0,  0,0,  0,0,  -15,-4, 6,-5,  -3510]));
    pencilMotion.addKeyFrame(new Keyframe('stop', 0.5, [-3,0,  0,0,  0,0,  -15,-4, 6,-5,  -3510]));
    //lightsaber up to sky
    pencilMotion.addKeyFrame(new Keyframe('rotating', 1.0, [15,2,  0,0,  0,0,  -6,0,  3,5,  90]));
    pencilMotion.addKeyFrame(new Keyframe('landed', 0.5, [0,0,  0,0,  0,0,  0,-2,  0,-5, 90]));
    pencilMotion.addKeyFrame(new Keyframe('stop', 2.5, [0,0,  0,0,  0,0,  0,-2,  0,-5, 90]));

    pencilMotion.addKeyFrame(new Keyframe('start', 0.5, [0,0,  0,0,  0,0,  0,8,  0,-5, 90]));



    var audioLoader = new THREE.AudioLoader();
    var listener = new THREE.AudioListener();
    camera.add( listener );
                
    
    var lightsaberSound = new THREE.PositionalAudio( listener );
    audioLoader.load( 'sound/lightsaber_sound.mp3', function( buffer ) {
        lightsaberSound.setBuffer( buffer );
        lightsaberSound.setRefDistance( 1000 );
        lightsaberSound.setLoop(true);
        lightsaberSound.play();
    });

}



/////////////////////////////////////	
// initPencilObject()
/////////////////////////////////////	

function initPencilObject() {
      // image from https://pixabay.com/p-3374506/?no_redirect 
    var pencilTexture = new THREE.TextureLoader().load('images/lightsaber.png');  
    pencilTexture.wrapS = pencilTexture.wrapT = THREE.RepeatWrapping;
    var pencilMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, 
						    map: pencilTexture, side: THREE.DoubleSide });
    var geom = new THREE.Geometry(); 

    var pencilCoords = [];
    var pencilCoords = [
//        0             1              2           3            4            5           6           7          8
	0.04, 0.41,	0.1,  0.41,    0.2, 0.41,  0.3, 0.41,   0.4, 0.41,   0.5, 0.41,  0.6, 0.41,  0.7, 0.41, 0.8, 0.41,
//        9             10             11          12           13           14          15          16         17
	0.04, 0.59,	0.1,  0.59,    0.2, 0.59,  0.3, 0.59,   0.4, 0.59,   0.5, 0.59,  0.6, 0.59,  0.7, 0.59, 0.8, 0.59,
//       18.        19
	0.97, 0.41,  0.97, 0.59];

/*    var pencilCoords = [
//        0             1              2           3            4            5           6           7          8
    0.04, 0.31, 0.1,  0.31,    0.2, 0.31,  0.3, 0.31,   0.4, 0.31,   0.5, 0.31,  0.6, 0.31,  0.7, 0.31, 0.8, 0.31,
//        9             10             11          12           13           14          15          16         17
    0.04, 0.49, 0.1,  0.49,    0.2, 0.49,  0.3, 0.49,   0.4, 0.49,   0.5, 0.49,  0.6, 0.49,  0.7, 0.49, 0.8, 0.49,
//       18.        19
    0.97, 0.31,  0.97, 0.49];*/
    var vertList = [];
    pencil_uvList = [];
    for (var n=0; n<pencilCoords.length; n+=2) {
	geom.vertices.push(new THREE.Vector3( pencilCoords[n], pencilCoords[n+1], 0));   // xyz coords
	pencil_uvList.push(new THREE.Vector2( pencilCoords[n], pencilCoords[n+1] ));    // texture coords
    }
    geom.faces.push( new THREE.Face3( 0, 1, 10 ) );
    geom.faces.push( new THREE.Face3( 0, 10, 9 ) );
    geom.faces.push( new THREE.Face3( 1, 2, 11 ) );
    geom.faces.push( new THREE.Face3( 1, 11, 10 ) );
    geom.faces.push( new THREE.Face3( 2, 3, 12 ) );
    geom.faces.push( new THREE.Face3( 2, 12, 11 ) );
    geom.faces.push( new THREE.Face3( 3, 4, 13 ) );
    geom.faces.push( new THREE.Face3( 3, 13, 12 ) );
    geom.faces.push( new THREE.Face3( 4, 5, 14 ) );
    geom.faces.push( new THREE.Face3( 4, 14, 13 ) );
    geom.faces.push( new THREE.Face3( 5, 6, 15 ) );
    geom.faces.push( new THREE.Face3( 5, 15, 14 ) );
    geom.faces.push( new THREE.Face3( 6, 7, 16 ) );
    geom.faces.push( new THREE.Face3( 6, 16, 15 ) );
    geom.faces.push( new THREE.Face3( 7, 8, 17 ) );
    geom.faces.push( new THREE.Face3( 7, 17, 16 ) );
    geom.faces.push( new THREE.Face3( 8, 18, 17 ) );
    geom.faces.push( new THREE.Face3( 17, 18, 19 ) );// add new vertex so need to add new face
    geom.computeFaceNormals();
    geom.computeBoundingBox();
    var max = geom.boundingBox.max, min = geom.boundingBox.min;
    var offset = new THREE.Vector2(0 - min.x, 0 - min.y);
    var range = new THREE.Vector2(max.x - min.x, max.y - min.y);
    var faces = geom.faces;
    geom.faceVertexUvs[0] = [];
    for (var i = 0; i < faces.length ; i++) {
	var v1 = geom.vertices[faces[i].a], 
            v2 = geom.vertices[faces[i].b], 
            v3 = geom.vertices[faces[i].c];
	geom.faceVertexUvs[0].push([
	    new THREE.Vector2(v1.x, v1.y),
	    new THREE.Vector2(v2.x, v2.y),
	    new THREE.Vector2(v3.x, v3.y)
	]);
    }
    geom.uvsNeedUpdate = true;

    pencil = new THREE.Mesh( geom, pencilMaterial);
    pencil.position.set(-10,-15,15);
    pencil.rotation.z = Math.PI/2;
    pencil.scale.x = 5.0;
    pencil.scale.y = 2.0; //thiner the lightsaber
    pencil.scale.z = 5.0;
    pencil.castShadow = true;    pencil.receiveShadow = false;
    scene.add(pencil);

      // Bezier curve

      // Bezier control points
    bezCpGeometry = new THREE.SphereGeometry(0.015, 16, 16);    // show the control point sphere: rad, nseg, nseg
    bezCpSphereList = [];
    bezCpList = [];
    for (var n=0; n<4; n++) {
	var x=n/3, y=0.5, z=0; //create control point at 0, 1/3, 2/3, 1
	bezCpList.push(new THREE.Vector3(x,y,z));
          // create a control point sphere
	var bezCps = new THREE.Mesh(bezCpGeometry, blueMaterial);
	bezCps.position.set(x,y,z);
	pencil.add(bezCps);
	bezCpSphereList.push(bezCps);
    }

      // Bezier curve
    bezNpts = 10;
    lineMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff, linewidth: 2 });
    lineGeometry = new THREE.BufferGeometry();
    linePositions = new Float32Array( bezNpts * 6 ); // 3 vertices per point    // attributes
    lineGeometry.addAttribute( 'position', new THREE.BufferAttribute( linePositions, 3 ) );
    lineObj = new THREE.Line( lineGeometry,  lineMaterial );
    pencil.add( lineObj );
    bezTvec = [];
    for (var n=0, i=0; n<bezNpts; n++) {      // set the vertex positions
	var t=n/(bezNpts-1);
	bezTvec.push(t);
	linePositions[ i++ ] = n/(bezNpts-1);
	linePositions[ i++ ] = 0.5;
	linePositions[ i++ ] = 0;
    }
    lineObj.geometry.setDrawRange( 0, bezNpts );   
}

///////////////////////////////////////////////////////////////////////////////////////
// updatePencil(avars)
///////////////////////////////////////////////////////////////////////////////////////

function updatePencil(avars) { ///avars: x0,y0,x1,y1,x2,y2,x3,y3,px,py,theta
    pencil.position.set(-2+avars[8],7+avars[9],17); //set the position of pencil using x3 and y3

      // update a control point    using avars[0], avars[1]
      // NOTE:  control points live and move in the local frame of the pencil.  
      //        the pencil has unit size, and is horizontal at y=0.5, with the tip to the right
     var deg2rad = Math.PI/180;
     var theta1 = avars[10]*deg2rad;
     pencil.rotation.z = theta1; 

    //update x0,y0
    var yNew = 0.5 + 0.1*avars[0];
    var xNew = 0.0 - 0.1*avars[1];
    bezCpList[0].x = xNew;           // change y of the first control point
    bezCpList[0].y = yNew;           // change y of the first control point
    bezCps = bezCpSphereList[0];     // update position of the corresponding sphere
    bezCps.position.set(xNew, yNew, 0);

    //update x1,y1
    var yNew1 = 0.5 + 0.1*avars[2];
    var xNew1 = 0.33 - 0.1*avars[3];
    bezCpList[1].x = xNew1;           // change y of the first control point
    bezCpList[1].y = yNew1;           // change y of the first control point
    bezCps = bezCpSphereList[1];     // update position of the corresponding sphere
    bezCps.position.set(xNew1, yNew1, 0);

    //update x2,y2
    var yNew2 = 0.5 + 0.1*avars[4];
    var xNew2 = 0.66 - 0.1*avars[5];
    bezCpList[2].x = xNew2;           // change y of the first control point
    bezCpList[2].y = yNew2;           // change y of the first control point
    bezCps = bezCpSphereList[2];     // update position of the corresponding sphere
    bezCps.position.set(xNew2, yNew2, 0);

    //update x3,y3
    var yNew3 = 0.5 + 0.1*avars[6];
    var xNew3 = 1.0 - 0.1*avars[7];
    bezCpList[3].x = xNew3;           // change y of the first control point
    bezCpList[3].y = yNew3;           // change y of the first control point
    bezCps = bezCpSphereList[3];     // update position of the corresponding sphere
    bezCps.position.set(xNew3, yNew3, 0);

    updatePencil_details();    // update the Bezier curve and pencil geometry based on control points

}

function updatePencil_details() {

    Mbez = new THREE.Matrix4;
    Mbez.set(-1, 3, -3, 1,
             3, -6, 3, 0,
             -3, 3, 0, 0,
	     1, 0, 0, 0);

    // compute the curve positions at the curve sample t values

    positions = lineObj.geometry.attributes.position.array;
    Gx = new THREE.Vector4(bezCpList[0].x, bezCpList[1].x, bezCpList[2].x, bezCpList[3].x);
    Gy = new THREE.Vector4(bezCpList[0].y, bezCpList[1].y, bezCpList[2].y, bezCpList[3].y);
    Gz = new THREE.Vector4(bezCpList[0].z, bezCpList[1].z, bezCpList[2].z, bezCpList[3].z);
    for (var n=0, i=0; n<bezNpts; n++) {      // set the vertex positions
	var t = bezTvec[n];
	var tmpVec;
	var T = new THREE.Vector4(t*t*t, t*t, t, 1);    // build T vector

	tmpVec = Gx.clone();         // x = T M Gx
	tmpVec.applyMatrix4(Mbez);
	var vx = T.dot(tmpVec);
	tmpVec = Gy.clone();         // y = T M Gy
	tmpVec.applyMatrix4(Mbez);
	var vy = T.dot(tmpVec);
	tmpVec = Gz.clone();         // z = T M Gz
	tmpVec.applyMatrix4(Mbez);
	var vz = T.dot(tmpVec);

	positions[ i++ ] = vx;
	positions[ i++ ] = vy;
	positions[ i++ ] = vz;
    }
    lineObj.geometry.attributes.position.needsUpdate = true; 

    // Compute new pencil vertices, based on their UV coordinates.
    // In local coordiantes, the Bezier curve and the pencil lie horizontally along y=0.5,
    // with the eraser at x=0 and the tip at x=1
    
    var vertices = pencil.geometry.vertices;
     var nVert = pencil_uvList.length;
    for (var n=0; n<nVert; n++) {
	var t = pencil_uvList[n].x;
	var yOffset = pencil_uvList[n].y - 0.5;
	var tmpVec;
	var T = new THREE.Vector4(t*t*t, t*t, t, 1);    // build T vector

	tmpVec = Gx.clone();         // x = T M Gx
	tmpVec.applyMatrix4(Mbez);
	var vx = T.dot(tmpVec);
	tmpVec = Gy.clone();         // y = T M Gy
	tmpVec.applyMatrix4(Mbez);
	var vy = T.dot(tmpVec);
	tmpVec = Gz.clone();         // z = T M Gz
	tmpVec.applyMatrix4(Mbez);
	var vz = T.dot(tmpVec);

	vertices[n].x = vx;
	vertices[n].y = vy + yOffset;
	vertices[n].z = vz ;
    }

    pencil.geometry.verticesNeedUpdate = true; 
}
