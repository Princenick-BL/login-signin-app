const express =require('express');
const app =express();
const mysql = require('mysql');
const cors =require('cors');

app.use(express.json());

app.use(cors());


const db=mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"prince123",
    database:"MyLoginSigninApp",
});

/*---------- Enrregistrement -----------------------*/
app.post('/register',(req,res)=>{
    
    const userEmail=req.body.email;
    const userPassword=req.body.mdp;

    db.query('INSERT INTO user (userEmail,userPassword) VALUES (?,?) ',
        [userEmail,userPassword],
        (err,result)=>{
            if(err){
                res.send(err);
            }else{
                res.send(result);
            }
        }
    )
})

/*----------- Connexion -------------*/
app.post('/connexion',(req,res)=>{
    
    const userEmail=req.body.email;
    const userPassword=req.body.mdp;

    db.query('SELECT * FROM user WHERE userEmail= ? AND userPassword= ? ',
        [userEmail,userPassword],
        (err,result)=>{
            if(err){
                res.send(err);
            }else{
               
                res.send(result);
            }
        }
    )
})

app.listen(3001,()=>{
    console.log("oui on est dans le back")
});
