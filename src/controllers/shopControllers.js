const path = require("path"); 

const shopControllers = {
    shop: (req, res)=> {
        res.render (path.resolve(__dirname, "../views/shop/shop.ejs"));

    },

    contacto: (req, res)=> {
        res.render (path.resolve(__dirname, "../views/shop/contacto.ejs"));
    },

    itemGet: (req, res)=> {
        res.render (path.resolve(__dirname, "../views/shop/item.ejs"));
    },


    itemAdd: (req, res)=> res.send ("Ruta para encontrar y agregar un producto al carrito de compras"),

    carritoView: (req, res)=>{

        res.render (path.resolve(__dirname, "../views/shop/carrito.ejs"));
    },

    carritoCheck: (req, res)=> res.send ("Ruta para ir a Chequear Carrito de Compras")

}

module.exports = shopControllers;