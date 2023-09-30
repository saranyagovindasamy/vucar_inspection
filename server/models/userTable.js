import connection from '../utils/connection.js';

async function getAll() {
    const sql = "SELECT * FROM vucar_user";
    const [rows] = await connection.promise().query(sql);
    console.log(rows)
} 
exports.getAll = getAll;