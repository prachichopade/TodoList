import React from "react";

export const Footer = () => {
  // Style for Footer- create object to add style
  let footerStyle = {
    position: "relative",
    top: "10vh",
    width: "100%",
  };
  return (
    //Footer
    <footer className="bg-dark text-light" style={footerStyle}>
      <p className="text-center my-3">Footer</p>
    </footer>
  );
};

export default Footer;
