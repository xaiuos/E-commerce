import React from "react";
import style from "./Register.module.css";
export const Register = () => {
  return (
    <>
      <div className={style.RegisterContainer}>
        <div className={style.RegisterInputContainer}>
          <div className={style.RegisterTitle}>Create Account</div>
          <form className={style.RegisterForm} action="" method="post">
            <input type="Name" id="Name" placeholder="Name" />
            <input type="Email" id="Email" placeholder="Email" />
            <input type="User" id="User" placeholder="User" />
            <input type="Password" id="Password" placeholder="Passwword" />
          </form>
          <div className={style.Agreement}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sit
            error magnam illum, ad repellat id non eum deleniti
          </div>
          <button className={style.RegisterButton}>Create</button>
        </div>
      </div>
    </>
  );
};

export default Register;
