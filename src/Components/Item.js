import React, { useContext } from "react";
import './Item.css';
import { Context } from "../Pages/App/App";

export function Item(props){

    const [NMode, setNMode] = useContext(Context)

    return(
        <>
            <div className={`Item ${NMode ? 'NItem' : ''}`}>
                <h1 title={props.iname}>{props.iname}</h1>

                <div>
                    <img src={props.isrc} alt={props.iname}></img>
                </div>
                <div className="Desc">
                    <p>{props.idescription}</p>
                </div>
            </div>
        </>
    )
}