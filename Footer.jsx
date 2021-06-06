import React from "react";

function Footer() {

   var currYear = new Date().getFullYear();

  return (
      <footer>
        <p>Cpoyright @ {currYear}</p>
      </footer>
  );
}

export default Footer;
