const mensaje = document.getElementById('mensaje');
const selectTipo = document.getElementById('tipo');
let formValido = true;

mensaje.addEventListener('keyup', function(event) {
    const valorInput = event.target.value.toLowerCase();

    if (valorInput.includes('compra')) {
        selectTipo.value = 'compra';
    }

    if (valorInput.includes('consulta')) {
        selectTipo.value = 'consulta';
    }

    if (valorInput.includes('venta')) {
        selectTipo.value = 'venta';
    }
});

function validarFormulario(){
    const forms = document.querySelectorAll(".needs-validation");
    this.valido = true;

    Array.from(forms).forEach((form) => {
        if (!form.checkValidity()) {
            this.valido = false;
        }

        form.classList.add("was-validated");
    });

    enviarMensaje();
}

function enviarMensaje(){
    if(this.valido){
        alert("Mensaje enviado correctamente\n\nNos comunicaremos contigo en brevedad");
    }else{
        alert("Lo sentimos, el formulario no está rellenado correctamente");
    }
}


