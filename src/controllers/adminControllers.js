const path = require("path");
const {getAll, getOne, create, deleteOne} = require("../models/productosModel");


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

    createItem: async (req, res)=> {
          /* console.table(req.body) */

        const product_schema = {
        product_name: req.body.name,
        product_description: req.body.description,
        price: parseInt(req.body.price), 
        stock:(req.body.stock), 
        discount:(req.body.discount),
        sku: req.body.sku,  
        dues:(req.body.dues),
        image_front: "/product/" + req.files[0].filename,
        image_back: "/product/" + req.files[1].filename,
        licence_id:(req.body.licence),
        category_id:(req.body.category),
        
    }
        /* const result = */ await create([Object.values(product_schema)]);
        /*console.log(result);*/
    
        
       /*
        console.log([Object.values(product_schema)]);
        ;*/
         

        res.redirect("/admin");

    },


    editItemView: async (req, res)=> {

        const  {id} = req.params;

        const [product] = await getOne(id);

        res.render (path.resolve(__dirname,"../views/admin/edit.ejs"),{
            title: "FUNKOSHOP - EDIT",
            product   
        });
    },

    editItem: (req, res)=> res.send ("Ruta para la Vista de Editar y Modificar Item"),

    deleteItem: async (req, res)=> {
        const { id } = req.params;
       /* res.send ("Quieres Borrar el  Item: " + id); */ /*para probar la ruta */
       await deleteOne ({product_id: id });
       res.redirect("/admin");

}
};

module.exports = adminControllers;