import React from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import "./styles.css";

function Validation() {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm();
  const password = useRef();
  password.current = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email && <p>this field is required </p>}
      </label>
      <label>
        Name
        <input
          type="text"
          {...register("name", {
            required: true,
            max: 5,
          })}
        />
        {errors.name && errors.name.message}
      </label>
      <label>
        PassWord
        <input
          type="password"
          {...register("password", {
            required: true,
          })}
        />
      </label>
      <label>
        PasswordConfirm
        <input
          type="password"
          {...register("passwordconfirm", {
            required: true,
            validate: (value) => value === password.current,
          })}
        />
      </label>
      <input type="submit" value={"submit"} />
    </form>
  );
}

export default Validation;
