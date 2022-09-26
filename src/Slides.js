import { useState } from "react";
import { islands } from "./islands";
import './App.css';

function Slides(){
    const [foto, setFoto]= useState(0);
    const {image}= islands[foto];

    const previousIsland=()=>{
        setFoto((foto=>{
            foto --;
            if (foto<0){
                return islands.length-1
            }
            return foto
        }))
    }

    const nextIsland =()=>{
        setFoto((foto=>{
            foto++;
            if(foto>islands.length-1){
                foto=0;
            }
            return foto;
        }))
    }
    return(<div>
        <div className="container">
            <img src={image} width="100%" alt="foto"></img>
        </div>
        <div className="container">
            <button className="btnNexAndPrevious" onClick={previousIsland}>Previous</button>
            <button  className="btnNexAndPrevious" onClick={nextIsland}>Next</button>
        </div>

    </div>)
}

export default Slides;
