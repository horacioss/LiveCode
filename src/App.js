import React, { useEffect, useState } from "react";

import "./App.css";

import TableUserLocation from "./components/Table";

import { sortBy } from "./utils/sortData";
import { getData } from "./utils/getData";

function App() {
  const [data, setData] = useState([]);
  const [userFiltered, setUserFiltered] = useState([]);
  const [isSorted, setIsSorted] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const sort = (name) => {
    setUserFiltered(sortBy(data, name, isSorted));
    setIsSorted(!isSorted);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    getData().then(setData);
  }, []);

  useEffect(() => {
    setUserFiltered(
      data.filter(
        (el) =>
          el.location.city.toLowerCase().includes(searchValue.toLowerCase()) ||
          el.location.state.toLowerCase().includes(searchValue.toLowerCase()) ||
          el.location.country.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, data]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search for..."
        value={searchValue}
        onChange={handleSearch}
      />
      <TableUserLocation data={userFiltered} filter={sort} />
    </div>
  );
}

export default App;
