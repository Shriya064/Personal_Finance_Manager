import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import Home from "../../pages/Home/Home";

const Menu = () => {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleLinkClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="menu">
     
      <div className="item">
        <Link to="/" className="listItem" onClick={() => handleLinkClick("profile")}>
          <span className="listItemTitle">Profile</span>
        </Link>
        <Link to="/" className="listItem" onClick={() => handleLinkClick("createTransaction")}>
          <span className="listItemTitle">Create New Transaction</span>
        </Link>
        <Link to="/" className="listItem" onClick={() => handleLinkClick("prevTransactions")}>
          <span className="listItemTitle">Prev Transactions</span>
        </Link>
        <Link to="/" className="listItem" onClick={() => handleLinkClick("charts")}>
          <span className="listItemTitle">Charts</span>
        </Link>
      </div>

      <div className="content">
        <Home selectedContent={selectedContent} />
      </div>
    </div>
  );
};

export default Menu;