const authControllers = {
    loginSign: (req, res)=> res.send ("Ruta para la vista Ingresar datos de Login"),
    loginIn: (req, res)=> res.send ("Ruta para la vista usted esta Logueado"),
    registerIn: (req, res)=> res.send ("Ruta para la vista Crear Cuenta o Registrarse"),
    registerData: (req, res)=> res.send ("Ruta para la vista Registro Satisfactorio")

}

module.exports = authControllers;