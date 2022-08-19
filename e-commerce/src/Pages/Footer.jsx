import "./Footer.css"
import { Link } from "react-router-dom";

export const Footer = () => {
  return (<footer>
    <div className="content">
      <div className="top">
        <div className="logo-details">
          <i className="fab fa-slack"></i>
          <span className="logo_name">Store</span>
        </div>
        <div className="media-icons">
          <Link to="#"><i className="fab fa-facebook-f"></i></Link>
          <Link to="#"><i className="fab fa-twitter"></i></Link>
          <Link to="#"><i className="fab fa-instagram"></i></Link>
          <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
          <Link to="#"><i className="fab fa-youtube"></i></Link>
        </div>
      </div>
      <div className="link-boxes">
        <ul className="box">
          <li className="">Company</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/cart">Cart Page</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
        <ul className="box">
          <li className="">Services</li>
          <li><Link to="#">App design</Link></li>
          <li><Link to="#">Web design</Link></li>
          <li><Link to="#">Logo design</Link></li>
          <li><Link to="#">Selling</Link></li>
        </ul>
        <ul className="box">
          <li className="">Account</li>
          <li><Link to="#">Profile</Link></li>
          <li><Link to="#">My account</Link></li>
          <li><Link to="#">Preferances</Link></li>
          <li><Link to="#">Purchase</Link></li>
        </ul>
        <ul className="box input-box">
          <li className="">Send us query</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Click to send"/></li>
        </ul>
      </div>
    </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright &#169; 2022 <Link to="#">Abhi Store Inc.</Link>All rights reserved</span>
        <span className="policy_terms">
          <Link to="#">Privacy policy</Link>
          <Link to="#">Terms & condition</Link>
        </span>
      </div>
    </div>
  </footer>);
};
