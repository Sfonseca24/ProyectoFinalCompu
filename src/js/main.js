var scene = null,
    camera = null,
    renderer = null,
    controls = null
    prueba = null;
    path;

const size = 20,
    divisions = 20;

function startScene() {
    // Scene, Camera, Renderer
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000); //33FFC5
    camera = new THREE.PerspectiveCamera(
        75,                                        //Angulo de visión(Abajo o arriba) 
        window.innerWidth / window.innerHeight,    //Relación de aspecto 16:9
        0.1,                                       //Mas cerca (no renderiza)
        1000);                                    //Mas lejos ()

    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('cargarModels') });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //Orbit controls
    // controls = new THREE.OrbitControls(camera, renderer.domElement);

    camera.position.set(0, 3, 0);

    const lightAmbient = new THREE.AmbientLight(0xF00FFFF); // soft white light
    scene.add(lightAmbient);

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    // controls.update();

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

function loadGltf(path2) {
    // Instantiate a loader DUCK
    const loader = new THREE.GLTFLoader();

    // Optional: Provide a DRACOLoader instance to decode compressed mesh data
    const dracoLoader = new THREE.DRACOLoader();
    dracoLoader.setDecoderPath(path2);
    loader.setDRACOLoader(dracoLoader);

    // Load a glTF resource
    loader.load(
        // resource URL
        path2,
        // called when the resource is loaded
        function (gltf) {

            scene.add(gltf.scene);

            gltf.animations; // Array<THREE.AnimationClip>
            gltf.scene.position.set(0, 0, 0);
            gltf.scene.scale.set(2, 2, 2);// THREE.Group
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


function validarExt(){
    
    var archivoInput = document.getElementById('archivoInput');
    var archivoRuta = archivoInput.value;
    //var extCorrectas = /(.PNG|.png|.JPG|.jpg)$/i;

    // if(!extCorrectas.exec(archivoRuta)){
    //     alert('Solamente puede previsualizar arhivos .PNG o .JPG')
    //     archivoInput.value='';
    //     return false;
    // }else{
        if (archivoInput.files && archivoInput.files[0]){
            var ver = new FileReader();
            ver.onload=function(e){
                //document.getElementById('visorArchivo').innerHTML = '<embed src="'+e.target.result+'"width= "200" height= "200">';
                path = e.target.result;
                //var cod=path.split(',')[1];
            };
            var ver2 =ver.readAsDataURL(archivoInput.files[0]);
            //ver.readAsText(archivoInput.files[0]);
            // path = URL.createObjectURL(archivoInput.files[0]);
            console.log("este es path final: "+ver2);
        }
    // }    
}




// // ejemplo de como cargar el contenido de un directorio
// function Cargar(){
//     document.querySelector("#cargar3").addEventListener("click", async ()=>{ 
//         try {
//           // showOpenFilePicker nos devuelve un array			
//           const referencias = await window.showOpenFilePicker({
//             types: [
//               { description: 'Imágenes', accept: { 'image/*': ['.png', '.gif', '.jpeg', '.jpg'] } },
//             ],
//             excludeAcceptAllOption: true, // no permitir la opcion de "cualquier tipo de archivo" ?
//             multiple: true // permitir elegir varios archivos ?
//           });
      
//           // por cada archivo...
//           referencias.forEach(async (refer)=>{					
//             // a partir de la referencia, obtenemos el archivo
//             var archivo = await refer.getFile();
      
//             // creamos un elemento imagen usando dicho archivo
//             var img = document.createElement("img");
//             img.src = URL.createObjectURL(archivo);
//             img.alt = archivo.name;
      
//             // añadimos dicho elemento imagen a la página
//             document.body.append(img);				
//           });				
//         } catch(err) {
//           console.log("Se ha producido un error o se ha cancelado la carga. " + err);
//         }  			
//       });
// }

// function startScene(){
//     // Configurar la escena, la cámara y el renderizador
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
// renderer.setSize(window.innerWidth, window.innerHeight);

// // Agregar luz a la escena
// const light = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
// scene.add(light);

//     // Cargar el archivo del modelo
//     const loadModel = (file) => {
//         const loader = file.name.endsWith('.gltf') ? new THREE.GLTFLoader() : new THREE.OBJLoader();
//         loader.load(URL.createObject);
//         console.log("es: "+loader);
//     }
// }

// function cargar(){

// }



