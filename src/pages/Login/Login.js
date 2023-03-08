import  Axios from 'axios';
import "./Login.css"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {

	const navigate = useNavigate();
	const url = "http://localhost:4000/api/signin";
	const [data,setData] = useState({
		email:"",
		password:""
	})
	
	function submit(e){

		e.preventDefault();
		Axios.post(url, {
			email: data.email,
			password: data.password
		})	
		.then(res=>{
			console.log(res.data.payload.token);
			let token = res.data.payload.token;
			localStorage.setItem("jwt", token)
			navigate("/");

		})
		.catch(error=>{
			alert("Invalid Credentials");
		})
	}

	function handle(e){
		const newData = {...data}
		newData[e.target.id] = e.target.value
		setData(newData)
	}
  return (
    <div className="Login">
   <div class="login_box">
			<div class="left">
				
				<div class="contact">
					<form onSubmit={(e) =>submit(e)}>
						<h3>Sign In</h3>
						<input type="email"  onChange={(e) =>handle(e)} id='email' value={data.email} placeholder="Email"/>
						<input type="password"  onChange={(e) =>handle(e)} id='password' value={data.password} placeholder="PASSWORD"/>
                        
						<button class="submit">Sign In</button>
					</form>
				</div>
			</div>
			<div class="right">
				<div class="right-text">
					<h2>THE NFT PLACE</h2>
					<h5>NFT MARKETPLACE</h5>
				</div>
			
			</div>
		</div>
</div>

  )
}

export default Login