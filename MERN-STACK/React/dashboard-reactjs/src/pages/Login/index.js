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

const Login = () => {
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setisShowPassword] = useState(false);
  const context = useContext(MyContext);

  useEffect(() => {
    context.setisHideSidebarAndHeader(true);
  }, []);

  const focusInput = (index) => {
    setInputIndex(index);
  };

  return (
    <>
      <img src={pattern1} className="loginpattern" alt="" />
      <section className="loginSection">
        <div className="loginBox">
          <div className="logo text-center">
            <img src={logo} alt="" width="60px" />
            <h5 className="fw-bold">Login to Hotash</h5>
          </div>
          <div className="wrapper mt-3 card border">
            <form>
              <div
                className={`form-group mb-4 position-relative ${
                  inputIndex === 0 && "focus"
                }`}
              >
                <span className="icon">
                  <MdEmail />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                  onFocus={() => focusInput(0)}
                  onBlur={() => setInputIndex(null)} autoFocus
                />
              </div>

              <div
                className={`form-group  position-relative ${
                  inputIndex === 1 && "focus"
                }`}
              >
                <span className="icon">
                  <RiLockPasswordFill />
                </span>
                <input
                  type={`${isShowPassword === true ? "text" : "password"}`}
                  className="form-control"
                  placeholder="Enter your password"
                  onFocus={() => focusInput(1)}
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

              <div className="form-group">
                <Button className="btn btn-blue btn-lg w-100 btn-big">
                  Sign In
                </Button>
              </div>

              <div className="form-group text-center mb-0">
                <Link to={"/forgot-password"} className="link">
                  FORGOT PASSWORD
                </Link>
                <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                  <span className="line"></span>
                  <span className="txt">or</span>
                  <span className="line"></span>
                </div>
                <Button variant="outlined" className="w-100 btn-lg loginWithGoogle btn-big">
                <FaGoogle size={20} className="me-2" /> &nbsp; Sign In with Google
                </Button>
              </div>
            </form>
          </div>

          <div className="wrapper mt-3 card border footer p-2">
                  <span className="text-center">
                    Don't have an account
                    <Link to = {'/signUp'} className="link color ms-2">Register</Link>
                  </span>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default Login;
