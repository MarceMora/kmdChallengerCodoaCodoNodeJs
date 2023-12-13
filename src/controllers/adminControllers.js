const path = require("path");

const adminControllers = {
    admin: (req, res)=> {
    res.render (path.resolve(__dirname,"../views/admin/admin.ejs"));
    },
    createItem: (req, res)=> {
        res.render (path.resolve(__dirname,"../views/admin/create.ejs"));
    },
    createCarry: (req, res)=> res.send ("Ruta para la vista Cargar Producto"),

    editItem: (req, res)=> {
        res.render (path.resolve(__dirname,"../views/admin/edit.ejs"));
    },

    editModify: (req, res)=> res.send ("Ruta para la Vista encontrar, editar y modificar producto por su Id"),
    deleteItem: (req, res)=> res.send ("Ruta para la Vista encontrar producto por su Id y borrarlo o eliminarlo")

}
module.exports = adminControllers;