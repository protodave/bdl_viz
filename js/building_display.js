
var renderer, scene;

function display_building(building_data) {

    var floors = building_data.floors;
    var camera, controls;
    var width = 800, height = 400;

    // dom
    var container = document.getElementById('building');

    // Cleanup any previous renderer and scene
    if (renderer !== undefined) {
        cleanupScene();
        container.removeChild( renderer.domElement );
        container.innerHTML = null;
        renderer = null;
    }

    // info
    var info = document.createElement( 'div' );
    info.style.position = 'absolute';
    info.style.top = '10px';
    info.style.width = width + "px";
    info.style.textAlign = 'center';
    info.style.color = '#bbb';
    info.style.backgroundColor = 'transparent';
    info.style.zIndex = '1'; // renderer domElement covers it up
    info.style.fontFamily = 'Monospace';
    info.innerHTML = 'drag mouse to rotate camera';
    container.appendChild( info );


    // renderer
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    // scene
    scene = new THREE.Scene();

    // camera
    camera = new THREE.PerspectiveCamera( 45, width / height, 1, 1000 );
    camera.position.set( 0, 0, 225);
    camera.lookAt(scene.position);
    scene.add(camera);

    // controls
    controls = new THREE.OrbitControls( camera );
    window.controls = controls;

    for (var i = 0; i < floors.length; i++) {
        for (var j = 0; j < floors[i].spaces.length; j++) {
            // console.log("\t" + floors[i].spaces[j].name + " [Vectors: " + floors[i].spaces[j].polygon.vectors.length + "]");

            var shapePoints = [];
            if (floors[i].spaces[j].polygon !== undefined) {
                for (var k = 0; k < floors[i].spaces[j].polygon.vectors.length; k++) {
                    shapePoints.push( new THREE.Vector2 ( floors[i].spaces[j].polygon.vectors[k].x, floors[i].spaces[j].polygon.vectors[k].y ) );
                }

            }

            var spaceShape = new THREE.Shape( shapePoints );
            addShape(spaceShape, floors[i].z);
            addOutline(shapePoints, floors[i].z);
        }
    }

    function addShape(shape, z_pos) {
        var geometry = shape.makeGeometry();
        var material = new THREE.MeshPhongMaterial({ color: 0x00FF00, ambient: 0x00FF00, transparent: true, opacity: 0.50 });
        material.side = THREE.DoubleSide;
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.set( -150, -100, z_pos );
        scene.add(mesh);
    }

    function addOutline(points, z_pos) {
        var geometry = new THREE.Geometry();
        for (var i = 0; i < points.length; i++) {
            geometry.vertices.push( new THREE.Vector3( points[i].x -150, points[i].y - 100, z_pos ) );
        }
        geometry.vertices.push( new THREE.Vector3( points[0].x - 150, points[0].y - 100, z_pos) ); // close it up
        var material = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1, transparent: true, opacity: 0.8 } );
        var line = new THREE.Line( geometry, material );
        scene.add( line );
    }

    var ambientLight = new THREE.AmbientLight(0xbbbbbb);
    scene.add(ambientLight);

    // axes
    // scene.add( new THREE.AxisHelper() );

    controls.rotateDown(1);

    renderer.setSize(width, height);

    // render
    function render() {
        renderer.render( scene, camera );
    }

    // animate
    function animate() {
        requestAnimationFrame( animate );
        controls.update();
        render();
    }
    animate();

    function cleanupScene() {
        $.each(scene.__objects, function(idx, obj) {
            if (obj !== undefined) {
                // console.log(obj);
                scene.remove(obj);
                if (obj.geometry) {
                  obj.geometry.dispose();
                }
                if (obj.material) {
                  if (obj.material instanceof THREE.MeshFaceMaterial) {
                    $.each(obj.material.materials, function(idx, obj) {
                      obj.dispose();
                    });
                  } else {
                    obj.material.dispose();
                  }
                }
                if (obj.dispose) {
                  obj.dispose();
                }
            }
        });
    }
}