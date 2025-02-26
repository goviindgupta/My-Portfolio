import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "@mui/material/Button";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { IoShieldHalfSharp } from "react-icons/io5";
 
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useContext } from "react";
import { MyContext } from "../../App";
import UserAvatarImgComponent from "../userAvatarImg";
 
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
 
  const openMyAcc = Boolean(anchorEl);
  const openNotifications = Boolean(notificationAnchorEl);
 
  const [isLogin, setIsLogin] = useState(false);
 
  const context = useContext(MyContext);
 
  const handleOpenMyAccDr = (event) => {
    setAnchorEl(event.currentTarget);
  };
 
  const handleCloseMyAccDr = () => {
    setAnchorEl(null);
  };
 
  const handleOpennotificationsDr = (event) => {
    setNotificationAnchorEl(event.currentTarget);
  };
 
  const handleClosenotificationsDr = () => {
    setNotificationAnchorEl(null);
  };
 
  return (
    <header className="d-flex align-items-center">
      <div className="container-fluid w-100">
        <div className="row align-items-center w-100">
          <div className="col-sm-2 part1">
            <Link
              to="/"
              className="d-flex align-items-center text-decoration-none logo"
            >
              <img src={logo} alt="Company Logo" />
              <span className="ms-2">HOTASH</span>
            </Link>
          </div>
 
          <div className="col-sm-3 d-flex align-items-center part2">
            <Button
              className="rounded-circle me-3"
              onClick={() =>
                context.setIsToggleSidebar(!context.isToggleSidebar)
              }
            >
              {context.isToggleSidebar === false ? (
                <MdMenuOpen />
              ) : (
                <MdOutlineMenu />
              )}
            </Button>
            <SearchBox />
          </div>
 
          <div className="col-sm-7 d-flex align-items-center justify-content-end part3 ps-4">
            <Button
              className="rounded-circle me-3"
              onClick={() => {
                context.setThemeMode(!context.themeMode);
              }}
            >
              <MdOutlineLightMode />
            </Button>
            <Button className="rounded-circle me-3">
              <IoCartOutline />
            </Button>
 
            <Button className="rounded-circle me-3">
              <MdOutlineMailOutline />
            </Button>
            <Button
              className="rounded-circle me-3"
              onClick={handleOpennotificationsDr}
            >
              <FaRegBell />
            </Button>
            <Menu
              anchorEl={notificationAnchorEl}
              className="notifications dropdown_list"
              open={openNotifications}
              onClose={handleClosenotificationsDr}
              onClick={handleClosenotificationsDr}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <div className="head ps-3 pb-0">
                <h4>notifications (34)</h4>
              </div>
              <Divider className="mb-1" />
 
              <div className="scroll">
                <MenuItem
                  onClick={handleCloseMyAccDr}
                  className="notification-item"
                >
                  <div className="d-flex align-items-center">
                    <div >
                      <UserAvatarImgComponent img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>
                    </div>
                    <div className="dropdownInfo">
                      <h4>
                        <b>Mahmudul</b> added to his favorite list
                      </h4>
                      <h4>
                        <b> Leather belt steve madden</b>
                      </h4>
                      <span className="time-stamp">few seconds ago!</span>
                    </div>
                  </div>
                </MenuItem>
 
                <MenuItem
                  onClick={handleCloseMyAccDr}
                  className="notification-item"
                >
                  <div className="d-flex align-items-center">
                    <div className="userImg">
                      <span className="rounded-circle">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="dropdownInfo">
                      <h4>
                        <b>Mahmudul</b> added to his favorite list
                      </h4>
                      <h4>
                        <b> Leather belt steve madden</b>
                      </h4>
                      <span className="time-stamp">few seconds ago!</span>
                    </div>
                  </div>
                </MenuItem>
 
                <MenuItem
                  onClick={handleCloseMyAccDr}
                  className="notification-item"
                >
                  <div className="d-flex align-items-center">
                    <div className="userImg">
                      <span className="rounded-circle">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="dropdownInfo">
                      <h4>
                        <b>Mahmudul</b> added to his favorite list
                      </h4>
                      <h4>
                        <b> Leather belt steve madden</b>
                      </h4>
                      <span className="time-stamp">few seconds ago!</span>
                    </div>
                  </div>
                </MenuItem>
 
                <MenuItem
                  onClick={handleCloseMyAccDr}
                  className="notification-item"
                >
                  <div className="d-flex align-items-center">
                    <div className="userImg">
                      <span className="rounded-circle">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="dropdownInfo">
                      <h4>
                        <b>Mahmudul</b> added to his favorite list
                      </h4>
                      <h4>
                        <b> Leather belt steve madden</b>
                      </h4>
                      <span className="time-stamp">few seconds ago!</span>
                    </div>
                  </div>
                </MenuItem>
 
                <MenuItem
                  onClick={handleCloseMyAccDr}
                  className="notification-item"
                >
                  <div className="d-flex align-items-center">
                    <div className="userImg">
                      <span className="rounded-circle">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="dropdownInfo">
                      <h4>
                        <b>Mahmudul</b> added to his favorite list
                      </h4>
                      <h4>
                        <b> Leather belt steve madden</b>
                      </h4>
                      <span className="time-stamp">few seconds ago!</span>
                    </div>
                  </div>
                </MenuItem>
 
                <MenuItem
                  onClick={handleCloseMyAccDr}
                  className="notification-item"
                >
                  <div className="d-flex align-items-center">
                    <div className="userImg">
                      <span className="rounded-circle">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="dropdownInfo">
                      <h4>
                        <b>Mahmudul</b> added to his favorite list
                      </h4>
                      <h4>
                        <b> Leather belt steve madden</b>
                      </h4>
                      <span className="time-stamp">few seconds ago!</span>
                    </div>
                  </div>
                </MenuItem>
 
                <MenuItem
                  onClick={handleCloseMyAccDr}
                  className="notification-item"
                >
                  <div className="d-flex align-items-center">
                    <div className="userImg">
                      <span className="rounded-circle">
                        <img
                          src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                          alt=""
                        />
                      </span>
                    </div>
                    <div className="dropdownInfo">
                      <h4>
                        <b>Mahmudul</b> added to his favorite list
                      </h4>
                      <h4>
                        <b> Leather belt steve madden</b>
                      </h4>
                      <span className="time-stamp">few seconds ago!</span>
                    </div>
                  </div>
                </MenuItem>
              </div>
              <div className="ps-2 pe-2 w-100">
                <Button className="btn-blue w-100">
                  VIEW ALL NOTIFICATION
                </Button>
              </div>
            </Menu>
            {context.isLogin !== true ? (
              <Link to={"/login"}>
                <Button className="btn-blue btn-lg btn-round">Sign In</Button>
              </Link>
            ) : (
              <div className="myAccWrapper">
                <Button
                  className="myAcc d-flex align-items-center "
                  onClick={handleOpenMyAccDr}
                >
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        alt=""
                      />
                    </span>
                  </div>
 
                  <div className="userInfo">
                    <h4>Govind Gupta</h4>
                    <p className="mb-0">@govindgupta</p>
                  </div>
                </Button>
 
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={openMyAcc}
                  onClose={handleCloseMyAccDr}
                  onClick={handleCloseMyAccDr}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <Divider />
                  <MenuItem onClick={handleCloseMyAccDr}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    My Account
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDr}>
                    <ListItemIcon>
                      <IoShieldHalfSharp />
                    </ListItemIcon>
                    Reset Password
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDr}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
 
export default Header;