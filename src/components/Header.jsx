import React from "react";
import "./header.css"
const Header = ({ money, total }) => {
  return (
    <div className="header" >
      {(total > 0 && <>Harcayamak için <span>${money - total}</span>  paranız kaldı.</>) || (
        <>Harcamak için  <span>${money}</span>  paranız var. </>
      )}
     
    </div>
  );
};

export default Header;
