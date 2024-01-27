import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

const spice = 10; //used for encrypting the password


const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Create connection to the MySQL database
const db = mysql.createConnection ({
    host:"localhost",
    user:"root",
    password:"",
    database:'newverver'
})

//creating api for SignUp
app.post('/Signup', (req, res) => {
    const sql = "INSERT INTO user (`fullname`,`email`,`password`, `phone`) VALUES (?)"; //defining function to enter SignUp details into user table in the database
    bcrypt.hash(req.body.password.toString(), spice, (err, hash) => { //encrypting the password 
        if (err) return res.json({Error: "Error for encrypting password"}); 
        const values =[
            req.body.fullname,
            req.body.email,
            hash,
            req.body.phone
        ]
        db.query(sql, [values], (err, result) => {
            if (err) return res.json({Error:"Error inserting data into database"})
            return res.json({Status:"Success"});
        })
    }) 
    
})

//creating api for Login

app.post('/Login', (req, res) => {
    const sql = "SELECT * FROM user WHERE email = ?";
    db.query(sql, [req.body.email], (err, data) => {
        if(err) return res.json({Error:"Error Logging Into Dashboard"});
        if(data.length > 0) {
            bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
                if(err) return res.json({Error: "Password doesn't match"});
                if(response) {
                    return res.json({Status:"Success"});
                }else {
                    return res.json({Error: "Password doesn't match"});
                }
            })

        } else {
            return res.json ({Error: "Email doesn't exist"});
        }
    })
})

//creating api for reporting stolen vehicles
app.post('/ReportVehicle', (req, res) => {
    const sql = "INSERT INTO stolenvehicles (`vin`,`brand`,`model`, `owner`, `last_location`,`date_stolen`,`reportedby`) VALUES (?)"; //defining function to enter SignUp details into user table in the database

    const values = [
        req.body.vin,
        req.body.brand,
        req.body.model,
        req.body.owner,
        req.body.last_location,
        req.body.date_stolen,
        req.body.reportedby
    ];

    db.query(sql, [values], (err) => {
        if (err) return res.json({Error:"Error inserting data into database"});
        return res.json({Status:"Success"});
    });
});


// API Endpoint to Fetch Stolen Vehicle Information by VIN/Chassis Number
app.get('/Home/:vin', (req, res) => {
    const vin = req.params.vin;
    const sql = 'SELECT * FROM stolenvehicles WHERE vin = ?';
    db.query(sql, vin, (err, results) => {
      if (err) {
        throw err;
      }
      res.json(results);
    });
  });

//Start server
app.listen(8081, () => {
    console.log("Server Running...")
})