import React from "react";
import './error-indicator.css'
import icon from './death-star.png'

const ErrorIndicator = () => {
    return(
      <div className="error-indicator">
          <img className="err_img" src={icon} alt="error icon"/>
          <span className="boom">
              Boom!
          </span>
          <span>
               Something has gone terrible wrong
          </span>
          <span>
              (but we fix it)
          </span>
      </div>
    );
}

export default ErrorIndicator;