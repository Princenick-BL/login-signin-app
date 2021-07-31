import React, { useState} from 'react'
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import Axios from 'axios'
import '../css/SignIn.css'




export default function SigIn() {

    /* Les variables */
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [erreur,setErreur]=useState({etat:false,message:""})

    /*Fonctions de gestion de connexion avec google login **/
    const [clientId] =useState("1088367975989-3nal6ab50at7h60kvr2bjlacirs14isi.apps.googleusercontent.com");
    
    const onSuccess =(res)=>{
        connexion(res.profileObj.email,res.profileObj.name);
    };

    const onFailure =(res)=>{
        console.log(res);
    }

    /*Fonctions de gestion de connexion avec google login **/

    const reponseFacebook =(reponse)=>{    
        connexion(reponse.email,reponse.name);
    }
    
    /* Fonction de connexion Standard */
    const connexion = (sendEmail,sendPassword)=>{
        
        Axios.post('http://localhost:3001/connexion',{
            email:sendEmail,
            mdp:sendPassword
        }).then((reponse)=>{
            console.log(reponse.data.length)
            if(reponse.data.length!==0){
                console.log('true');
                //window.location="/dashboard";
            }else{
                setErreur({etat:true,message:"Aucun compte correspondant"})
            }
        });
    }
    
    return (
        <div className="sign center">
            <div className="formulaire center flexV">
                <div className="logo"></div>
                <h1 className="titre1">{!erreur.etat ? " Connexion" : erreur.message}</h1>
                <input className="input" type="text" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input className="input" type="password" placeholder="Create a password" onChange={(e)=>{setPassword(e.target.value)}}/>
                <div className="button center" onClick={(e)=>{connexion(email,password)}}>connecter</div>
                <p className="text2">OU</p>
                <GoogleLogin
                    clientId={clientId}
                    className="signGoogle center"
                    buttonText="Continuer avec Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy="single_host_origin"
                />
                    
                <FacebookLogin
                    textButton="Continuer avec Facebook"
                    appId="456100625502115"
                    cssClass="signFacebook center"
                    // autoLoad
                    fields="name,email,picture"
                    callback={reponseFacebook}               
                />
                <p className="smallInfo">Mot de passe oblié ? : <a href="/">restaurer ici</a></p>       
            </div>
        </div>
            
    )
}
