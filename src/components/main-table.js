import React, { useState, useEffect } from "react";
import socketClient from "socket.io-client";

const endpoint = "https://mst-full-stack-dev-test.herokuapp.com/";

const MainTable = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketClient(endpoint);
    socket.on("data-update", (data) => {
      setResponse(data);
    });
  }, []);

  const responseObjectKeys = Object.keys(response);
  const responseObjectValues = Object.values(response);

  return (
    <table className="main-table">
      <thead className="table-head">
        <tr className="table-row">
          <td className="table-category">
            Category:
            {responseObjectKeys.map((key) => {
              return <div>{key}</div>;
            })}
          </td>
          <td className="table-value">
            Value:
            {responseObjectValues.map((value) => {
              return <div>{value}</div>;
            })}
          </td>
        </tr>
      </thead>
    </table>
  );
};

export default MainTable;
