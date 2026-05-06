import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="err-container">
      <h1>Let's Connect and Revolutionize E-commerce</h1>
      <h2>
        Reach out to Project Admin at{" "}
        <Link
          to="https://www.linkedin.com/in/priyanshu-negi-87a56124a/"
          target="_blank"
        >
          LinkedIn
        </Link>{" "}
        and{" "}
        <Link to="mailto:priyanshunegi752@gmail.com" target="_blank">
          priyanshunegi752@gmail.com
        </Link>
      </h2>
    </div>
  );
};

export default Contact;
