import connection from "../utils/conn.js";

const inspectionService = {
  register: function (req, res) {
    const {inspec_points}=req.body;
const{car_Id} = req.body;
console.log(car_Id)
        const insData = req.body["dataset"];
        if (insData) {
      let table_keys = Object.keys(insData).toString();
      let table_values = Object.values(insData);
      let value_str = "";
      for (let val in table_values) {
        val = table_values[val];
        if (typeof val === "string") {
          val = '"' + val + '"';
        }
        value_str = value_str + val + ",";
      }
      if (value_str.length > 0) {
        const sql = `INSERT INTO car_inspection( ${table_keys}) VALUES (${value_str.slice(
          0,
          -1
        )})`;
        console.log("sql", sql)
                connection.query(sql, (error, result) => {
          if (result.length !== 0) {
            res.json({
              success: true,
              data: result,
            });
          } else {
            res.json({
              success: false,
              message: "Please Enter Valid Credentials",
            });
          }
        });
      }
    }

    let sql1 = `UPDATE vucar_cars SET inspect_point = ${inspec_points} WHERE car_id  = ${car_Id} `;
 console.log(sql1)
    connection.query(sql1, (error, result) => {
      console.log(result)
      // if (result.affectedRows == 1) {
      //   res.json({
      //     success: true,
      //     data: result,
      //   });
      // }
  });

  }
}




export default inspectionService;
