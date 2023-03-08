import  Axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import "./SignUp.css"

const SignUp = () => {
	const navigate = useNavigate();
	const url = "http://localhost:4000/api/signup";
	const [data,setData] = useState({
		userName: "",
		password:"",
		email: ""

	})
	
	function submit(e){

		e.preventDefault();
		Axios.post(url, {
			userName: data.userName,
			password: data.password,
			email: data.email
		})	
		.then(res=>{
			console.log(res.data.payload.token);
			let token = res.data.payload.token;
			localStorage.setItem("jwt", token)
			navigate("/homepage");
		})
	}

	function handle(e){
		const newData = {...data}
		newData[e.target.id] = e.target.value
		setData(newData)
		console.log(newData);
	}
  return (
    <div className="Login">
   <div class="login_box">
			<div class="left">
				
				<div class="contact">
					<form onSubmit={(e) =>submit(e)}>
						<h3>SIGN UP</h3>
						<input type="text" onChange={(e) =>handle(e)} id='userName' value={data.userName} placeholder="USERNAME"/>
						<input type="password"  onChange={(e) =>handle(e)} id='password' value={data.password} placeholder="PASSWORD"/>
                        <input type="email"  onChange={(e) =>handle(e)} id='email' value={data.email} placeholder="Email"/>
						<button class="submit">Sign Up</button>
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

export default SignUp