var path;

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
                document.getElementById('visorArchivo').innerHTML = 'embed src="'+e.target.result+'"width= "200" height= "200"';
                path = e.target.result;
                console.log(path);
            };
            //ver.readAsDataURL(archivoInput.files[0]);
            ver.readAsText(archivoInput.files[0]);
        }
    // }    
}


// function loadDuck_Gltf(path) {
//     // Instantiate a loader DUCK
//     const loader = new THREE.GLTFLoader();

//     // Optional: Provide a DRACOLoader instance to decode compressed mesh data
//     const dracoLoader = new THREE.DRACOLoader();
//     dracoLoader.setDecoderPath(path);
//     loader.setDRACOLoader(dracoLoader);

//     // Load a glTF resource
//     loader.load(
//         // resource URL
//         path,
//         // called when the resource is loaded
//         function (gltf) {

//             scene.add(gltf.scene);

//             gltf.animations; // Array<THREE.AnimationClip>
//             gltf.scene.position.set(10, 1, 10);
//             gltf.scene.scale.set(2, 2, 2);// THREE.Group
//             gltf.scenes; // Array<THREE.Group>
//             gltf.cameras; // Array<THREE.Camera>
//             gltf.asset; // Object

//         },
//         // called while loading is progressing
//         function (xhr) {

//             console.log((xhr.loaded / xhr.total * 100) + '% loaded');

//         },
//         // called when loading has errors
//         function (error) {

//             console.log('An error happened');

//         }
//     );


// }