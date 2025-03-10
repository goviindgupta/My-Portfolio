import ProductZoom from "../../Components/ProductZoom";
import Rating from "@mui/material/Rating";
import QuantityBox from "../../Components/QuantityBox";
import Button from "@mui/material/Button";
import { IoIosCart } from "react-icons/io";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import RelatedProducts from "./RelatedProducts";


const ProductDetails = () => {
  const [activeSize, setActiveSize] = useState(null);

  const isActive = (index) => {
    setActiveSize(index);
  };
  return (
    <>
      <section className="productDetails section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 ps-5">
              <ProductZoom />
            </div>
            <div className="col-md-7 ps-5 pe-5">
              <h2 className="hd text-capitalize">
                All Natural Italian-Style Chicken Meatballs
              </h2>
              <ul className="list list-inline d-flex align-items-center">
                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <span className="text-light me-2">Brands : </span>
                    <span>Welch's</span>
                  </div>
                </li>

                <li className="list-inline-item">
                  <div className="d-flex align-items-center">
                    <Rating
                      name="read-only"
                      value={4.5}
                      readOnly
                      precision={0.5}
                      size="small"
                    />
                    <span className="text-light cursor ms-2">1 Review</span>
                  </div>
                </li>
              </ul>
              <div className="d-flex info mb-3 ">
                <span className="oldPrice">$20.00</span>
                <span className="netPrice text-danger ms-2">$14.00</span>
              </div>
              <span className="badge bg-success">In Stock</span>

              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                tempore provident, fugit maiores nemo maxime nulla, suscipit
                illum, id quibusdam facilis nam numquam asperiores impedit!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab
                perspiciatis aperiam accusamus cumque veniam, rem similique
                exercitationem sit quia, facere beatae adipisci earum quis.
              </p>

              <div className="productSize d-flex align-items-center">
                <span>Size / Weight:</span>
                <ul className="list list-inline mb-0 ps-4">
                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 0 ? "active" : ""}`}
                      onClick={() => isActive(0)}
                    >
                      50g
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 1 ? "active" : ""}`}
                      onClick={() => isActive(1)}
                    >
                      100g
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 2 ? "active" : ""}`}
                      onClick={() => isActive(2)}
                    >
                      200g
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 3 ? "active" : ""}`}
                      onClick={() => isActive(3)}
                    >
                      300g
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a
                      className={`tag ${activeSize === 4 ? "active" : ""}`}
                      onClick={() => isActive(4)}
                    >
                      500g
                    </a>
                  </li>
                </ul>
              </div>

              <div className="d-flex align-items-center mt-3">
                <QuantityBox />
                <Button className="btn-blue btn-lg btn-big btn-round">
                  <IoIosCart />
                  &nbsp; Add to Cart
                </Button>
                <Tooltip title="Add to Wishlist" placement="top">
                <Button className="btn-blue btn-lg btn-big btn-circle ms-4">
                  <FaRegHeart />
                </Button>
                </Tooltip>
                <Tooltip title="Add to Compare" placement="top">
                <Button className="btn-blue btn-lg btn-big btn-circle ms-2">
                  <MdCompareArrows />
                </Button>
                </Tooltip>
              </div>
            </div>
          </div>

          <br />
          <RelatedProducts title="RELATED PRODUCTS"/>
          <RelatedProducts title="RECENTLY VIEW PRODUCTS"/>
        </div>
      </section>
    </>
  );
};
export default ProductDetails;
