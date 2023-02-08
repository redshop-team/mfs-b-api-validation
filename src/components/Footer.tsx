import React from "react";

const Footer = () => {
  return (
    <footer className="fixed mx-auto w-full h-12 m-auto border-t-2 bottom-0 bg-white">
      <div className="container flex items-center text-center justify-between h-12 my-auto">
        <h2 className="text-center w-full">
          &copy; <em id="date"></em>Redshop Technologies Limited
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
