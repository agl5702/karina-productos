const img_Card = document.querySelectorAll('.card-img-top');

function mensaje() {
    swal({
            title: "¿Quieres agregar al carrito?",
            text: "si quieres comprar, este producto, agregalo al carrito",
            buttons: true,
            dangerMode: false,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("¡Producto, añadido al carrito!", {
                    icon: "success",
                });
            } else {
                swal("Ok, no ha sido agregado");
            }
        });
}
img_Card.forEach(function(imagen) {
    imagen.addEventListener('click', mensaje);
});