import React, { Component } from 'react'
import '../css/NavBar.css'
export default class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                email@gmail.com
                <select className="emailZone">
                    <option className="btnDeconnecter"></option>
                    <option className="btnDeconnecter">Deconnecter</option>
                </select>
                
                <div className="userImgContainer center">
                    <div className="userImg"></div>
                </div>
               
            </div>
        )
    }
}
