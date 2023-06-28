import React from "react";
import svg from "./media/user_logo.png";
import s from "./Modall.module.css";
import Form from "../Form/Form";

function Modall() {

	return (
		<div className={s.modal_container}>
			<div className={s.sign_up}>
				<p>Sign up</p>
			</div>

			<div className={s.form_container}>
				<div className={s.text}>
					<p>New user?</p>
					<p>Use the form below to create your account.</p>
				</div>
				<Form />
				<img className={s.contour_animation} src={svg} alt="user" />
			</div>
		</div>
	);
}

export default Modall;
