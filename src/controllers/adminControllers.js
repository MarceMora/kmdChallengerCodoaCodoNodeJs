const path = require("path");
const {getAll,getOne} = require("../models/productosModel");


const adminControllers = {
    adminView: async (req, res)=> {

        const datos = await getAll();

    res.render (path.resolve(__dirname,"../views/admin/admin.ejs"),{
        title: "FUNKOSHOP - ADMIN",
        datos
    });
    },
    createItemView: (req, res)=> {
        res.render (path.resolve(__dirname,"../views/admin/create.ejs"),{
            title: "FUNKOSHOP - CREATE",
        });
    },
    createItem: (req, res)=> res.send ("Ruta para la vista de agregar un nuevo Item"),

    editItemView: async (req, res)=> {

        const  {id} = req.params;

        const [product] = await getOne(id)

        res.render (path.resolve(__dirname,"../views/admin/edit.ejs"),{
            title: "FUNKOSHOP - EDIT",
            product   
        });
    },

    editItem: (req, res)=> res.send ("Ruta para la Vista de Editar y Modificar Item"),
    deleteItem: (req, res)=> res.send ("Ruta para la Vista de Borra Item")

}
module.exports = adminControllers;