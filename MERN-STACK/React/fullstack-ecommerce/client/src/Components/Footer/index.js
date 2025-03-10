import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentFill } from "react-icons/ri";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="topInfo row">
                        <div className="col d-flex align-items-center">
                            <span><LuShirt/></span>
                             <span className="ms-2">Every Fresh Products</span>
                        </div>
                        <div className="col d-flex align-items-center">
                            <span><TbTruckDelivery/></span>
                             <span className="ms-2">Free delivery for order over$70</span>
                        </div>
                        <div className="col d-flex align-items-center">
                            <span><RiDiscountPercentFill/></span>
                             <span className="ms-2">Daily Mega Discounts</span>
                        </div>
                        <div className="col d-flex align-items-center">
                            <span><CiBadgeDollar/></span>
                             <span className="ms-2">Best price on the Market</span>
                        </div>
                    </div>

                    <div className="row mt-5 linksWrap">
                        <div className="col">
                        <h5>FRUIT & VEGETABLES</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegetables</Link></li>
                                <li><Link to="#">Herbs & Seasonings</Link></li>
                                <li><Link to="#">Fresh Fruits</Link></li>
                                <li><Link to="#">Cuts & Sprouts</Link></li>
                                <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                                <li><Link to="#">Packaged Produce</Link></li>
                                <li><Link to="#">Party Trays</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                        <h5>BREAKFAST & DAIRY</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegetables</Link></li>
                                <li><Link to="#">Herbs & Seasonings</Link></li>
                                <li><Link to="#">Fresh Fruits</Link></li>
                                <li><Link to="#">Cuts & Sprouts</Link></li>
                                <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                                <li><Link to="#">Packaged Produce</Link></li>
                                <li><Link to="#">Party Trays</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                        <h5>MEAT & SEAFOOD</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegetables</Link></li>
                                <li><Link to="#">Herbs & Seasonings</Link></li>
                                <li><Link to="#">Fresh Fruits</Link></li>
                                <li><Link to="#">Cuts & Sprouts</Link></li>
                                <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                                <li><Link to="#">Packaged Produce</Link></li>
                                <li><Link to="#">Party Trays</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                        <h5>BEVERAGES</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegetables</Link></li>
                                <li><Link to="#">Herbs & Seasonings</Link></li>
                                <li><Link to="#">Fresh Fruits</Link></li>
                                <li><Link to="#">Cuts & Sprouts</Link></li>
                                <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                                <li><Link to="#">Packaged Produce</Link></li>
                                <li><Link to="#">Party Trays</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                        <h5>BREADS & BAKERY</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegetables</Link></li>
                                <li><Link to="#">Herbs & Seasonings</Link></li>
                                <li><Link to="#">Fresh Fruits</Link></li>
                                <li><Link to="#">Cuts & Sprouts</Link></li>
                                <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                                <li><Link to="#">Packaged Produce</Link></li>
                                <li><Link to="#">Party Trays</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="copyright mt-3 pt-3 pb-3 d-flex">
                        <p className="mb-0">Copyright 2025. All right reserved</p>
                        <ul className="list list-inline ms-auto mb-0 socials">
                            <li className="list-inline-item">
                                <Link to="#"><FaFacebookF/></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#"><FaTwitter/></Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="#"><FaSquareInstagram/></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer