import Button from "@mui/material/Button";
import { MdDashboard } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { MyContext } from "../../App";
const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isToggleSubMenu, setIsToggleSubmenu] = useState(false);

  const context = useContext(MyContext)


  const isOpenSubmenu = (index) => {
    setActiveTab(index);
    setIsToggleSubmenu(!isToggleSubMenu);
  };
  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 0 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(0)}
              >
                <span className="icon">
                  <MdDashboard />
                </span>
                Dashboard
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Button
              className={`w-100 ${
                activeTab === 1 && isToggleSubMenu === true ? "active" : ""
              }`}
              onClick={() => isOpenSubmenu(1)}
            >
              <span className="icon">
                <MdOutlineProductionQuantityLimits />
              </span>
              Products
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>

            <div
              className={`submenuWrapper ${
                activeTab === 1 && isToggleSubMenu === true
                  ? "colapse"
                  : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li>
                  <Link to="#">Product List</Link>
                </li>
                <li>
                  <Link to="/product/details">Product View</Link>
                </li>
                <li>
                  <Link to="/product/upload">Product Upload</Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 2 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(2)}
              >
                <span className="icon">
                  <FaShoppingCart />
                </span>
                Orders
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 3 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(3)}
              >
                <span className="icon">
                  <MdEmail />
                </span>
                Messages
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 4 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(4)}
              >
                <span className="icon">
                  <IoMdNotifications />
                </span>
                Notifications
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 5 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(5)}
              >
                <span className="icon">
                  <IoMdSettings />
                </span>
                Settings
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 6 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(6)}
              >
                <span className="icon">
                  <MdDashboard />
                </span>
                Dashboard
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Button
              className={`w-100 ${activeTab === 7 ? "active" : ""}`}
              onClick={() => isOpenSubmenu(7)}
            >
              <span className="icon">
                <MdOutlineProductionQuantityLimits />
              </span>
              Products
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 8 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(8)}
              >
                <span className="icon">
                  <FaShoppingCart />
                </span>
                Orders
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 9 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(9)}
              >
                <span className="icon">
                  <MdEmail />
                </span>
                Messages
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${activeTab === 10 ? "active" : ""}`}
                onClick={() => isOpenSubmenu(10)}
              >
                <span className="icon">
                  <IoMdNotifications />
                </span>
                Notifications
                <span className="arrow">
                  <IoIosArrowForward />
                </span>
              </Button>
            </Link>
          </li>
        </ul>

        <br />

        <div className="logoutWrapper">
          <div className="logoutBox">
            <Button variant="contained">
              <IoMdLogOut />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
