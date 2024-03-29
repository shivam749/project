import React from "react";
import Template from "../components/Template";
import SignupImg from "../components/assets/SignupImg.png";

const Signup = ({setIsLoggedIn}) => {
    return (
        <Template
             title="Personal Details"
             desc1="Skill seekho chahe jahaan se.."
             desc2="Job milega yha se..."
             image={SignupImg}
             formtype="signup"
             setIsLoggedIn={setIsLoggedIn}
        />
    )
 }

export default Signup 