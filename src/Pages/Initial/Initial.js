import React from "react";
import { useContext } from "react";
import './Initial.css';
import '../../Reset.css';
import { Context } from "../App/App"
import LVendor from '../../Style/LVendor.png'
import DVendor from '../../Style/DVendor.png'

export function Initial(){
    const [Nmode, setNMode] = useContext(Context)

    return(
        <div className={`Content Initial ${Nmode ? 'NContent' : ''}`}>
            <h1>Bem-Vindo ao</h1>
            <img src={Nmode? DVendor : LVendor} alt="Logo" width={500}></img>
            <p>Por Gustavo Gabriel</p>
        </div>
    )
}