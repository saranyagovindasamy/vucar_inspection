import connection from '../utils/conn.js';

const carService = {
  getList: function (req, res) {

     const sql = 'SELECT * FROM vucar_cars';
     connection.query(sql,(error, result) => {
        
                    if(result.length !== 0){
                     res.json({
                       success: true,
                       data: result ,
                     });
                 }
                 else{
                   res.json({
                     success: false,
                    message:"Please Enter Valid Credentials" ,
                   });
                 }
             })
          } ,

  register: function (req, res) {
 let { carName, carModal} = req.body.data;
 
  let sql = `INSERT INTO vucar_cars(car_name,car_modal) values ('${carName}', '${carModal}')`;
  console.log(sql)
 connection.query(sql,(error, result) => {
  console.log(result)
    if(result.length !== 0){
        res.json({
          success: true,
          data: result ,
        });
    }
    else{
      res.json({
        success: false,
       message:"Please Enter Correct..." ,
      });
    }
})
      },
}
   

export default carService;
