var scene = null,
    camera = null,
    renderer = null,
    controls = null,
    prueba = null,
    path = null,
    path2 = null,
    Ggltf = null,
    loader= null,
    gridHelper,
    axesHelper,
    lightAmbient,
    light;

const size = 20,
    divisions = 20;

    function startScene() {
        // Scene, Camera, Renderer
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0xbfd3aa); //33FFC5
        camera = new THREE.PerspectiveCamera(
            75,                                        //Angulo de visión(Abajo o arriba) 
            window.innerWidth / window.innerHeight,    //Relación de aspecto 16:9
            0.1,                                       //Mas cerca (no renderiza)
            1000);                                    //Mas lejos ()
            

        
            
        renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('cargarModels') });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    
        //Orbit controls
        controls = new THREE.OrbitControls(camera, renderer.domElement);
        camera.position.set(8, 7, 8);
        camera.rotation.y = 1.5;
        controls.update();
    
    
        //Grid Helper
        gridHelper = new THREE.GridHelper(size, divisions, 0x000);
        
    
        //Axes Helper
        axesHelper = new THREE.AxesHelper(5);
        scene.add(axesHelper);
    
        lightAmbient = new THREE.AmbientLight(0xFFFFFF); // soft white light
        
    
        light = new THREE.PointLight( 0xffffff, 1, 100 );
        
    
    
    
    
        animate();
        
        //Duck Model
        // loadDuck_Gltf("../src/other", "../src/other/Duck.gltf");
        //mousemove camera
        //document.getElementById("Models3d").addEventListener("mousemove", moveCamera);
    
        
    }
    
    function animate() {
    
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
        // console.log(camera.position);

        
        
    
    }
    
    window.addEventListener('resize', onWindowResize, false);
    
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    
    }

///--------------------------------------///////////-------------------------------------///

//cargar imagen

function loadDuck_Gltf(path) {
    // Instantiate a loader DUCK
    loader = new THREE.GLTFLoader();

    // // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    // const dracoLoader = new THREE.DRACOLoader();
    // dracoLoader.setDecoderPath(path);
    // loader.setDRACOLoader(dracoLoader);

    // Load a glTF resource
    loader.load(
        // resource URL
        path,
        // called when the resource is loaded
        function (gltf) {

            scene.add(gltf.scene);

            Ggltf = gltf;

            gltf.animations; // Array<THREE.AnimationClip>
            gltf.scene.position.set(0, 1, 0);
            gltf.scene.scale.set(10, 10, 10);// THREE.Group
            gltf.scenes; // Array<THREE.Group>
            gltf.cameras; // Array<THREE.Camera>
            gltf.asset; // Object

        },
        // called while loading is progressing
        function (xhr) {

            console.log((xhr.loaded / xhr.total * 100) + '% loaded');

        },
        // called when loading has errors
        function (error) {

            console.log('An error happened');

        }
    );
    
    // Load as usual, then revoke the blob URLs.
loader = new THREE.GLTFLoader( manager );
loader.load( 'fish.gltf', (gltf) => {

	scene.add( gltf.scene );
	objectURLs.forEach( ( url ) => URL.revokeObjectURL( url ) );

});

}

//obtener archivo 3d y su direccion para cargar


function Upload3d() {

    var archivoInput = document.getElementById('archivoInput');
    var archivoRuta = archivoInput.value;
    var extCorrectas = /(.glb|.GLB|.gltf|.GLTF)$/i;

<<<<<<< Updated upstream
    if(!extCorrectas.exec(archivoRuta)){
        alert('Solamente puede previsualizar arhivos .PNG o .JPG')
        archivoInput.value='';
        return false;
    }else{
=======
    // if(!extCorrectas.exec(archivoRuta)){
    //     alert('Solamente puede previsualizar arhivos .PNG o .JPG')
    //     archivoInput.value='';
    //     return false;
    // }else{
        for (let i = 0; i < array.length; i++) {
            
            if (archivoInput.files && archivoInput.files[i]) {
                var ver = new FileReader();
                ver.onload = function (e) {
                    document.getElementById('visorArchivo').innerHTML = '<embed src="' + e.target.result + '"width= "200" height= "200">';
                    path = e.target.result;
        
        
                    manager.onStart(ver.readAsDataURL(archivoInput.files[i]), archivoInput.files[i], files.length);
                    console.log(path);
                    var remplazo = path.replace("application/octet-stream", "model/gltf-binary");
                    console.log(remplazo);
                    loadDuck_Gltf("../src/other/", "../src/other/Duck.gltf");
                    var cod=remplazo.split(',')[1];
                    console.log("desencrip: "+cod);
                    var string = path+".gltf";
        
                    console.log("este es estring: "+string);
                    var desencrip = atob(cod);
                    console.log(desencrip);
                };
                ver.readAsDataURL(archivoInput.files[i]);
                //ver.readAsText(archivoInput.files[0]);
                // path = URL.createObjectURL(archivoInput.files[0]);
                // console.log("este es path final: "+path);
            }
            
        }
>>>>>>> Stashed changes
    if (archivoInput.files && archivoInput.files[0]) {
        var ver = new FileReader();
        ver.onload = function (e) {
        
            path = e.target.result;

<<<<<<< Updated upstream
            // console.log("path: "+path);
=======

        if()
            console.log(path);
>>>>>>> Stashed changes
            var remplazo = path.replace("application/octet-stream", "model/gltf-binary");
            // console.log(remplazo);
            loadDuck_Gltf(path);
            // var cod=remplazo.split(',')[1];
            // console.log(path.name);
            // var string = path+".gltf";

            // console.log("este es estring: "+string);
            // var desencrip = atob(cod);
            // console.log(desencrip);
        };
        ver.readAsDataURL(archivoInput.files[0]);
        URL.createObjectURL(archivoInput.files[0]);
        //ver.readAsText(archivoInput.files[0]);
        // path = URL.createObjectURL(archivoInput.files[0]);
        // console.log("este es path final: "+path);
    }
    }    
}

<<<<<<< Updated upstream
function CambiarVista(key){
    switch (key) {
        case "arriba":
            camera.position.set(0,13,0);
            break;
        case "abajo":
            camera.position.set(0,-13,0);
            break;
        case "frontal":
            camera.position.set(0,0,13);
            break;
        case "lateral":
            camera.position.set(14,0,0);
            break;
        case "perspectiva":
            camera.position.set(8, 7, 8);
            break;
        default:
            alert("esta vista no exite");
            break;
    }
    
}
=======
const manager = new THREE.LoadingManager();
manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
	console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
};

manager.onLoad = function ( ) {
	console.log( 'Loading complete!');
};

manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
	console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
};

manager.onError = function ( url ) {
	console.log( 'There was an error loading ' + url );
};

const loader = new THREE.OBJLoader( manager );
loader.load( 'file.obj', function ( object ) {
	//
} );

// Blob or File objects created when dragging files into the webpage.
const blobs = {'fish.gltf': blob1, 'diffuse.png': blob2, 'normal.png': blob3};

const manager = new THREE.LoadingManager();

// Initialize loading manager with URL callback.
const objectURLs = [];
manager.setURLModifier( ( url ) => {

	url = URL.createObjectURL( blobs[ url ] );
	objectURLs.push( url );
	return url;

} );

>>>>>>> Stashed changes

// function CambiarCaracteristicas(option){
//     switch (option) {
//         case "mesh":
//             light.position.set( 5,10,10 );
//         scene.add( light );
//             break;
//         case "gridHelper":
//                 scene.add(gridHelper);
//             break;
          
//     }
// }

function Añadirquitar(option){
    
    switch (option) {
        case "light":
            var luz = document.getElementById('flexCheckDefault');
            if (luz.value=="false"){
                light.position.set( 5,10,10 );
                scene.add( light );
                luz.value="true";
            }else if(luz.value=="true"){
                scene.remove(light);
                luz.value="false";
            }
            
            break;
            case "gridHelper":
                var grid = document.getElementById('flexCheckDefault2');
            if (grid.value=="false"){
                
                scene.add(gridHelper);
                grid.value = "true";
            }else if(grid.value=="true"){
                scene.remove(gridHelper);
                grid.value = "false";
            }
                
            break;
            case "lightAmbient":
                var ambient = document.getElementById('flexCheckDefault3');
            if (ambient.value=="false"){
                
                scene.add(lightAmbient);
                ambient.value = "true";
            }else if(ambient.value=="true"){
                scene.remove(lightAmbient);
                ambient.value = "false";
            }
                
            break;

            case "axesHelper":
                var axes = document.getElementById('flexCheckDefault4');
            if (axes.value=="false"){
                
                scene.add(axesHelper);
                axes.value = "true";
            }else if(axes.value=="true"){
                scene.remove(axesHelper);
                axes.value = "false";
            }
                
            break;
           
    }
}
