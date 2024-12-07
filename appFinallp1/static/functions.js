    // Precios de los tickets
    const precios = {
        General: 1500,  // General 
        VIP: 2395,     // VIP
        Premium: 3295 // All Access
    };
// Mostrar campo de cantidad cuando se selecciona un tipo de ticket
document.getElementById("tipoTicket").addEventListener("change", function() {
    const tipoTicket = this.value;
    const cantidadContainer = document.getElementById("cantidadContainer");
    const cantidadInput = document.getElementById("cantidadTickets");
    const precioTotal = document.getElementById("precioTotal");

    if (precios[tipoTicket]) {
        cantidadContainer.style.display = "block"; // Mostrar el campo de cantidad
        const precio = precios[tipoTicket];
        const cantidad = cantidadInput.value || 1;
        precioTotal.textContent = `Precio Total: DOP$ ${precio} x ${cantidad} = DOP$ ${precio * cantidad}`;
    } else {
        cantidadContainer.style.display = "none";  // Ocultar el campo de cantidad
        precioTotal.textContent = "";             // Limpiar el precio total
    }
});

// Actualizar el precio total cuando cambia la cantidad
document.getElementById("cantidadTickets").addEventListener("input", function() {
    const tipoTicket = document.getElementById("tipoTicket").value;
    const cantidad = this.value || 1;
    const precioTotal = document.getElementById("precioTotal");

    if (precios[tipoTicket]) {
        const precio = precios[tipoTicket];
        precioTotal.textContent = `Precio Total: DOP$ ${precio} x ${cantidad} = DOP$ ${precio * cantidad}`;
    }
});

/*funcion del formulario para enviar correo si se quiere realizar una consulta*/ 
function sendEmail() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const comentario = document.getElementById('comentario').value;

    const mailtoLink = `mailto:${email}?subject=Consulta de ${nombre}&body=Teléfono: ${telefono}%0D%0AComentario: ${comentario}`;
    
    // Muestra el modal de confirmación
    document.getElementById('myModal').style.display = 'block';

}
// Se cierra el modal
document.getElementById('closeModal').onclick = function() {
    document.getElementById('myModal').style.display = 'none';
};

function showConfirmation() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const tipoTicket = document.getElementById('tipoTicket').value;
    const cantidadTickets = document.getElementById('cantidadTickets').value || 1;
    const fechaFuncion = document.getElementById('fechaFuncion').value;
    
    // Cálculo del precio total (por simplificación, puedes hacer ajustes)
    let precio = 0;
    if (tipoTicket === 'General') precio = 1500;
    if (tipoTicket === 'VIP') precio = 2395;
    if (tipoTicket === 'Premium') precio = 3295;

    const total = precio * cantidadTickets;
    
    // Mostrar detalles en el modal
    document.getElementById('confirmNombre').textContent = nombre;
    document.getElementById('confirmEmail').textContent = email;
    document.getElementById('confirmTipoTicket').textContent = tipoTicket;
    document.getElementById('confirmCantidad').textContent = cantidadTickets;
    document.getElementById('confirmFecha').textContent = fechaFuncion;
    document.getElementById('confirmTotal').textContent = `DOP$${total}`;

    // Generar el código QR
    QRCode.toDataURL(`Ticket: ${tipoTicket}\nNombre: ${nombre}\nCantidad: ${cantidadTickets}\nTotal: DOP$${total}`, function (err, url) {
        if (err) throw err;
        document.getElementById('ticketQRCode').innerHTML = `<img src="${url}" alt="QR Code" width="150" height="150">`;
    });

    // Configurar enlace mailto para enviar el correo
    const emailLink = document.getElementById('emailLink');
    emailLink.href = `mailto:${email}?subject=Confirmación%20de%20Compra%20en%20Alligator%20Park&body=Gracias%20por%20tu%20compra.%0A%0A- Nombre: ${nombre}%0A- Correo: ${email}%0A- Tipo de Ticket: ${tipoTicket}%0A- Cantidad: ${cantidadTickets}%0A- Fecha: ${fechaFuncion}%0A- Total: DOP$${total}`;
    
    // Mostrar el modal
    const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    confirmationModal.show();
}