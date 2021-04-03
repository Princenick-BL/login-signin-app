import React ,{useState} from 'react'
import {GoogleLogin} from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import Axios from 'axios'
import {Link} from 'react-router-dom'

export default function SignUp() {

    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const [erreur,setErreur]=useState({etat:false,message:""})

    /*Fonctions de gestion de connexion avec google login **/
    const [clientId] =useState("1088367975989-3nal6ab50at7h60kvr2bjlacirs14isi.apps.googleusercontent.com");
    
    const onSuccess =(res)=>{
        enregistrer(res.profileObj.email,res.profileObj.name);
    };

    const onFailure =(res)=>{
        console.log(res);
    }

    /*Fonctions de gestion de connexion avec google login **/

    const reponseFacebook =(reponse)=>{    
        enregistrer(reponse.email,reponse.name);
    }
    
    

    const enregistrer = (sendEmail,sendPassword)=>{

        Axios.post('http://localhost:3001/register',{
            mdp:sendPassword,
            email:sendEmail
        }).then((reponse)=>{
            if(reponse.data.code==="ER_DUP_ENTRY"){
                setErreur({etat:true,message:"Vous avez déja un compte"})
            }else{
                window.location="/signin";
            }
           
        });
    }

    return (
        <div className="sign center">
            <div className="sign flexV">
                <Link className="btnConnecter" to="/signin">Se connecter</Link>
                <div className="formulaire center flexV">
                    <div className="logo"></div>
                    <h1 className="titre1">{!erreur.etat ? " Bienvenue !!!" : erreur.message}</h1>
                    <input className="input" type="text" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input className="input" type="password" placeholder="Créer un mot de passe" onChange={(e)=>{setPassword(e.target.value)}}/>
                    <div className="button center" onClick={(e)=>{enregistrer(email,password)}}>S'enregistrer</div>  
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
                        fields="name,email,picture"
                        callback={reponseFacebook}               
                    />
                    <p className="smallInfo">Créer un compte signifie que vous êtes d'accord avec : <a href="/">nos conditions d'utilisation</a> et <a href="/">politique de confidencialité</a></p>       
                                        
                </div>
            </div>
            
        </div>
    )
}

