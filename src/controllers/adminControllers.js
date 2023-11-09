const adminControllers = {
    admin: (req, res)=> res.send ("Ruta para la Vista de Administrador"),
    create: (req, res)=> res.send ("Ruta para la vista Crear Producto"),
    create: (req, res)=> res.send ("Ruta para la vista Cargar Producto"),
    edit,id: (req, res)=> res.send ("Ruta para la Vista encontrar y Editar Producto por su Id "),
    edit,id: (req, res)=> res.send ("Ruta para la Vista encontrar, editar y modificar producto por su Id"),
    delete: (req, res)=> res.send ("Ruta para la Vista encontrar producto por su Id y borrarlo o eliminarlo"),

}
module.export = adminControllers;