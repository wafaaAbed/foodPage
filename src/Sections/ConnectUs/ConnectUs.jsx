import Button from "../../Component/Button/Button";
import "./ConnectUs.css";
import Motion from "../../Component/Motion/Motion";
const ConnectUs = () => {
  return (
    <Motion>
    <div className="connectUs">
      <h1 className="headConnect">Hurry up! Subscribe our newsletter and get 25% Off</h1>
      <p className="text-secandary text-center">Limited time offer for this month. No credit card required.</p>
    <div className="emailAddress">
      <input type="email" placeholder="Email Address her" className="me-2"/>
      <Button name="subscribe"/>
    </div>
    
    </div>
    </Motion>
  );
};

export default ConnectUs;
