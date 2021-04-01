import React ,{useState} from 'react'
import {useGoogleLogin} from 'react-google-login'
import Axios from 'axios'
import '../css/SignUp.css'

export default function SignUp() {

    const [nom,setNom]=useState("");
    const [prenom,setPrenom]=useState("");
    const [id,setId]=useState("");
    const [pass1,setPass1]=useState("");
    const [pass2,setPass2]=useState("");
    const [email,setEmail]=useState("");

    /*Fonctions de gestion de connexion avec google login **/
    const [clientId] ='737110455179-kht4r0260p6c5r4q150dbnl4plvvjp53.apps.googleusercontent.com';
    const onSuccess =(res)=>{
        setEmail(res.profileObj.email);
        setPass1(res.profileObj.name);
    }

    const onFailure =(res)=>{
        console.log(res);
    }

    const {GoogleSignin} = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn:true,
        accessType:'offline',
    });
    
    

    const enregistrer = ()=>{
        Axios.post('http://localhost:3001/register',{
            nom:nom,
            prenom:prenom,
            identifiant:id,
            mdp:pass1,
            email:email
        }).then((reponse)=>{
            console.log('succes');
        });
    }

    return (
        <div className="signin center">
            <div className="formulaire center flexV">
                <h1>S'enregistrer</h1>
                <div className="center flexH">
                    <div className="signInGoogle center" onClick={GoogleSignin}></div>
                    <div className="signInFacebook center" ></div>
                </div>
                <input className="input" type="text" placeholder="Nom" onChange={(e)=>{setNom(e.target.value)}}/>
                <input className="input" type="text" placeholder="Prenom" onChange={(e)=>{setPrenom(e.target.value)}}/>
                <input className="input" type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <input className="input" type="text" placeholder="Choix identifiant" onChange={(e)=>{setId(e.target.value)}}/>
                <input className="input" type="password" placeholder="Mot de passe" onChange={(e)=>{setPass1(e.target.value)}}/>
                <input className="input" type="password" placeholder="Confirmer mot de passe" onChange={(e)=>{setPass2(e.target.value)}}/>
                <div className="button center" onClick={enregistrer}>S'enregistrer</div>                        
            </div>
        </div>
    )
}

