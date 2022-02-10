import React from "react";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

// import db from "./db.json"

function DishPoll(){
    let navigate = useNavigate()
    // const [selected, setSelected] = useState({})
    const[dish, setDish] = useState({})
    const dishlist = "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json";
    useEffect(()=>{
        fetch(dishlist)
        .then(res=>res.json())
        .then((data)=>{
            setDish(data)
            console.log(data);
        })
    },[])
    let choice = []
    const handleChoice=(id)=>{
            let filteredItem = dish.find(d=> d.id === id)
            if(choice.length >= 0 && choice.length <=2){ 
                choice.push(filteredItem)
                console.log(choice);  
            }
            else{
                alert('Please select 3 dishes only')
            }
            // setSelected((prev)=>({...prev, filteredItem})) 
            // console.log(selected);                
    }
    return <React.Fragment>
        <h1>Dishpoll</h1>
        <h3>Select the 3 dishes would you like</h3>
        <div className="containers">
            {dish.length > 0 && dish.map(ele=>
            <div className="container-box" key={ele.id}{...ele}>
                <img className="image" src={ele.image} alt={ele.dishName} />
                <h2>{ele.dishName}</h2>
                <h5>{ele.description}</h5>
                <button onClick={()=>handleChoice(ele.id)}>Vote</button>  
            </div>
            )}
            <button onClick={()=>{navigate(`/dishespage?c1_name=${choice[0].dishName}&c1_des=${choice[0].description}&c1_img=${choice[0].image}&c2_name=${choice[1].dishName}&c2_des=${choice[1].description}&c2_img=${choice[1].image}
            &c3_name=${choice[2].dishName}&c3_des=${choice[2].description}&c3_img=${choice[2].image}`)}}>Click to check seleted dishes</button>
        </div>
    </React.Fragment>
}
 // console.log(params.choice_1);
    // const[selecteddish, setSelectedDish] = useState({})
    // const[totaldish, setTotalDish] = useState({})
    // const dishlist = "https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json";
    // useEffect(()=>{
    //     fetch(dishlist)
    //     .then(res=>res.json())
    //     .then((datas)=>{
    //         setTotalDish(datas)
    //         console.log(datas);
    //     })
    // },[])

    // const handleDishes_1=()=>{
    //     console.log(params.choice_1);
    //     let selectedItem = totaldish.find(dish=> dish.id === params.choice_1)
    //     let selectedItem1 = totaldish.find(dish=> dish.id === params.choice_2)
    //     let selectedItem2 = totaldish.find(dish=> dish.id === params.choice_3)
    //         setSelectedDish((prev)=>({...prev, selectedItem})) 
    //         setSelectedDish((prev)=>({...prev, selectedItem1}))
    //         setSelectedDish((prev)=>({...prev, selectedItem2}))
    //         console.log(selecteddish);
    //         // selectedDish.push(selectedItem)
    //         // console.log(selectedDish);             
    // }
export default DishPoll