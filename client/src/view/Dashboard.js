import React, { Fragment } from 'react'
import NavBar from '../components/NavBar'
export default function Dashboard() {
    return (
        <Fragment>
            <NavBar/>
            <div className="Dashboard">
                <h1 className="titre1">Bienvenue sur le dashboard</h1>
            </div>
        </Fragment>
        
    )
}
