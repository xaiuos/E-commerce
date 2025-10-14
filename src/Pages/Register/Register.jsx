import React from "react";
import style from "./Register.module.css";
export const Register = () => {
  return (
    <>
      <div className={style.container} id="container">
        <div className={style.Wrapper}>
          <form className={style.form} action="#">
            <h1 className={style.h1}>Sign up</h1>
            <div>
              <input
                className={style.input}
                type="User"
                id="User"
                placeholder="User"
              />
              <input
                className={style.input}
                type="email"
                id="Email"
                placeholder="Email"
              />
              <input
                className={style.input}
                type="password"
                id="Password"
                placeholder="Password"
              />
              <a className={style.a} href="#">
                Sign in
              </a>
            </div>
            <button className={style.button}>Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
