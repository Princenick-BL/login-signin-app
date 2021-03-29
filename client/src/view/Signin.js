import React, { Component } from 'react'
import '../css/Signin.css'

export default class Signin extends Component {
    render() {
        return (
            <div>
                <div className="signin center">
                    <div className="formulaire center flexV">
                        <h1>S'enregistrer</h1>
                        <input className="input" type="text" placeholder="Nom" />
                        <input className="input" type="text" placeholder="Prenom"/>
                        <input className="input" type="text" placeholder="Choix identifiant" />
                        <input className="input" type="password" placeholder="Mot de passe"/>
                        <input className="input" type="password" placeholder="Confirmer mot de passe"/>
                        <div className="button center">S'enregistrer</div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
