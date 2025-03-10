import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { IoClose } from "react-icons/io5";
import Slide from "@mui/material/Slide";
import React, { useContext, useRef } from "react";
import Rating from "@mui/material/Rating";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import QuantityBox from "../QuantityBox";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { MyContext } from "../../App";
import ProductZoom from "../ProductZoom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ProductModel = (props) => {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();
  const context = useContext(MyContext)

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  var settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };

  const goto = (index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  };

  return (
    <>
      <Dialog
        open={true}
        className="productModel"
        onClose={() => context.setisOpenProductModel(false)}
      >
        <Button className="close_" onClick={() => context.setisOpenProductModel(false)}>
          <IoClose />
        </Button>
        <h4 className="mb-1 font-weight-bold">
          All Natural Italian-Style Chicken Meatballs
        </h4>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center me-4">
            <span>Brands:</span>
            <span className="ms-2">
              <b>Welch's</b>
            </span>
          </div>

          <Rating
            name="read-only"
            value={4.5}
            readOnly
            size="small"
            precision={0.5}
          />
        </div>

        <hr />

        <div className="row mt-2 productDetailsModel">
          <div className="col-md-5">
            <ProductZoom/>
          </div>
          <div className="col-md-7">
            <div className="d-flex info align-items-center mb-3">
              <span className="oldPrice lg me-2">$9.35</span>
              <span className="netPrice text-danger lg">$7.25</span>
            </div>

            <span className="badge bg-success">IN STOCK</span>
            <p className="mt-3">
              Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
              malesuada tincidunt. Class aptent taciti sociosqu ad litora
              torquentk
            </p>

            <div className="d-flex align-items-center">
              <QuantityBox />

              <Button className="btn-blue btn-lg btn-big btn-round ms-3">
                Add to Cart
              </Button>
            </div>

            <div className="d-flex align-items-center mt-5 actions">
              <Button className="btn-round btn-sml" variant="outlined">
                <FaRegHeart />
                &nbsp; Add to wishlist
              </Button>

              <Button className="btn-round btn-sml ms-3" variant="outlined">
                <MdCompareArrows />
                &nbsp; Compare
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default ProductModel;
