import React, { useState } from "react";
import s from "./LoginForm.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useForm } from "react-hook-form";

function LoginForm() {

  const [login, setLogin] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mailElem = register("email", {
    required: "Почта должна быть заполнена",
    pattern: {
      value:
        /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,3}$/,
      message: "Указана неверная почта",
    },
  });

  const onLogin = (data, event) => {
    event.preventDefault();
    setEmailValue(data.email); 
    setLogin(true);
  };

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(onLogin)}>
      {!login && (
        <>
          <p className={s.textLogin}>Your login</p>
          <Input
            {...mailElem}
            type="email"
            placeholder="Your e-mail"
            register={register}
            defaultValue={emailValue}
            onChange={handleEmailChange}
          />
        
          <p className={s.textLogin}>Your password</p>
          <Input 
            type="password" 
            name="password" 
            register={register} />
          <Button 
            text="Login" 
            styles={"btn_login"} 
            type="submit" />
        </>
      )}
      {login && <h3>Welcome back, <span>{emailValue}</span>.</h3>}
    </form>
  );
}

export default LoginForm;
