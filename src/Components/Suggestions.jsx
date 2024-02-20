import React from "react";

const Suggestions = ({ searches }) => {
  return (
    <ul className="sugesstions">
      {searches?.map((suggestion, index) => {
        return <li key={index}>{suggestion.name}</li>;
      })}
    </ul>
  );
};

export default Suggestions;
