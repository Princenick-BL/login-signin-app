import React, { useState} from 'react'
import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import Axios from 'axios'
import '../css/SignIn.css'
import {Link} from 'react-router-dom'

export default function SigIn() {
    /* Mon id google dev api pour l'app*/
    const [clientId] ="654762201544-ulf6sl0kk5b2lseuoq88cqtksbmgsgia.apps.googleusercontent.com";
    
    /* Les variables */
    const [id,setId]=useState("");
    const [pass,setPass]=useState("");

    /*Fonctions de gestion de connexion avec google login **/
    const reponseGoogle =()=>{

    }
    
    /* Fonction de connexion Standard */
    const connexion = ()=>{
        Axios.post('http://localhost:3001/connexion',{
            identifiant:id,
            mdp:pass
        }).then((reponse)=>{
            if(reponse.data.length!==0){
                console.log('true')
            }else{
                console.log('false')
            }
        });
    }
    
    return (
        <div className="login center">
            <div className="formulaire center flexV">
                <h1>Se Connecter</h1>
                <input className="input" type="text" placeholder="Identifiant" onChange={(e)=>{setId(e.target.value)}}/>
                <input className="input" type="password" placeholder="Mot de pass" onChange={(e)=>{setPass(e.target.value)}}/>
                <div className="button center" onClick={connexion}>connecter</div>
                <div className="center flexV">
                    <GoogleLogin
                        clientId="654762201544-ulf6sl0kk5b2lseuoq88cqtksbmgsgia.apps.googleusercontent.com"
                        render={renderProps =>(
                            <div className="signInGoogle center" onClick={renderProps.onClick} disabled={renderProps.disabled}>LOGIN WITH GOOGLE</div>
                        )}
                        onSuccess={reponseGoogle}
                        onFailure={reponseGoogle}
                        cookiePolicy="single_host_origin"
                    />
                    
                    <FacebookLogin
                        cssClass="signInFacebook"
                        render={renderProps =>(
                            <div className="signinFacebook center" onClick={renderProps.onClick} disabled={renderProps.disabled}></div>
                        )}
                    />
                    
                </div>
                <p> <Link to="/">Mot de pass oublié ?</Link>  ou <Link to="/signup">S'enregistrer</Link> </p>
            </div>
        </div>
            
    )
}
