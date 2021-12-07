import React, { useState, useEffect } from "react";
import socketClient from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

import "./style.css";

const endpoint = "https://mst-full-stack-dev-test.herokuapp.com/";

const MainTable = () => {
  // hooks
  const [response, setResponse] = useState("");

  // listening on data-update via socket.io and storing the data in "response"
  useEffect(() => {
    const socket = socketClient(endpoint);
    socket.on("data-update", (data) => {
      setResponse(data);
    });
  }, []);

  // getting arrays for the object keys and values
  const responseObjectKeys = Object.keys(response);
  const responseObjectValues = Object.values(response);

  return (
    <table className="main-table">
      <thead>
        <tr>
          <td className="table-column">
            <h1 className="table-header">Category</h1>
            {/* for every key in the previously created keys array, create a table entry */}
            {responseObjectKeys.map((key) => {
              return (
                <div className="table-cell" key={uuidv4()}>
                  {key}
                </div>
              );
            })}
          </td>
          <td className="table-column">
            <h1 className="table-header">Value</h1>
            {/* for every value in the previously created values array, create a table entry */}

            {responseObjectValues.map((value) => {
              if (value) {
                return (
                  <div className="table-cell" key={uuidv4()}>
                    {value}
                  </div>
                );
              }
              return (
                // if there is no value, return a div with specific text
                <div className="table-cell" key={uuidv4()}>
                  Not Available
                </div>
              );
            })}
          </td>
        </tr>
      </thead>
    </table>
  );
};

export default MainTable;
