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
    createItem: (req, res)=> res.send ("Ruta para la vista Cargar Producto"),

    editItemView: async (req, res)=> {

        const  {id} = req.params;

        const [product] = await getOne(id)

        res.render (path.resolve(__dirname,"../views/admin/edit.ejs"),{
            title: "FUNKOSHOP - EDIT",
            product   
        });
    },

    editItem: (req, res)=> res.send ("Ruta para la Vista encontrar, editar y modificar producto por su Id"),
    deleteItem: (req, res)=> res.send ("Ruta para la Vista encontrar producto por su Id y borrarlo o eliminarlo")

}
module.exports = adminControllers;