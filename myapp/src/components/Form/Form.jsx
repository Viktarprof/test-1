import React, { useState } from "react";
import Input from "../UI/Input/Input";
import s from "./Form.module.css";
import Select from "../UI/Select/Select";
import Button from "../UI/Button/Button";
import { useForm } from "react-hook-form";
import { PiEyeThin } from 'react-icons/pi'
import { PiEyeClosedThin } from 'react-icons/pi'

function Form({ onSignup }) {

	const [show, setShow] = useState(false);

	const {
		handleSubmit,
		reset,
		register,
		formState: { errors },
		watch,
	} = useForm();

	const days = [];
		for (let i = null; i <= 31; i++) {
			days.push(i);
		};

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

	let today = new Date();
	const nowYear = today.getFullYear();
	const years = [];
	for (let i = nowYear; i >= 1900; i--) {
		years.push(i);
	}

	const onSubmit = (data) => {
		const userData = {
			id: Date.now(),
			firstName: data.firstName,
			lastName: data.lastName,
			nationality: data.nationality,
			email: data.email,
			dayBirthd: data.dayBirthd,
			monthBirthd: data.monthBirthd,
			yearBirthd: data.yearBirthd,
			password1: data.password1,
			password2: data.password2,
		};
		reset();
		onSignup();
	};

	const firstNameElem = register("firstName", {
		required: "Поле имя должно быть заполнено",
		pattern: {
			value: /^[A-z]+$/,
			message: "Введите текст на кирилице",
		},
	});

	const lastNameelem = register("lastName", {
		required: "Поле фамилия должно быть заполнено",
		pattern: {
			value: /^[A-z]+$/,
			message: "Введите текст на кирилице",
		},
	});

	const emailelem = register("email", {
		required: "Почта должна быть заполнена",
		pattern: {
			value:
				/^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,3}$/,
			message: "Указана неверная почта",
		},
	});

	const passwordElem = register('password1', {
		required: "Поле Password должно быть заполнено.",
		pattern: {
			value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
			message: "Пароль должен содержать 8 букв и 1 цифру",
		},
	});

	const secondPasswordElem = register('password2', {
		required: "Поле Confirm Password должно быть заполнено.",
		validate: (value) =>
			value === watch("password1") || "Пароли не соответствуют друг другу",
	});

	const togglePassword = () => {
		setShow(!show);
	}

	return (
		<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={s.info_user}>
				<Input
					{...firstNameElem}
					styles="input"
					title_input="First Name"
					type="text"
					name="firstName"
					placeholder="Your first name"
					register={register}
					error={errors.firstName}
				/>
				<Input
					{...lastNameelem}
					title_input="Last Name"
					type="text"
					name="lastName"
					placeholder="Your last name"
					register={register}
					error={errors.lastName}
				/>

				<div className={s.select_container}>
					<p className={s.title_select}>Nationality</p>
					<Select
						styles="select_nationality"
						options={countries}
						placeholder="Nationality"
						register={register("nationality")}
					/>
				</div>

				<Input
					{...emailelem}
					title_input="e-mail"
					type="email"
					name="email"
					placeholder="Your e-mail"
					register={register}
					error={errors.email}
				/>

				<div className={s.container_date}>
					<p className={s.title_select}>Date of Birth</p>
					<div className={s.date}>
						<Select
							styles="select_days"
							options={days}
							name="dayBirthd"
							register={register("dayBirthd")}
						/>
						<Select
							styles="select_months"
							options={months}
							name="monthBirthd"
							register={register("monthBirthd")}
						/>
						<Select
							styles="select_years"
							options={years}
							name="yearBirthd"
							register={register("yearBirthd")}
						/>
					</div>
				</div>

				<div className={s.gender_container}>
					<p className={s.title_select}>Gender</p>

					<div className={s.radio_container}>
						<div className={s.radio}>
							<Input
								styles="radio_button"
								type="radio"
								id="Male"
								name="gender"
								register={register}
							/>
						</div>
						<div className={s.radio}>
							<Input
								styles="radio_button"
								type="radio"
								id="Female"
								name="gender"
								register={register}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className={s.container_password}>
				<Input
					{...passwordElem}
					title_input="Password"
					type={show ? "text" : "password"}
					name="password1"
					register={register}
				/>
				<>
					<Input
						{...secondPasswordElem}
						title_input="Confirm Password"
						type={show ? "text" : "password"}
						name="password2"
						register={register}
					/>
					<div className={s.iconShow} onClick={togglePassword}>
						{show ? <PiEyeThin /> : <PiEyeClosedThin />}
					</div>
				</>

				<div >
					{errors.secondPassword && (
						<p className={s.warning_text}>{errors.secondPassword.message}</p>
					)}
					<div className={s.errorContainer}>
						{!errors.secondPassword && (<>
							<p className={s.warning_text}>
								{errors.password1 && errors.password1.message}
							</p>
							<p className={s.warning_text}>
								{errors.password2 && errors.password2.message}
							</p>
						</>)}
					</div>
				</div>
			</div>

			<div className={s.completele}>
				<Button
					text="Complete Signup"
					styles={"btn_comletely"}
					type="button"
					onClick={onSignup}
				/>
			</div>
		</form>
	);
}

export default Form;
