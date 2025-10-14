import React from "react";
import style from "./Login.module.css";
export const Login = () => {
  return (
    <>
      {" "}
      <div className={style.container} id="container">
        <div className={style.Wrapper}>
          <form className={style.form} action="#">
            <h1 className={style.h1}>Sign in</h1>
            <div>
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
                Forgot your password?
              </a>
              <a className={style.a} href="#">
                Create Account
              </a>
            </div>
            <button className={style.button}>Sign In</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
