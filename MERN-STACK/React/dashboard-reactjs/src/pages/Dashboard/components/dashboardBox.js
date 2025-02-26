import { useState } from "react";
import Button from "@mui/material/Button";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineTrendingUp } from "react-icons/md";
import { IoMdTrendingDown } from "react-icons/io";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { CiTimer } from "react-icons/ci";

const ITEM_HEIGHT = 48; // Define ITEM_HEIGHT

const DashboardBox = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        className="dashboardBox"
        style={{
          backgroundImage: `linear-gradient(to right, ${props.color?.[0] || "#000"}, ${props.color?.[1] || "#fff"})`,
        }}
      >
        {props.grow ? (
          <span className="chart">
            <MdOutlineTrendingUp />
          </span>
        ) : (
          <span className="chart">
            <IoMdTrendingDown />
          </span>
        )}

        <div className="d-flex w-100">
          <div className="col1">
            <h4 className="text-white mb-0">Total Users</h4>
            <span className="text-white">277</span>
          </div>

          <div className="ms-auto">
            <span className="icon">{props.icon}</span>
          </div>
        </div>

        <div className="d-flex align-items-center w-100 bottomEle">
          <h6 className="text-white mb-0 mt-0">Last Month</h6>

          <div className="ms-auto">
            <Button className="ms-auto toggleIcon" onClick={handleClick}>
              <BsThreeDotsVertical />
            </Button>

            <Menu
              className="dropdown_menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: "20ch",
                },
              }}
            >
              {["Last Day", "Last Week", "Last Month", "Last Year"].map((option) => (
                <MenuItem key={option} onClick={handleClose}>
                <CiTimer/>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </Button>
    </>
  );
};

export default DashboardBox;
