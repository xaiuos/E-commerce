import React from "react";
import "./Login.css";
export const Login = () => {
  return (
    <>
      <div className="LoginContainer">
        <div className="LoginInputContainer">
          <div className="LoginTitle">Create Account</div>
          <form className="LoginForm" action="" method="post">
            <input type="Email" id="Email" placeholder="Email" />

            <input type="Password" id="Password" placeholder="Passwword" />
          </form>
          <button className="RegisterButton">Log in</button>
          <a href="" className="ForgetPassword">Forget Password</a>
          <a href="" className="CreateAccountLogin">Create Account</a>
        </div>
      </div>
    </>
  );
};
export default Login;
