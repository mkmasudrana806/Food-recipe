import React from "react";
import "./chefDetailsCart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const ChefDetailsCart = ({ chef, totalRecipes }) => {
  console.log(chef);
  return (
    <div
      style={{
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        borderRadius: "8px",
      }}
      className="rounded p-2"
    >
      <div className="d-flex align-items-center chef-cart">
        <div className="chef-cart-img">
          <img className="rounded chef-img" src={chef.photo} alt="" />
        </div>
        {/* chef info body  */}
        <div className="ms-3">
          <h4>{chef?.name}</h4>
          <p className="mb-1">{chef.description}</p>
          <div className="d-flex justify-content-between">
            <p>
              <strong>Experience: {chef?.yearsOfExperience}</strong>
            </p>
            <p>
              <strong>
                <FontAwesomeIcon icon={faClipboardList} /> {totalRecipes}
              </strong>
            </p>
            <p>
              <strong>
                {" "}
                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> {chef.rating}
              </strong>
            </p>
            <p>
              <strong>
                <FontAwesomeIcon icon={faThumbsUp} /> {chef.likes}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetailsCart;
