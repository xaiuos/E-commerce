import React from "react";
import "./Register.css";
export const Register = () => {
  return (
    <>
      <div className="RegisterContainer">
        <div className="RegisterInputContainer">
          <div className="RegisterTitle">Create Account</div>
          <form className="RegisterForm" action="" method="post">
            <input type="Name" id="Name" placeholder="Name" />
            <input type="Email" id="Email" placeholder="Email" />
            <input type="User" id="User" placeholder="User" />
            <input type="Password" id="Password" placeholder="Passwword" />
          </form>
          <div className="Agreement">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi sit
            error magnam illum, ad repellat id non eum deleniti
          </div>
          <button className="RegisterButton">Create</button>
        </div>
      </div>
    </>
  );
};

export default Register;
