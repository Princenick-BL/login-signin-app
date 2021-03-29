import React, { Component } from 'react'
import '../css/Login.css'
import {Link} from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <div className="login center">
                <div className="formulaire center flexV">
                    <h1>Se Connecter</h1>
                    <input className="input" type="text" placeholder="Identifiant" />
                    <input className="input" type="password" placeholder="Mot de pass"/>
                    <div className="button center">connecter</div>
                    <p> <Link to="/">Mot de pass oublié ?</Link>  ou <Link to="/signin">S'enregistrer</Link> </p>
                </div>
            </div>
        )
    }
}
