import React, { useRef } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import { MdBrandingWatermark } from "react-icons/md";
import Slider from "react-slick";
import { BiSolidCategory } from "react-icons/bi";
import UserAvatarImgComponent from "../../components/userAvatarImg";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaReply } from "react-icons/fa";






const label = { inputProps: { "aria-label": "Checkbox demo" } };

// Breadcrumb code
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];

  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const ProductDetails = () => {
  
  const productSliderBig = useRef()
  const productSliderSml = useRef()


  var productSliderOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  var productSliderSmlOptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  const goToSlide = (index) =>{
    productSliderBig.current.slickGoTo(index)
    productSliderSml.current.slickGoTo(index)
  } 
  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Product View</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ms-auto breadcrumbs_">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb label="Products" component="a" href="#" />

            <StyledBreadcrumb label="Products View" />
          </Breadcrumbs>
        </div>

        <div className="card productDetailsSection">
          <div className="row">
            <div className="col-md-5">
              <div className="sliderWrapper pt-3 pb-3 ps-4 pe-4">
                <h6 className="mb-4">Product Gallery</h6>

                <Slider {...productSliderOptions} ref={productSliderBig} className="SliderBig mb-2">
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp"
                      alt=""
                    />
                  </div>
                </Slider>

                <Slider {...productSliderSmlOptions} ref={productSliderSml}  className="SliderSml">
                  <div className="item" onClick={()=> goToSlide(1)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp"
                      alt=""
                    />
                  </div>
                  <div className="item"  onClick={()=> goToSlide(2)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp"
                      alt=""
                    />
                  </div>
                  <div className="item"  onClick={()=> goToSlide(3)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp"
                      alt=""
                    />
                  </div>
                  <div className="item"  onClick={()=> goToSlide(4)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp"
                      alt=""
                    />
                  </div>
                  <div className="item"  onClick={()=> goToSlide(5)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/06.webp"
                      alt=""
                    />
                  </div>
                  <div className="item"  onClick={()=> goToSlide(6)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/07.webp"
                      alt=""
                    />
                  </div>
                  <div className="item"  onClick={()=> goToSlide(7)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/08.webp"
                      alt=""
                    />
                  </div>
                  <div className="item"  onClick={()=> goToSlide(8)}>
                    <img
                      src="https://mironcoder-hotash.netlify.app/images/product/single/09.webp"
                      alt=""
                    />
                  </div>
                </Slider>
              </div>
            </div>

            <div className="col-md-7">
              <div className="pt-3 pb-3 ps-4 pe-4">
                <h6 className="mb-4">Product Detail</h6>
                <h4>
                  Formal suits for men wedding slim fit 3 piece dress business
                  party jacket
                </h4>
                <div className="productInfo mt-4">
                  <div className="row mb-2">
                    <div className="col-md-3 d-flex align-items-center">
                      <span className="icon">
                        <MdBrandingWatermark />
                      </span>
                      <span className="name">Brand</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>Ecstasy</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3 d-flex align-items-center">
                      <span className="icon">
                        <BiSolidCategory />
                      </span>
                      <span className="name">Category</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>Men's</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3 d-flex align-items-center">
                      <span className="icon">
                        <BiSolidCategory />
                      </span>
                      <span className="name">Tags</span>
                    </div>
                    <div className="col-sm-9">
                      :{" "}
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>SUITE</span>
                          </li>
                          <li className="list-inline-item">
                            <span>PARTY</span>
                          </li>
                          <li className="list-inline-item">
                            <span>DRESS</span>
                          </li>
                          <li className="list-inline-item">
                            <span>SMART</span>
                          </li>
                          <li className="list-inline-item">
                            <span>MAN</span>
                          </li>
                          <li className="list-inline-item">
                            <span>STYLES</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3 d-flex align-items-center">
                      <span className="icon">
                        <BiSolidCategory />
                      </span>
                      <span className="name">Color</span>
                    </div>
                    <div className="col-sm-9">
                      :{" "}
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>RED</span>
                          </li>
                          <li className="list-inline-item">
                            <span>BLUE</span>
                          </li>
                          <li className="list-inline-item">
                            <span>WHITE</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3 d-flex align-items-center">
                      <span className="icon">
                        <BiSolidCategory />
                      </span>
                      <span className="name">Size</span>
                    </div>
                    <div className="col-sm-9">
                      :{" "}
                      <span>
                        <ul className="list list-inline tags sml">
                          <li className="list-inline-item">
                            <span>SM</span>
                          </li>
                          <li className="list-inline-item">
                            <span>MD</span>
                          </li>
                          <li className="list-inline-item">
                            <span>LG</span>
                          </li>
                        </ul>
                      </span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3 d-flex align-items-center">
                      <span className="icon">
                        <BiSolidCategory />
                      </span>
                      <span className="name">Price</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>Men's</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3 d-flex align-items-center">
                      <span className="icon">
                        <BiSolidCategory />
                      </span>
                      <span className="name">Stock</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>$37.00</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3 d-flex align-items-center">
                      <span className="icon">
                        <BiSolidCategory />
                      </span>
                      <span className="name">Review</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>(0.3) Review</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-3 d-flex align-items-center">
                      <span className="icon">
                        <BiSolidCategory />
                      </span>
                      <span className="name">Published</span>
                    </div>
                    <div className="col-sm-9">
                      : <span>02 Feb 2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4">
            <h6 className="mt-4 mb-3">Product Description</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
              beatae commodi impedit doloremque, distinctio necessitatibus
              quidem quibusdam explicabo ducimus iusto corporis dolores, nam a
              amet iure laboriosam? A odit et ab delectus placeat repellendus
              distinctio? Molestias ut explicabo magnam veritatis ipsam autem
              pariatur, quibusdam dignissimos iure quisquam qui minima expedita,
              quaerat harum nam aliquam voluptatem obcaecati voluptatum unde
              voluptas. Provident suscipit porro excepturi earum laudantium
              repellendus quia, exercitationem inventore repudiandae optio
              aspernatur illo voluptas accusamus est illum blanditiis
              consequatur nihil tenetur sequi temporibus velit nobis delectus
              maiores! Facere sed pariatur placeat soluta, quibusdam amet
              consequuntur tempora iusto accusamus officia? Explicabo!
            </p>

            <br />

            <h6 className="mt-4 mb-4">Rating Analytics</h6>

            <div className="ratingSection">
              <div className="ratingrow d-flex align-items-center">
                <span className="col1">5 Star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "70%" }}
                    >
                      <span className="sr-only">70% Complete</span>
                    </div>
                  </div>
                </div>
                <span className="col3">(22)</span>
              </div>

              <div className="ratingrow d-flex align-items-center">
                <span className="col1">4 Star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "50%" }}
                    >
                      <span className="sr-only">50% Complete</span>
                    </div>
                  </div>
                </div>
                <span className="col3">(22)</span>
              </div>

              <div className="ratingrow d-flex align-items-center">
                <span className="col1">3 Star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "40%" }}
                    >
                      <span className="sr-only">40% Complete</span>
                    </div>
                  </div>
                </div>
                <span className="col3">(2)</span>
              </div>

              <div className="ratingrow d-flex align-items-center">
                <span className="col1">1 Star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "20%" }}
                    >
                      <span className="sr-only">20% Complete</span>
                    </div>
                  </div>
                </div>
                <span className="col3">(2)</span>
              </div>

              <div className="ratingrow d-flex align-items-center">
                <span className="col1">4 Star</span>
                <div className="col2">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: "50%" }}
                    >
                      <span className="sr-only">50% Complete</span>
                    </div>
                  </div>
                </div>
                <span className="col3">(2)</span>
              </div>
            </div>

            <br /> 

            <h6 className="mt-4 mb-4">Customer reviews</h6>

            <div className="reviewSection">


              <div className="reviewrow">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex  flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserAvatarImgComponent
                          img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                          lg={true}
                        />

                        <div className="info ps-3">
                          <h6>Govind Gupta</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={4.5}
                        readOnly
                        precision={0.5}
                      />
                    </div>

                    
                  </div>

                  <div className="col-md-5 d-flex align-items-center">
                  <div className="ms-auto">
                      <Button className="btn-blue btn-big btn-lg ms-auto reply-btn">
                      <FaReply className="reply-icon"/>&nbsp; Reply</Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod hic expedita quae fugiat corrupti, possimus odio,
                    mollitia amet aliquam quaerat nemo obcaecati vel minima quas
                    nisi provident officia sint ratione, ullam numquam? Deserunt
                    et sapiente accusamus cupiditate eveniet optio odit
                    consectetur quos saepe. Expedita unde inventore cum corrupti
                    neque vel!
                  </p>
                </div>
              </div>



              <div className="reviewrow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex  flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserAvatarImgComponent
                          img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                          lg={true}
                        />

                        <div className="info ps-3">
                          <h6>Govind Gupta</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={4.5}
                        readOnly
                        precision={0.5}
                      />
                    </div>

                    
                  </div>

                  <div className="col-md-5 d-flex align-items-center">
                  <div className="ms-auto">
                      <Button className="btn-blue btn-big btn-lg ms-auto reply-btn">
                      <FaReply className="reply-icon"/>&nbsp; Reply</Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod hic expedita quae fugiat corrupti, possimus odio,
                    mollitia amet aliquam quaerat nemo obcaecati vel minima quas
                    nisi provident officia sint ratione, ullam numquam? Deserunt
                    et sapiente accusamus cupiditate eveniet optio odit
                    consectetur quos saepe. Expedita unde inventore cum corrupti
                    neque vel!
                  </p>
                </div>
              </div>

              <div className="reviewrow reply">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex  flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserAvatarImgComponent
                          img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                          lg={true}
                        />

                        <div className="info ps-3">
                          <h6>Govind Gupta</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={4.5}
                        readOnly
                        precision={0.5}
                      />
                    </div>

                    
                  </div>

                  <div className="col-md-5 d-flex align-items-center">
                  <div className="ms-auto">
                      <Button className="btn-blue btn-big btn-lg ms-auto reply-btn">
                      <FaReply className="reply-icon"/>&nbsp; Reply</Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod hic expedita quae fugiat corrupti, possimus odio,
                    mollitia amet aliquam quaerat nemo obcaecati vel minima quas
                    nisi provident officia sint ratione, ullam numquam? Deserunt
                    et sapiente accusamus cupiditate eveniet optio odit
                    consectetur quos saepe. Expedita unde inventore cum corrupti
                    neque vel!
                  </p>
                </div>
              </div>


              <div className="reviewrow">
                <div className="row">
                  <div className="col-sm-7 d-flex">
                    <div className="d-flex  flex-column">
                      <div className="userInfo d-flex align-items-center mb-3">
                        <UserAvatarImgComponent
                          img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                          lg={true}
                        />

                        <div className="info ps-3">
                          <h6>Govind Gupta</h6>
                          <span>25 minutes ago!</span>
                        </div>
                      </div>
                      <Rating
                        name="read-only"
                        value={4.5}
                        readOnly
                        precision={0.5}
                      />
                    </div>

                    
                  </div>

                  <div className="col-md-5 d-flex align-items-center">
                  <div className="ms-auto">
                      <Button className="btn-blue btn-big btn-lg ms-auto reply-btn">
                      <FaReply className="reply-icon"/>&nbsp; Reply</Button>
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod hic expedita quae fugiat corrupti, possimus odio,
                    mollitia amet aliquam quaerat nemo obcaecati vel minima quas
                    nisi provident officia sint ratione, ullam numquam? Deserunt
                    et sapiente accusamus cupiditate eveniet optio odit
                    consectetur quos saepe. Expedita unde inventore cum corrupti
                    neque vel!
                  </p>
                </div>
              </div>
            </div>

            <br/>

            <h6 className="mt-4 mb-4">Review Reply Form</h6>

            <form className="reviewForm ">
              <textarea placeholder="write here"></textarea>

              <Button className="btn-blue btn-big btn-lg w-100 mt-4">drop your replies</Button>
            </form>


          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
