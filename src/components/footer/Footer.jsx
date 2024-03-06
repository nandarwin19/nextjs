import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Nwin's Note Taking App
        </p>
        <p className="text-sm">Contact: nwin@example.com</p>
      </div>
    </footer>
  );
};

export default Footer;
