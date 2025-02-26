import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { MyContext } from "../../App";
import pattern1 from "../../assets/images/pattern1.jpg";
import { indigo } from "@mui/material/colors";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useScrollTrigger } from "@mui/material";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Button from "@mui/material/Button";
import { FaGoogle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { IoMdHome } from "react-icons/io";
const SignUp = () => {
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setisShowPassword] = useState(false);
  const [isShowConfirmPassword,setisShowConfirmPassword] = useState(false);

  const context = useContext(MyContext);

  useEffect(() => {
    context.setisHideSidebarAndHeader(true);
    window.scrollTo(0,0)
  }, []);

  const focusInput = (index) => {
    setInputIndex(index);
  };

  return (
    <>
      <img src={pattern1} className="loginpattern" alt="" />
      <section className="loginSection signUpSection">
        <div className="row">
          <div className="col-md-8 d-flex align-items-center flex-column part1 justify-content-center">
          <h1>BEST UX/UI FASHION <span className="text-sky">ECOMMERCE DASHBOARD</span> & ADMIN PANELK</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolor facilis perferendis, quod laborum ad aliquid reiciendis, autem repellendus, exercitationem odio veritatis doloribus non sequi voluptatum incidunt sed rerum. Perferendis.</p>

            <div className="w-100 mt-4">
                <Link to={'/'}><Button className="btn-blue btn-lg btn-big"><IoMdHome/>Go To Home</Button></Link>
            </div>


          </div>


          <div className="col-md-4 pe-0">
            <div className="loginBox">
              <div className="logo text-center">
                <img src={logo} alt="" width="60px" />
                <h5 className="fw-bold">Register a new account</h5>
              </div>
              <div className="wrapper mt-3 card border">
                <form>
                  <div
                    className={`form-group mb-4 position-relative ${
                      inputIndex === 0 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <FaUserCircle />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      onFocus={() => focusInput(0)}
                      onBlur={() => setInputIndex(null)} autoFocus
                    />
                  </div>

                  <div
                    className={`form-group mb-4 position-relative ${
                      inputIndex === 1 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <MdEmail />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email"
                      onFocus={() => focusInput(1)}
                      onBlur={() => setInputIndex(null)} 
                    />
                  </div>

                  <div
                    className={`form-group  position-relative ${
                      inputIndex === 2 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <RiLockPasswordFill />
                    </span>
                    <input
                      type={`${isShowPassword === true ? "text" : "password"}`}
                      className="form-control"
                      placeholder="Enter your password"
                      onFocus={() => focusInput(2)}
                      onBlur={() => setInputIndex(null)}
                    />

                    <span
                      className="toggleShowPassword"
                      onClick={() => {
                        setisShowPassword(!isShowPassword);
                      }}
                    >
                      {isShowPassword === true ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>



                  <div
                    className={`form-group  position-relative ${
                      inputIndex === 3 && "focus"
                    }`}
                  >
                    <span className="icon">
                      <IoShieldCheckmark />
                    </span>
                    <input
                      type={`${isShowConfirmPassword === true ? "text" : "password"}`}
                      className="form-control"
                      placeholder="Confirm Password"
                      onFocus={() => focusInput(3)}
                      onBlur={() => setInputIndex(null)}
                    />

                    <span
                      className="toggleShowPassword"
                      onClick={() => {
                        setisShowConfirmPassword(!isShowConfirmPassword);
                      }}
                    >
                      {isShowConfirmPassword === true ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  <FormControlLabel  control={<Checkbox />} label="I agree to the all Terms & Condition" />

                  <div className="form-group">
                    <Button className="btn btn-blue btn-lg w-100 btn-big">
                      Sign Up
                    </Button>
                  </div>

                  <div className="form-group text-center mb-0">
                   
                    <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                      <span className="line"></span>
                      <span className="txt">or</span>
                      <span className="line"></span>
                    </div>
                    <Button
                      variant="outlined"
                      className="w-100 btn-lg loginWithGoogle btn-big"
                    >
                      <FaGoogle size={20} className="me-2" /> &nbsp; Sign In
                      with Google
                    </Button>
                  </div>
                </form>
                <span className="text-center d-block mt-3">
                  Don't have an account
                  <Link to={"/login"} className="link color ms-2">
                    Sign In 
                  </Link>
                </span>
              </div>

              <div className="wrapper mt-3 card border footer p-2">
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
