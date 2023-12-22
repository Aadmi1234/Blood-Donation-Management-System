import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

// pool is like a collection of connections so you don't have to create new one everytime you query your db
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

// const result = await pool.query("select center_id from centers");
// const rows = result[0];

export async function getCenters(){
    const [centers] = await pool.query("select * from centers");
    return centers;
}

// export async function getCenterIDs(){
//     const [centerIDs] = await pool.query("select center_id from centers");
//     return centerIDs;
// }

// export async function getCenterById(center_id){
//     const [center] = await pool.query(`select * from centers where center_id=${center_id}`);
//     return center;
// }

// export async function getAppById(app_id){
//     const [app] = await pool.query(`select * from appointments where app_id=${app_id}`);
//     return app;
// }

export async function checkApp(app_id){
    const [details] = await pool.query(`select * from centers join (select * from users natural join appointments having app_id = ?) as temp on centers.center_id = temp.center_id`,[app_id]);
    return details[0];
}

export async function submitForm(newUser){
    const [user] = await pool.query(`insert into users(fname,lname,address,dob,blood_grp,sex,phone,email) values (?,?,?,?,?,?,?,?)`,[newUser.fname,newUser.lname,newUser.address,newUser.dob,newUser.blood_grp,newUser.sex,newUser.phone,newUser.email]);
    const [app] = await pool.query(`insert into appointments(center_id,user_id,app_date,app_time) values (?,?,?,?)`,[newUser.center_id,user.insertId,newUser.app_date,newUser.app_time]);
    return checkApp(app.insertId);
}
