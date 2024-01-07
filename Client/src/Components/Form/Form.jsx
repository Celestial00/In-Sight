import React, { useContext, useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Form.css";
import axios from 'axios'
import { UserContext } from "../../context/userContext";


export default function Form(props) {
  const [registerData, setRegisterData] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const [SigninData, setSigninData] = useState({
    
    Email: "",
    Password: "",
    
  });

  const Nav = useNavigate()
  const isSignIn = props.page;
  const {setUser} = useContext(UserContext)

  const handleInputRegister = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleInputSign = (e) => {
    const { name, value } = e.target;
    setSigninData({
      ...SigninData,
      [name]: value,
    });
  };


  const handleRegister = async () => {
  
    try{
      const response = await axios.post("http://localhost:5000/api/auth/register", registerData)
      setUser(response.data)
      Nav('/login')

    }
    catch(err){
      console.log(err);
    }

  };

  const handleSign = async () => {

    try{
      const response = await axios.post("http://localhost:5000/api/auth/login", SigninData, {withCredentials: true})
      console.log(response);
      Nav('/home')

    }
    catch(err){
      console.log(err);
    }


  };

  return (
    <div className="Form">
      {isSignIn === true ? (
        <>
          <div className="Form-intro">
            <h1>Sign in</h1>
          </div>

          <div className="input-tags">
            <input
              type={"email"}
              placeholder="Email"
              className="input-useremail"
              name="Email"
              value={setSigninData.Email}
              onChange={handleInputSign}
            />

            <input
              type={"password"}
              placeholder="Password"
              className="input-userpassword"
              name="Password"
              value={setSigninData.Password}
              onChange={handleInputSign}
            />
          </div>

          <div className="Form-btn" onClick={handleSign}>
            <p >Sign in</p>
          </div>

          <div className="register-link">
            <Link to="/register">Don't have an account? Sign Up Now!</Link>
          </div>

          <div className="Form-icons">
            <div className="Icon">
              <AiOutlineGoogle className="mini-icon" />
            </div>

            <div className="Icon">
              <FaFacebookF className="mini-icon" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="Form-intro">
            <h1>Sign Up</h1>
          </div>

          <div className="input-tags">
            <input
              type={"text"}
              placeholder="User Name"
              className="input-useremail"
              name="Name"
              value={registerData.Name}
              onChange={handleInputRegister}
            />

            <input
              type={"email"}
              placeholder="Email"
              className="input-useremail"
              name="Email"
              value={registerData.Email}
              onChange={handleInputRegister}
            />

            <input
              type={"password"}
              placeholder="Password"
              className="input-userpassword"
              name="Password"
              value={registerData.Password}
              onChange={handleInputRegister}
            />

            <input
              type={"password"}
              placeholder="Retype Password"
              className="input-userpassword"

            />
          </div>

          <div className="Form-btn" onClick={handleRegister}>
            <p >Sign Up</p>
          </div>

          <div className="register-link">
            <Link to="/login">Already have an account? Sign In</Link>
          </div>

          <div className="Form-icons">
            <div className="Icon">
              <AiOutlineGoogle className="mini-icon" />
            </div>

            <div className="Icon">
              <FaFacebookF className="mini-icon" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
