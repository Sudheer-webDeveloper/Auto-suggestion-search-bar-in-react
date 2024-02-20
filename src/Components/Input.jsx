import axios from "axios";
import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import Suggestions from "./Suggestions";

const Input = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggesstions, setSuggesstions] = useState([]);

  const fetchData = async (value) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    ); // this dummmy url will give array of users
    const results = response.data.filter(
      (user) =>
        user &&
        user.name &&
        (user.name.toLowerCase().includes(value) ||
          user.username.toLowerCase().includes(value))
    );
    setSuggesstions(results);
  };

  const handleChange = (value) => {
    setSearchTerm(value);
    fetchData(value);
  };

  console.log(searchTerm, searchTerm.length);

  return (
    <main className="search">
      <div className="input">
        <GoSearch className="search-icon" />
        <input
          type="text"
          value={searchTerm}
          placeholder="search here..."
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className="new-suggest">
        {suggesstions.length && <Suggestions searches={suggesstions} />}
      </div>
    </main>
  );
};

export default Input;
