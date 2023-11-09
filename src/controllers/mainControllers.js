const mainControllers = {
    home:(req, res)=> res.send ("Ruta para la vista del Home"),
    contacto:(req, res)=> res.send ("Ruta para la Vista de Contacto"),
    about:(req, res)=> res.send ("Ruta para la Vista de Acerca de"),
    faqs: (req, res)=> res.send ("Ruta para la Vista de Preguntas Frecuentes"),
}

module.export = mainControllers;