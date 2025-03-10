import Button from "@mui/material/Button";
import { IoIosArrowDown } from "react-icons/io";
import Dialog from "@mui/material/Dialog";
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import Slide from "@mui/material/Slide";
import React from "react";
import { MyContext } from "../../App.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {
  const [isOpenModel, setisOpenModel] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [countryList, setCountryList] = useState([]);
  const context = useContext(MyContext);

  const selectCountry = (index,country) => {
    setSelectedTab(index);
    setisOpenModel(false);
    context.setSelectedCountry(country)
  };
  useEffect(() => {
    setCountryList(context.countryList);
  }, []);
  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword !== "") {
      const list = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setCountryList(list);
    }else{
      setCountryList(context.countryList);
    }
   
  };
  return (
    <>
      <Button className="countryDrop" onClick={() => setisOpenModel(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">{context.selectedCountry!==""?context.selectedCountry.length>10 ? context.selectedCountry?.substr(0,10)+'...':context.selectedCountry:'Select Location'}</span>
        </div>
        <span className="ms-auto">
          <IoIosArrowDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModel}
        onClose={() => setisOpenModel(false)}
        className="locationModel"
        TransitionComponent={Transition}
      >
        <h4 className="mb-0">Choose Your Delivery Location</h4>
        <p>Enter your address and we will specify the offer for your area</p>
        <Button className="close_" onClick={() => setisOpenModel(false)}>
          <IoClose />
        </Button>
        <div className="headerSearch w-100">
          <input
            type="text"
            placeholder="Search your area..."
            onChange={filterList}
          />
          <Button>
            <IoMdSearch />
          </Button>
        </div>

        <ul className="countryList mt-3">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li key={index}>
                  <Button
                    onClick={() => selectCountry(index,item.country)}
                    className={`${selectedTab === index ? "active" : ""}`}
                  >
                    {item.country}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </>
  );
};
export default CountryDropDown;
