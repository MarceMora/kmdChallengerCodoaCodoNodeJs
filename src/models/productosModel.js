
const { conn } = require("../config/conn");

const getAll = async () => {
    try {
        const [rows ]= await conn.query("SELECT product.*, category.category_name,licence.licence_name FROM ( product LEFT JOIN  category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id;");



        return rows;
    }   catch(error) {
        return {
            error: true,
            message: "Se ha encontrado un error en la base de datos: " + error

        }
    }  finally {
        conn.releaseConnection();
    }

}

const getOne = async (id) => {
    try {
        const [rows ]= await conn.query("SELECT product.*, category.category_name,licence.licence_name FROM ( product LEFT JOIN  category ON product.category_id = category.category_id) LEFT JOIN licence ON product.licence_id = licence.licence_id WHERE product_id = ?;", id);
       
        return rows;
    }   catch(error) {
        return {
            error: true,
            message: "Se ha encontrado un error en la base de datos: " + error

        }
    }  finally {
        conn.releaseConnection();
    
}
}

module.exports = {
    getAll,
    getOne
}

