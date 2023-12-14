const path = require("path");

const mainControllers = {
    home:(req, res)=> {
        res.render(path.resolve(__dirname, "../views/main/index.ejs"), {
            title:"FUNKOSHOP - HOME"
        });
    },
    about:(req, res)=> res.send ("Ruta para la Vista de Acerca de"),
    faqs: (req, res)=> res.send ("Ruta para la Vista de Preguntas Frecuentes")
}

module.exports = mainControllers;