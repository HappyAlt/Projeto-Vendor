import React, { useContext } from "react";
import './Dev.css'
import '../../Reset.css';
import { Context } from "../App/App";

export function Dev(){
    const [Nmode, setNMode] = useContext(Context)

    return(
        <div className={`Content ${Nmode ? 'NContent' : ''}`}>
            <h1>Sobre o Site:</h1>
            <p>Este site foi desenvolvido com o intuito de praticar desenvolvimento web com o uso de React, além de criar portifolio. Sinta-se livre para adicionar e remover itens presentes nesta lista</p>
            <br></br>
            <br></br>
            <h2>Observação:</h2>
            <p>Itens adicionados á página principal não serão salvos ao fechar ou recarregar o site, pois não há uso de BD ou API.</p>      
        </div>
    )
}