var scene = null,
    camera = null,
    renderer = null,
    controls = null,
    prueba = null,
    path = null,
    path2 = null,
    Ggltf = null,
    loader= null;

const size = 20,
    divisions = 20;

    function startScene() {
        // Scene, Camera, Renderer
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x828282); //33FFC5
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
        const gridHelper = new THREE.GridHelper(size, divisions);
        scene.add(gridHelper);
    
        //Axes Helper
        // const axesHelper = new THREE.AxesHelper(5);
        // scene.add(axesHelper);
    
        const lightAmbient = new THREE.AmbientLight(0xfffff); // soft white light
        scene.add(lightAmbient);
    
        const light = new THREE.PointLight( 0xffffff, 1, 100 );
        light.position.set( 5,10,10 );
        scene.add( light );
    
    
    
    
    
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


}

//obtener archivo 3d y su direccion para cargar


function Upload3d() {

    var archivoInput = document.getElementById('archivoInput');
    var archivoRuta = archivoInput.value;
    var extCorrectas = /(.glb|.GLB|.gltf|.GLTF)$/i;

    if(!extCorrectas.exec(archivoRuta)){
        alert('Solamente puede previsualizar arhivos .PNG o .JPG')
        archivoInput.value='';
        return false;
    }else{
    if (archivoInput.files && archivoInput.files[0]) {
        var ver = new FileReader();
        ver.onload = function (e) {
        
            path = e.target.result;

            // console.log("path: "+path);
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

function CambiarCaracteristicas(option){
    switch (option) {
        case "mesh":
            const material = new THREE.MeshBasicMaterial({wireframe: true, color: 0X00ff00});
            gltf = new THREE.Mesh(material);
            path.style.color = "transparent";
            break;
            case value:
            
            break;
            case value:
            
            break;
            case value:
            
            break;
    
        default:
            break;
    }
}

function Animar(key){
    switch (key) {
        case "rotar":
            Ggltf.rotation.x +=5;
            break;
    
        default:
            break;
    }
}
