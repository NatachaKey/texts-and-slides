import {useState} from "react";
import { data } from "./data";
import './App.css';
import Slides from "./Slides";

function App() {

const [islands, setIslands]=useState(data);
const [showText, setShowText] = useState(false);

const removeIsland=(id)=>{
  let newIslands=islands.filter(island=> island.id !== id)
  setIslands(newIslands);
}

const showTextClick = (element)=> {
  element.showMore=!element.showMore
  setShowText(!showText)
}

return (
    <div >

    <div className="container">
      <h1>Top {islands.length} most beautiful islands.</h1>
    </div>
    {islands.map((element=>{
      const {id, image, name, description, showMore}= element;
      return(
        <div key={id}>

          <div className="container">
            <img src={image} alt="foto" width="700px"/>
          </div>

          <div className="container">
            <h2>{id}- {name}</h2>
          </div>

          <div className="container">
            <p>{ showMore ? description : description.substring(0, 200)}
            <button className="btn" onClick={()=>showTextClick(element)}>{showMore ? "Show less" : "Show more"} </button>
            </p>
          </div>

          <div className="container">
          <button className="btnDelete" onClick={()=>removeIsland (id)}>Remove</button>
        </div>

        </div>
      )
    }
    
    ))}

        <div className="container">
          <button className="btnDeleteAll" onClick={()=>setIslands ([])}>Delete all</button>
        </div>

<div className=" blueBackground">
  <div className="container">
    <h2 className="smallTitle">Just take a look and relax</h2>
   </div> 
   <div className="container ">
      <Slides/>
    </div>
</div>

</div>
  );
  
}

export default App;
