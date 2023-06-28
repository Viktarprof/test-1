import React from "react";
import Input from "../UI/Input/Input";
import s from "./Form.module.css";
import Select from "../UI/Select/Select";
import Button from "../UI/Button/Button";

function Form() {
	const days = [];
	for (let i = 0; i <= 31; i++) {
		days.push(i);
	}
	const countries = ["", "American", "Canada", "UK", "Germany", "France"];
	const months = [
		"",
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const years = [];
	for (let i = 1900; i <= 2023; i++) {
		years.push(i);
	}

	return (
		<div className={s.info_user}>
			<Input
				styles="input"
				title_input="First Name"
				type="text"
				name="firstName"
				placeholder="Your first name"
			/>
			<Input
				title_input="Last Name"
				type="text"
				name="lastName"
				placeholder="Your last name"
			/>

			<div className={s.select_container}>
				<label className={s.title_select}>Nationality</label>
				<Select
					styles="select_nationality"
					options={countries}
					placeholder="Nationality"
				/>
			</div>

			<Input
				title_input="e-mail"
				type="email"
				name="e-mail"
				placeholder="Your e-mail"
			/>

			 <div className={s.container_date}>
				<p className={s.title_select}>Date of Birth</p>
				<div className={s.date}>
					<Select styles="select_days" options={days} />
					<Select styles="select_months" options={months} />
					<Select styles="select_years" options={years} />
				</div>
			</div>

			<div className={s.gender_container}>
				<p className={s.title_select}>Gender</p>

				<div className={s.radio_container}>
					<div className={s.radio}>
						<Input styles="radio_button" type="radio" id="male" name="male" />
						<label for="male">Male</label>
					</div>
					<div className={s.radio}>
						<Input
							styles="radio_button"
							type="radio"
							id="Female"
							name="Female"/>
						<label for="Female">Famale</label>
					</div>
				</div>
			</div>
			<div className={s.container_password}>
				<Input 
					title_input="Password" 
					type="password" 
					name="Password1" 
				/>
				<Input
					title_input="Confirm Password"
					type="password"
					name="password2"
				/>
			</div>


			<div className={s.login_completele}>
				<p>Have an account? Login</p>
				<Button/>
			</div>
		</div>
	);
}

export default Form;
