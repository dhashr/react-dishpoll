import React, { useState, useEffect } from "react";

function SelectedDishes(){
    const [rank1, setRank1] = useState()
    const [rank2, setRank2] = useState()
    const [rank3, setRank3] = useState()
    const [res_1, setRes_1] = useState({})
    const [res_2, setRes_2] = useState({})
    const [res_3, setRes_3] = useState({})
    const points =[{ id : 1, point : 30},
                    { id : 2, point : 20},
                    { id : 3, point : 10}]
    let params = {}
    let url = window.location.href
        new URL(url).searchParams.forEach(function(val, key){
            if(params[key] !== undefined){
                params[key] = [params[key]];
                params[key].push(val);
            }
            else{
                params[key] = val;
            }
            return params;
        });
    // console.log(params);
    
        const checkScore=()=>{
            var score1 = points.filter(p=> p.id == rank1 )
            setRes_1(score1[0])
            var score2= points.filter(p=> p.id == rank2 )
            setRes_2(score2[0])
            var score3= points.filter(p=> p.id == rank3 )
            setRes_3(score3[0])
        }

    return <React.Fragment>
        <h1>Dishpoll</h1>
        <h3>Give your rank from 1 - 3</h3>
        <div className="selected-container">
                <div className="container-box" >
                    <img className="image" src={params.c1_img} alt={params.c1_name} />
                    <h2>{params.c1_name}</h2>
                    <h5>{params.c1_des}</h5>
                    <input type="number" placeholder="Enter the rank " onChange={event => setRank1(event.target.value)}/>
                    {res_1 && res_1.point &&
                        <div>
                        <p>score = {res_1.point}</p>
                    </div>}
                </div>
                <div className="container-box" >
                    <img className="image" src={params.c2_img} alt={params.c2_name} />
                    <h2>{params.c2_name}</h2>
                    <h5>{params.c2_des}</h5> 
                    <input type="number" placeholder="Enter the rank " onChange={event => setRank2(event.target.value)}/>
                    {res_2 && res_2.point &&
                        <div>
                        <p>score = {res_2.point}</p>
                    </div>}
                </div>
                <div className="container-box" >
                    <img className="image" src={params.c3_img} alt={params.c3_name} />
                    <h2>{params.c3_name}</h2>
                    <h5>{params.c3_des}</h5> 
                    <input type="number" placeholder="Enter the rank " onChange={event => setRank3(event.target.value)}/>
                    {res_3 && res_3.point &&
                        <div>
                        <p>score = {res_3.point}</p>
                    </div>}
                </div>  
        </div>
        <button id="res-btn" onClick={checkScore}>Click to Result</button>
        <div></div>
    </React.Fragment>
}
export default SelectedDishes;