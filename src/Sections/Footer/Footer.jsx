import "./Footer.css";
import Motion from "../../Component/Motion/Motion";
const Footer = () => {
  return (
    
    <div className="footer">
      <Motion>
      <div className="footerContainer">
        <ul className="item">
          <li>Register</li>
          <li>Forum</li>
          <li>Affiliate</li>
          <li>FQA</li>
        </ul>
        <ul className="item pt-2">
          <li><img src="telegram.png" alt="telegram" /></li>
          <li><img src="facebook.png" alt="facebook" /></li>
          <li><img src="youtube.png" alt="youtube" /></li>
          <li><img src="twitter.png" alt="twitter" /></li>
          <li><img src="instagram.png" alt="instagram" /></li>

        </ul>
        <p className="pt-3 f-small">© 2024 Foodera. All rights reserved.</p>
      </div>
      </Motion>
    </div>
  );
};

export default Footer;
