import connection from "../utils/conn.js";
import MD5 from "md5";

const userService = {
  register: function (req, res) {
    const username = req.body.data.username;
    const password = req.body.data.password;
    const role = req.body.data.role || 0;
    let encpassword = MD5(password);
    const sql = `INSERT into vucar_user(username,password,role)  VALUES ('${username}','${encpassword}','${role}')`;
    connection.query(sql, (error, result) => {
      if (result.length !== 0) {
        res.json({
          success: true,
          data: result[0],
        });
      } else {
        res.json({
          success: false,
          message: "Please Enter Valid Credentials",
        });
      }
    });
  },

  login: function (req, res) {
    let { username, password } = req.body.data;
    let encpassword = MD5(password);
    let whereSql = " ";
    whereSql += `username = '${username}' AND password = '${encpassword}' AND role = "1" `;
    let sql = `SELECT * FROM vucar_user WHERE  ${whereSql}`;
    connection.query(sql, (error, result) => {
      if (result.length !== 0) {
        res.json({
          success: true,
          data: result[0],
        });
      } else {
        res.json({
          success: false,
          message: "Please Enter Valid Credentials",
        });
      }
    });
  },
};

export default userService;
