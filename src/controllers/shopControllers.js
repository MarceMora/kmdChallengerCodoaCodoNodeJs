const path = require("path"); 
const {getAll, getOne} = require("../models/productosModel")


const shopControllers = {
    shop: async (req, res) => {

        const datos = await getAll();
        
        res.render (path.resolve(__dirname, "../views/shop/shop.ejs"),{
            title: "FUNKOSHOP - SHOP",
            datos

    });
    },

    contacto: (req, res) => {
        res.render (path.resolve(__dirname, "../views/shop/contacto.ejs"),{
            title: "FUNKOSHOP - CONTACTO",
        });
    },

    itemGet: async (req, res) => {
        const itemId = req.params.id;

        const [item] = await getOne(itemId);

        res.render (path.resolve(__dirname, "../views/shop/item.ejs"),{
            title: "FUNKOSHOP - ITEM",
            item
        });
    },


    itemAdd: (req, res) => res.send ("Ruta para encontrar y agregar un producto al carrito de compras"),

    carritoView: (req, res) =>{

        res.render (path.resolve(__dirname, "../views/shop/carrito.ejs"),{
            title: "FUNKOSHOP - CARRITO",
        });
    },

    carritoCheck: (req, res) => res.send ("Ruta para ir a Chequear Carrito de Compras")

}

module.exports = shopControllers;