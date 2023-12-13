const path = require("path");

const authControllers = {
    loginSign: (req, res)=> {
    res.render (path.resolve(__dirname, "../views/auth/login.ejs"));
    },

    loginIn: (req, res)=> res.send ("Ruta para la vista usted esta Logueado"),

    registerIn: (req, res)=> {
        res.render (path.resolve(__dirname, "../views/auth/register.ejs"));
    },

    registerData: (req, res)=> res.send ("Ruta para la vista Registro Satisfactorio")

}

module.exports = authControllers;