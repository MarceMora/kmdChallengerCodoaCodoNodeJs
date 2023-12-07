const express = require("express");
const app = express();
const methodOverride = require("method-override");

const mainRoutes = require("./src/routes/mainRoutes");
const shopRoutes = require("./src/routes/shopRoutes");
const adminRoutes = require("./src/routes/adminRoutes");
const authRoutes = require("./src/routes/authRoutes");

app.use(express.static ("public"));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.urlencoded({extended:true,}));
app.use(express.json());

app.use(methodOverride("_method"));

app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);

app.get("/ping",(req, res)=> res.send ("pong"));
app.listen(3000, ()=> console.log("Servidor activo en http://localhost: 3000"));
