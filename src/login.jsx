import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom"
import users from './users.json'


function LoginForm(){
    const navigate = useNavigate()
    const [validname, setValidName] = useState()
    const [validpwd, setValidPwd] = useState()
    let userdata = users;
    console.log(userdata);
    const handleSubmit = () => {
        const user = userdata.find(usr => usr.username  === validname && usr.password === validpwd);
        console.log(validname);
        console.log(validpwd);
        if(user) {
            navigate('/tabpage');
        } else {
            alert("Please enter valid ID")
            console.log("Please provide a valid user credentials");
            } 
        }
 
    return <React.Fragment>
    <nav class="navbar navbar-dark bg-dark">
        <h1 id="h1_name" class="navbar-brand">Dishpoll</h1>
    </nav>
        <div className="overlay">
            <div class="overlay-login-left">
                <h1>Hello, Friend!</h1>
                <p>Enter your login details and start Dishpoll </p>
            </div>
        </div>
        <div class="form-container-login">
            <h1 id="p2">Sign In</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <a href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"><button class="btn btn-outline-danger" id="google">Continue with Google</button></a>
                <p id="p3">OR</p>            
                <input type="name" placeholder="username" className="email" name="username" onChange={event => setValidName(event.target.value)} required/>     
                <input type="password" placeholder="Password" className="pwd" name="password" onChange={event => setValidPwd(event.target.value)} required/>           
                <button id="login-btn" class="btn btn-outline-danger" >Login</button>            
            </form>
        </div>
       
    </React.Fragment>
}
export default LoginForm