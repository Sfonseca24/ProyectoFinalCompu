function validarExt(){
    var archivoInput = document.getElementById('archivoInput');
    var archivoRuta = archivoInput.value;
    var extCorrectas = /(.PNG|.png|.JPG|.jpg)$/i;

    if(!extCorrectas.exec(archivoRuta)){
        alert('Solamente puede previsualizar arhivos .PNG o .JPG')
        archivoInput.value='';
        return false;
    }else{
        if (archivoInput.files && archivoInput.files[0]){
            var ver = new FileReader();
            ver.onload=function(e){
                document.getElementById('visorArchivo').innerHTML = '<embed src="'+e.target.result+'"width= "200" height= "200">';
    
            };
            ver.readAsDataURL(archivoInput.files[0]);
        }
    }

    
}