import React, { useState } from "react";
import svg from "./media/user_logo.png";
import s from "./Modall.module.css";
import Form from "../Form/Form";
import LoginForm from "../LoginForm/LoginForm";

function Modall() {
	const [isRegistered, setRegistered] = useState(false);
	const [isLogin, setLogin] = useState(false)

	const handleSignup = () => {
		console.log("User successfully registered!");
		setRegistered(true);
	};
	const hendlerLogin = () => {
		console.log('Страница "Have an accoun?"');
		setLogin(true);
	}

	return (
		<div className={s.modal_container}>
			<div className={s.sign_up}>
				<p>Sign up</p>
			</div>
		
			<div className={`${ !isRegistered ? s.form_container : s.successfull}`}>
				{!isRegistered && !isLogin && <><div className={s.text}>
						<p>New user?</p>
						<p>Use the form below to create your account.</p>
					</div>
					<Form 
						isRegistered={isRegistered} 
						onSignup={handleSignup}/>
				
				<img className={s.contour_animation} src={svg} alt="user" /> </>}
				
				{!isLogin && isRegistered && (
					<div className={s.successfullText}>
						<h3>Thank You!</h3>
						<p>you registered!</p>
					</div>
				)}
				{!isLogin && <p className={`${ !isRegistered ? s.textLogin : s.textLoginActive}`}>
					Have an account? <span onClick={hendlerLogin}>Login</span>
				</p>}

				{isLogin &&<LoginForm/>}
			</div>
		</div>
	);
}

export default Modall;





