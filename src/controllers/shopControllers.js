const path = require("path"); 
const datos = require("../models/productos");

const shopControllers = {
    shop: (req, res)=> {

        res.render (path.resolve(__dirname, "../views/shop/shop.ejs"),{
            title: "FUNKOSHOP - SHOP",
            datos: datos
        });

    },

    contacto: (req, res)=> {
        res.render (path.resolve(__dirname, "../views/shop/contacto.ejs"),{
            title: "FUNKOSHOP - CONTACTO",
        });
    },

    itemGet: (req, res)=> {
        const itemId = req.params.id;
        const item = datos.find(item => item.product_id == itemId);

        res.render (path.resolve(__dirname, "../views/shop/item.ejs"),{
            title: "FUNKOSHOP - ITEM",
            item
        });
    },


    itemAdd: (req, res)=> res.send ("Ruta para encontrar y agregar un producto al carrito de compras"),

    carritoView: (req, res)=>{

        res.render (path.resolve(__dirname, "../views/shop/carrito.ejs"),{
            title: "FUNKOSHOP - CARRITO",
        });
    },

    carritoCheck: (req, res)=> res.send ("Ruta para ir a Chequear Carrito de Compras")

}

module.exports = shopControllers;