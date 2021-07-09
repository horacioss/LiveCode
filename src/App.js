import React, { useState, useEffect } from "react";

import "./App.css";

import { getData } from "./getData";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const getUserData = async () => {
      const users = await getData();
      setData(users);
    };

    getUserData();
  }, []);

  const sortBy = (name) => {
    return data.sort((x, y) =>
      x.location[name].localeCompare(y.location[name])
    );
  };

  return (
    <div className="App">
      <input type="text" />
      <table>
        <tr>
          <th onClick={() => setData(sortBy("city"))}>City</th>
          <th onClick={() => setData(sortBy("city"))}>State</th>
          <th onClick={() => setData(sortBy("city"))}>Country</th>
          <th onClick={() => setData(sortBy("city"))}>Postcode</th>
          <th onClick={() => setData(sortBy("city"))}>Number</th>
          <th onClick={() => setData(sortBy("city"))}>Name</th>
          <th onClick={() => setData(sortBy("city"))}>Latitude</th>
          <th onClick={() => setData(sortBy("city"))}>Longitude</th>
        </tr>
        <tbody>
          {data?.map((el, i) => {
            return (
              <tr key={i}>
                <td>{el.location.city}</td>
                <td>{el.location.state}</td>
                <td>{el.location.country}</td>
                <td>{el.location.postcode}</td>
                <td>{el.location.street.number}</td>
                <td>{el.location.street.name}</td>
                <td>{el.location.coordinates.latitude}</td>
                <td>{el.location.coordinates.longitude}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
