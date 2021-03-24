import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="ui menu">
      <Link className="item" to="/">
        Home
      </Link>
      <Link className="item" to="/books">
        Books
      </Link>
      <Link className="item" to="/create">
        Add A Review
      </Link>
    </div>
  );
};

export default Navigation;
