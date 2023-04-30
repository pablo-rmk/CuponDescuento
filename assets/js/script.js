function mostrarCodigo(){

    let alerta = 'Para obtener un código de descuento debe aceptar los Términos y Condiciones.';

    if (document.getElementById('checkbox').checked == true) {
        document.getElementById('codigo').innerText = 'MNO123ST';
    } else {
        alert(alerta);
    };

}; 