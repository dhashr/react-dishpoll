import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import LoginForm from "./login";
import Tabs from "./tabs";
import DishPoll from "./dishes";
import SelectedDishes from './rankpage';


  const Routing =()=>{
    const routes = useRoutes([
      {path:'/', element:<LoginForm/>},
      {path:'/tabpage', element:<Tabs/>},
      {path:'/mainpage', element:<DishPoll/>},
      {path:'/dishespage', element:<SelectedDishes/>}
    ]);
    return routes;
  } 

  const App =()=>{
    return(
      <Router>
        <Routing/>
      </Router>
    );
  }
export default App;
