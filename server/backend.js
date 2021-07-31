const express =require('express');
const app =express();
const Pool = require('pg').Pool;
const cors =require('cors');
require('dotenv').config({path: './.env'});

app.use(express.json());

app.use(cors());

const SERVEUR = process.env.SERVEUR
const UTILISATEUR =process.env.UTILISATEUR;
const PASSWORD =process.env.PASSWORD;
const DB =process.env.DB;

const pool = new Pool({
    host: SERVEUR,
    user: UTILISATEUR,
    password: PASSWORD,
    database:DB,
    PORT : 5432,
})
pool.connect(error => {
    if (error) throw error;
    console.log("Connexion réussie à la base de donnée.");
});

app.post('/',(req,res)=>{
    res.send('Bienvenu sur mon API')
})


/*---------- Enrregistrement -----------------------*/
app.post('/register',(req,res)=>{

    const userName=req.body.name;
    const userEmail=req.body.email;
    const userPassword=req.body.mdp;

    pool.query('INSERT INTO public.user (nom, email, pwd)  VALUES ($1,$2,$3);',
        [userName,userEmail,userPassword],
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

    pool.query('SELECT * FROM public.user WHERE email= $1 AND pwd= $2 ',
        [userEmail,userPassword],
        (err,result)=>{

            if(err){
                res.send(err);
            }else{
               
                res.send(result.rows);
            }
        }
    )
})

app.listen(3001,()=>{
    console.log("oui on est dans le back")
});
