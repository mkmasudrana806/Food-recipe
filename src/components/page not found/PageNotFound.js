import React from "react";
import pageNotFoundImg from "../../404img.jpg";

const PageNotFound = () => {
  return (
    <div>
      <div className="page-not-found">
        <h3>This page not found or broken</h3>
        <img className="w-100" src={pageNotFoundImg} alt="" />
      </div>
    </div>
  );
};

export default PageNotFound;
