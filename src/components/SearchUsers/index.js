import { useState, useEffect } from "react";
import Fruits from "../Fruits";
import "./index.css";

const SearchUsers = ({
  filterByCategory,
  checkedCategory = "",
  filterValue,
  setFilterValue,
}) => {
  const handleChangeValue = (event) => {
    event.preventDefault();
    setFilterValue(event.target.value);
  };

  return (
    <div className="search-users">
      <div />
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search"
          className="input"
          value={filterValue}
          onChange={handleChangeValue}
        />
      </div>
      <Fruits
        filterByCategory={filterByCategory}
        checkedCategory={checkedCategory}
      />
    </div>
  );
};

export default SearchUsers;
