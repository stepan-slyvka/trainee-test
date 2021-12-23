import React from "react";

const People = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.birth}</td>
      <td>{props.height}</td>
      <td>{props.mass}</td>
    </tr>
  );
};

export default People;
