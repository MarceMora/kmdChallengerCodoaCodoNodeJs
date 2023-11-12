const shopControllers = {
    shop: (req, res)=> res.send ("Ruta para la Vista de la Tienda"),
    contacto: (req, res)=> res.send ("Ruta para la Vista del formulario de Contacto"),
    itemGet: (req, res)=> res.send ("Ruta para encontrar y obtener un producto por numero de identificacion"),
    itemAdd: (req, res)=> res.send ("Ruta para encontrar y agregar un producto al carrito de compras"),
    carritoView: (req, res)=> res.send ("Ruta para la Vista Carrito"),
    carritoCheck: (req, res)=> res.send ("Ruta para ir a Chequear Carrito de Compras")

}

module.exports = shopControllers;