import { useEffect, useState } from "react";
import { handleChangeInput } from "../lib/functions";
// import { useLocation, Link } from "react-router-dom";
// import { useContext } from "react/cjs/react.development";
// import AppContext from "../context/AppContext";
// import { getUserById } from "../lib/firebaseFunctions";

function Signup() {
  const [formData, setFormData] = useState({});
  const [isFormComplete, setIsFormComplete] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  const handleInput = (e) => {
    handleChangeInput(e, formData, setFormData);
  };
  
  const handleSubmit = () => {
      alert("Great");
  };

  useEffect(() => {
    if (
      formData.email &&
      formData.password &&
      formData.confirmPassword &&
      formData.password === formData.confirmPassword
      // maybe check for is it an actual email and also password strength
    ) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [formData]);

  useEffect(() => {
    if (
      formData.password !== formData.confirmPassword 
    //   !formData.password ||
    //   !formData.confirmPassword
    ) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [formData]);

  return (
    <div className={``}>
      <h1>Signup</h1>
      <div>
        <input
          type="text"
          placeholder="Email"
          className={``}
          name={`email`}
          onChange={handleInput}
        />
        <input
          type="password"
          placeholder="Password"
          className={``}
          name={`password`}
          onChange={handleInput}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className={``}
          name={`confirmPassword`}
          onChange={handleInput}
        />
        {showAlert && <div>Passwords must match</div>}
        <button disabled={!isFormComplete} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
export default Signup;
