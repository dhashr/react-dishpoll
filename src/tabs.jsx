import React from "react";
import { useNavigate } from "react-router-dom";

function Tabs(){
    const navigate = useNavigate()
    return <React.Fragment>
        <h1>Dishpoll</h1>
            <div className="tabpage">
                <button id="mainpage" onClick={()=>navigate('/mainpage')}>Dishes Poll</button>
                <button id="result" onClick={()=>navigate('/dishespage')}>Result </button>
            </div>
        </React.Fragment>
}
export default Tabs;