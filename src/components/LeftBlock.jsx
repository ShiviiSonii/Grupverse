import React from "react";
import "./LeftBlock.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faSignsPost,faEnvelopesBulk,faUsers,faShareNodes} from '@fortawesome/free-solid-svg-icons';


function LeftBlock() {
  return (
    <>
      <div className="sidebar-container">
        <ul className="list">
          <li>
            <button className="activeButton active">
              <a href=" ">
                <FontAwesomeIcon icon={faUser} /> My Feed
              </a></button>
          </li>
          <li>
            <button className="activeButton"><a href=" ">
                <FontAwesomeIcon icon={faSignsPost} /> My Post
              </a></button>
          </li>
          <li>
            <button className="activeButton"><a href=" ">
                <FontAwesomeIcon icon={faEnvelopesBulk} /> My Team Post
              </a></button>
          </li>
          <li>
            <button className="activeButton"><a href=" ">
                <FontAwesomeIcon icon={faUsers} /> My Following Post
              </a></button>
          </li>
          <li>
            <button className="activeButton"><a href=" ">
                <FontAwesomeIcon icon={faShareNodes} /> Shared Post
              </a></button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LeftBlock;
