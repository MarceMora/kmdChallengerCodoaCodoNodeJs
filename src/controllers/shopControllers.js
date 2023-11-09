const shopControllers = {
    shop: (req, res)=> res.send ("Ruta para la Vista de la Tienda"),
    contacto: (req, res)=> res.send ("Ruta para la Vista del formulario de Contacto"),
    item,id: (req, res)=> res.send ("Ruta para encontrar y obtener un producto por numero de identificacion"),
    item,id,add: (req, res)=> res.send ("Ruta para encontrar y agregar un producto al carrito de compras"),
    carrito: (req, res)=> res.send ("Ruta para la Vista Carrito"),
    carrito: (req, res)=> res.send ("Ruta para ir a Chequear Carrito de Compras")

}

module.export = shopControllers;