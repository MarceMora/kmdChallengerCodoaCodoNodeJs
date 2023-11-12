const adminControllers = {
    admin: (req, res)=> res.send ("Ruta para la Vista de Administrador"),
    createItem: (req, res)=> res.send ("Ruta para la vista Crear Producto"),
    createCarry: (req, res)=> res.send ("Ruta para la vista Cargar Producto"),
    editItem: (req, res)=> res.send ("Ruta para la Vista encontrar y Editar Producto por su Id "),
    editModify: (req, res)=> res.send ("Ruta para la Vista encontrar, editar y modificar producto por su Id"),
    deleteItem: (req, res)=> res.send ("Ruta para la Vista encontrar producto por su Id y borrarlo o eliminarlo")

}
module.exports = adminControllers;