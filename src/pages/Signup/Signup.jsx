import React, { useState } from "react";
import signUp from "../../assets/sign-up-img.png";
import Logo from "../../assets/offical_logo.png";
import { IoCall } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const containerClasses =
  "flex items-center bg-[#fff0e3ff] p-2 text-black rounded-xl";
const inputClasses =
  "bg-[#fff0e3ff] flex-1 ml-2 text-black focus:outline-none rounded-xl";
const formContainerClasses =
  "min-h-screen flex flex-col items-center justify-center bg-[#fff0e3ff] p-4";
const cardClasses =
  "w-full max-w-4xl bg-[#fff0e3ff] dark:bg-zinc-800 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row";
const formSectionClasses =
  "relative rounded-lg w-full md:w-1/2 bg-zinc-800 text-zinc-200 p-6 flex flex-col justify-center";
const illustrationSectionClasses =
  "rounded-lg hidden md:flex w-full md:w-1/2 p-8 items-center justify-center bg-[#c1cfabff] overflow-hidden";

const FormInput = ({ icon, placeholder, type = "text", value, onChange }) => {
  return (
    <div className={containerClasses}>
      <span className="text-black bg-[#fff0e3ff] p-2 rounded-xl">{icon}</span>
      <input
        type={type}
        placeholder={placeholder}
        className={inputClasses}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      console.log("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        {
          username,
          email,
          password,
          phone,
        }
      );

      alert(response.data.message);
      navigate("/login");
      setUsername("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message);
        console.log(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className={formContainerClasses}>
        <div className={cardClasses}>
          <div className={formSectionClasses}>
            <div className="flex justify-center mb-3">
              <img
                src={Logo}
                alt="Logo"
                className="h-12 md:h-16"
                style={{ width: "auto" }}
              />
            </div>
            <h2 className="text-3xl font-semibold text-center mb-6 text-white">
              Sign Up
            </h2>
            <form className="space-y-4" onSubmit={handleSignup}>
              <FormInput
                icon={<CgProfile />}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <FormInput
                icon={<MdEmail />}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormInput
                icon={<IoCall />}
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <FormInput
                icon={<RiLockPasswordLine />}
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormInput
                icon={<RiLockPasswordLine />}
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className="flex items-center">
                <input type="checkbox" id="terms" className="mr-2" required />
                <label htmlFor="terms" className="text-zinc-400">
                  I agree to the Terms and Conditions
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-2 rounded-xl"
              >
                Sign Up
              </button>
            </form>

            <div className="text-center mt-4">
              <p className="text-zinc-400 mb-2">Or sign up with:</p>
              <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                <button className="flex items-center justify-center h-12 bg-white text-black rounded-xl px-4 w-full md:w-auto whitespace-nowrap">
                  <FcGoogle
                    className="text-black p-1"
                    style={{ fontSize: "2rem" }}
                  />
                  <span className="ml-2 text-sm">Sign up with Google</span>
                </button>
                <button className="flex items-center justify-center h-12 bg-white text-black rounded-xl px-1 w-full md:w-auto whitespace-nowrap">
                  <FaFacebookSquare
                    className="text-black p-1"
                    style={{ fontSize: "2rem" }}
                  />
                  <span className="ml-2 text-sm">Sign up with Facebook</span>
                </button>
              </div>
            </div>

            <p className="text-zinc-400 text-center mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-green-500">
                Log in
              </Link>
            </p>
          </div>

          <div className={illustrationSectionClasses}>
            <img
              src={signUp}
              alt="Illustration"
              className="w-full h-full object-contain rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
