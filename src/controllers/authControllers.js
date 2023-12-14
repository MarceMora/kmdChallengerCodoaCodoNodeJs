const path = require("path");

const authControllers = {
    loginSign: (req, res)=> {
    res.render (path.resolve(__dirname, "../views/auth/login.ejs"),{
        title: "FUNKOSHOP - LOGIN",
    });
    },

    loginIn: (req, res)=> res.send ("Ruta para la vista usted esta Logueado"),

    registerIn: (req, res)=> {
        res.render (path.resolve(__dirname, "../views/auth/register.ejs"),{
            title: "FUNKOSHOP - REGISTER",
        });
    },

    registerData: (req, res)=> res.send ("Ruta para la vista Registro Satisfactorio")

}

module.exports = authControllers;