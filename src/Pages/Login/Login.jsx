import React from "react";
import style from "./Login.module.css";
export const Login = () => {
  return (
    <>
      <div className={style.LoginContainer}>
        <div className={style.LoginInputContainer}>
          <div className={style.LoginTitle}>Create Account</div>
          <form className={style.LoginForm} action="" method="post">
            <input type="Email" id="Email" placeholder="Email" />

            <input type="Password" id="Password" placeholder="Password" />
          </form>
          <button className={style.RegisterButton}>Log in</button>
          <a href="" className={style.ForgetPassword}>
            Forget Password
          </a>
          <a href="" className={style.CreateAccountLogin}>
            Create Account
          </a>
        </div>
      </div>
    </>
  );
};
export default Login;
