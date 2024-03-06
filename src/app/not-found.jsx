import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>Sorry, the page you are looking for doesn't exist.</h1>
      <Link href={"/"}>Return Home</Link>
    </div>
  );
};

export default NotFound;
