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
    database:"bdd_login_signin_app",
});

/*---------- Enrregistrement -----------------------*/
app.post('/register',(req,res)=>{
    
    const userFirstName=req.body.nom;
    const userName=req.body.prenom;
    const userPseudo=req.body.identifiant;
    const userPassWord=req.body.mdp;
    const userEmail=req.body.email;

    db.query('INSERT INTO users (userName,userFirstName,userPseudo,userPassWord,userEmail) VALUES (?,?,?,?,?) ',
        [userName,userFirstName,userPseudo,userPassWord,userEmail],
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
    
    const identifiant=req.body.identifiant;
    const mdp=req.body.mdp;

    db.query('SELECT * FROM users WHERE userPseudo= ? AND userPassWord= ? ',
        [identifiant,mdp],
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
